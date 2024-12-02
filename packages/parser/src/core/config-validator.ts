import { z } from 'zod';
import type { ParserOptions } from '@tailwind-optimizer/shared';
import { promises as fs } from 'fs';
import path from 'path';

export class ConfigValidator {
    private schema: z.ZodType<ParserOptions>;

    constructor() {
        this.schema = this.createSchema();
    }

    async validate(options: ParserOptions): Promise<boolean> {
        try {
            await this.validateOptions(options);

            if (options.configPath) {
                await this.validateTailwindConfig(options.configPath);
            }

            await this.validatePaths(options);

            return true;
        } catch (error) {
            this.logError('Configuration validation failed', error);
            return false;
        }
    }

    private createSchema(): z.ZodType<ParserOptions> {
        return z.object({
            cwd: z.string().optional(),
            configPath: z.string().optional(),
            framework: z.string().optional(),
            
            cacheStrategy: z.enum(['memory', 'filesystem', 'none']).optional(),
            cacheDir: z.string().optional(),
            
            exclude: z.array(z.string()).optional(),
            include: z.array(z.string()).optional(),
            
            watch: z.boolean().optional(),
            minify: z.boolean().optional(),
            sourcemap: z.boolean().optional(),
            
            optimization: z.object({
                parallel: z.boolean().optional(),
                workerPoolSize: z.number().positive().optional(),
                cacheStrategy: z.enum(['memory', 'filesystem', 'none']).optional(),
                maxCacheSize: z.number().positive().optional(),
                cacheTimeout: z.number().positive().optional(),
                batchSize: z.number().positive().optional(),
                minify: z.boolean().optional(),
                treeshake: z.boolean().optional()
            }).optional(),
            
            plugins: z.array(
                z.union([
                    z.string(),
                    z.tuple([z.string(), z.record(z.any())])
                ])
            ).optional()
        });
    }

    private async validateOptions(options: ParserOptions): Promise<void> {
        this.schema.parse(options);

        if (options.cwd) {
            const cwdExists = await this.pathExists(options.cwd);
            if (!cwdExists) {
                throw new Error(`Working directory does not exist: ${options.cwd}`);
            }
        }

        if (options.framework) {
            this.validateFramework(options.framework);
        }

        if (options.optimization?.workerPoolSize) {
            const cpuCount = require('os').cpus().length;
            if (options.optimization.workerPoolSize > cpuCount) {
                this.logWarning(`Worker pool size (${options.optimization.workerPoolSize}) exceeds CPU count (${cpuCount})`, null);
            }
        }
    }

    private async validateTailwindConfig(configPath: string): Promise<void> {
        const fullPath = path.resolve(configPath);
        
        const exists = await this.pathExists(fullPath);
        if (!exists) {
            throw new Error(`Tailwind config file not found: ${fullPath}`);
        }

        try {
            const config = require(fullPath);
            
            if (typeof config !== 'object') {
                throw new Error('Tailwind config must export an object');
            }

            if (config.content && !Array.isArray(config.content)) {
                throw new Error('content section must be an array');
            }

            if (config.theme && typeof config.theme !== 'object') {
                throw new Error('theme section must be an object');
            }
        } catch (error) {
            throw new Error(`Invalid Tailwind config: ${error.message}`);
        }
    }

    private async validatePaths(options: ParserOptions): Promise<void> {
        if (options.include) {
            for (const pattern of options.include) {
                if (pattern.includes('..')) {
                    throw new Error(`Include pattern contains parent directory reference: ${pattern}`);
                }
            }
        }

        if (options.exclude) {
            for (const pattern of options.exclude) {
                if (pattern.includes('..')) {
                    throw new Error(`Exclude pattern contains parent directory reference: ${pattern}`);
                }
            }
        }

        if (options.cacheDir) {
            try {
                await fs.access(options.cacheDir);
            } catch {
                try {
                    await fs.mkdir(options.cacheDir, { recursive: true });
                } catch (error) {
                    throw new Error(`Unable to create cache directory: ${error.message}`);
                }
            }
        }
    }

    private validateFramework(framework: string): void {
        const validFrameworks = ['react', 'vue', 'svelte', 'astro', 'solid'];
        const normalizedFramework = framework.toLowerCase();

        if (!validFrameworks.includes(normalizedFramework)) {
            throw new Error(`Unsupported framework: ${framework}. Valid frameworks are: ${validFrameworks.join(', ')}`);
        }
    }

    private async pathExists(filepath: string): Promise<boolean> {
        try {
            await fs.access(filepath);
            return true;
        } catch {
            return false;
        }
    }

    private logError(message: string, error: unknown): void {
        console.error(`[ConfigValidator] ${message}:`, error instanceof Error ? error.message : String(error));
    }

    private logWarning(message: string, error: unknown): void {
        console.warn(`[ConfigValidator] ${message}:`, error instanceof Error ? error.message : String(error));
    }
}
