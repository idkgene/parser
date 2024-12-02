import { 
    type ParserOptions,
    type CacheEntry,
    PERFORMANCE_CONFIG
} from '@taily/shared';
import { createHash } from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';

export class Cache {
    private memoryCache: Map<string, CacheEntry>;
    private currentSize: number;
    private cleanupInterval: NodeJS.Timeout | null;
    private options: ParserOptions;

    constructor(options: ParserOptions) {
        this.memoryCache = new Map();
        this.currentSize = 0;
        this.cleanupInterval = null;
        this.options = options;

        // Start cleanup interval if using memory cache
        if (this.options.cacheStrategy === 'memory') {
            this.startCleanupInterval();
        }
    }

    async get(key: string): Promise<any | null> {
        const strategy = this.options.cacheStrategy || 'memory';

        switch (strategy) {
            case 'memory':
                return this.getFromMemory(key);
            case 'filesystem':
                return this.getFromFileSystem(key);
            case 'none':
            default:
                return null;
        }
    }

    async set(key: string, value: any): Promise<void> {
        const strategy = this.options.cacheStrategy || 'memory';

        switch (strategy) {
            case 'memory':
                await this.setInMemory(key, value);
                break;
            case 'filesystem':
                await this.setInFileSystem(key, value);
                break;
            case 'none':
            default:
                break;
        }
    }

    private getFromMemory(key: string): any | null {
        const entry = this.memoryCache.get(key);
        if (!entry) return null;

        const now = Date.now();
        const maxAge = this.options.optimization?.cacheTimeout || PERFORMANCE_CONFIG.cacheTTL;

        if (now - entry.timestamp > maxAge) {
            this.memoryCache.delete(key);
            this.currentSize -= entry.size;
            return null;
        }

        return entry.value;
    }

    private async setInMemory(key: string, value: any): Promise<void> {
        const maxSize = PERFORMANCE_CONFIG.CACHE_MAX_SIZE;
        const entrySize = this.calculateSize(value);

        // Ensure we have space
        while (this.currentSize + entrySize > maxSize) {
            const oldestKey = this.findOldestEntry();
            if (!oldestKey) break;

            const oldEntry = this.memoryCache.get(oldestKey);
            if (oldEntry) {
                this.currentSize -= oldEntry.size;
                this.memoryCache.delete(oldestKey);
            }
        }

        const entry: CacheEntry = {
            key,
            value,
            timestamp: Date.now(),
            size: entrySize
        };

        this.memoryCache.set(key, entry);
        this.currentSize += entrySize;
    }

    private async getFromFileSystem(key: string): Promise<any | null> {
        if (!this.options.cacheDir) return null;

        const filePath = path.join(this.options.cacheDir, this.sanitizeKey(key));
        
        try {
            const data = await fs.readFile(filePath, 'utf-8');
            const entry: CacheEntry = JSON.parse(data);

            const now = Date.now();
            const maxAge = this.options.optimization?.cacheTimeout || PERFORMANCE_CONFIG.cacheTTL;

            if (now - entry.timestamp > maxAge) {
                await fs.unlink(filePath).catch(() => {});
                return null;
            }

            return entry.value;
        } catch {
            return null;
        }
    }

    private async setInFileSystem(key: string, value: any): Promise<void> {
        if (!this.options.cacheDir) return;

        const entry: CacheEntry = {
            key,
            value,
            timestamp: Date.now(),
            size: this.calculateSize(value)
        };

        const filePath = path.join(this.options.cacheDir, this.sanitizeKey(key));
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, JSON.stringify(entry));
    }

    private startCleanupInterval(): void {
        if (this.cleanupInterval) return;

        this.cleanupInterval = setInterval(() => {
            this.cleanup();
        }, PERFORMANCE_CONFIG.CACHE_CLEANUP_INTERVAL);
    }

    private cleanup(): void {
        const now = Date.now();
        const maxAge = this.options.optimization?.cacheTimeout || PERFORMANCE_CONFIG.cacheTTL;

        for (const [key, entry] of this.memoryCache.entries()) {
            if (now - entry.timestamp > maxAge) {
                this.currentSize -= entry.size;
                this.memoryCache.delete(key);
            }
        }
    }

    private findOldestEntry(): string | null {
        let oldestKey: string | null = null;
        let oldestTime = Infinity;

        for (const [key, entry] of this.memoryCache.entries()) {
            if (entry.timestamp < oldestTime) {
                oldestTime = entry.timestamp;
                oldestKey = key;
            }
        }

        return oldestKey;
    }

    private calculateSize(value: any): number {
        return Buffer.byteLength(JSON.stringify(value));
    }

    private sanitizeKey(key: string): string {
        return key.replace(/[^a-z0-9]/gi, '_');
    }

    dispose(): void {
        if (this.cleanupInterval) {
            clearInterval(this.cleanupInterval);
            this.cleanupInterval = null;
        }
        this.memoryCache.clear();
        this.currentSize = 0;
    }
}
