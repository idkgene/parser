// Default configuration values

export const DEFAULT_CONFIG = {
    cache: {
        enabled: true,
        directory: '.taily-cache',
        ttl: 3600 // 1 hour
    },
    worker: {
        maxWorkers: Math.max(1, Math.floor(require('os').cpus().length * 0.75)),
        timeout: 30000 // 30 seconds
    }
};

export const SUPPORTED_FRAMEWORKS = [
    'react',
    'vue',
    'svelte',
    'astro',
    'solid'
] as const;

export type SupportedFramework = typeof SUPPORTED_FRAMEWORKS[number];

export const FILE_EXTENSIONS: Record<SupportedFramework, string[]> = {
    react: ['.jsx', '.tsx'],
    vue: ['.vue'],
    svelte: ['.svelte'],
    astro: ['.astro'],
    solid: ['.jsx', '.tsx']
};

export const PERFORMANCE_CONFIG = {
    chunkSize: 1000,
    maxConcurrency: 4,
    workerTimeout: 30000,
    cacheSize: 100 * 1024 * 1024, // 100MB
    cacheTTL: 3600000, // 1 hour
    batchSize: 100,
    maxRetries: 3,
    retryDelay: 1000,
    CACHE_MAX_SIZE: 500 * 1024 * 1024, // 500MB
    CACHE_TTL: 3600000, // 1 hour
    CACHE_CLEANUP_INTERVAL: 300000 // 5 minutes
} as const;
