export interface OptimizeOptions {
    input: string | string[];
    output?: string;
    framework?: string;
    config?: string;
    cache?: boolean;
    watch?: boolean;
}

export interface ParserOptions {
    content?: string[];
    config?: string;
    configPath?: string;
    framework?: string;
    optimization?: OptimizationOptions;
    cwd?: string;
    include?: string[];
    exclude?: string[];
    cacheDir?: string;
    cacheStrategy?: 'memory' | 'filesystem' | 'none';
}

export interface FrameworkConfig {
    name: string;
    extensions: string[];
    patterns: string[];
    features?: string[];
}

export interface CacheConfig {
    enabled: boolean;
    directory?: string;
    ttl?: number;
}

export interface WorkerConfig {
    maxWorkers?: number;
    timeout?: number;
}

export interface FrameworkParseResult {
    classes: string[];
    dependencies: string[];
    errors: string[];
    imports?: string[];
}

export interface FrameworkOptions {
    content: string[];
    config?: string;
    cacheEnabled?: boolean;
    useParallelProcessing?: boolean;
    minifyOutput?: boolean;
    customTransforms?: Array<(content: string) => string>;
}

export interface FrameworkDetectorOptions {
    content: string;
    features?: string[];
}

export interface ParserResult extends FrameworkParseResult {
    classes: string[];
    dependencies: string[];
    errors: string[];
    imports?: string[];
    cacheHit?: boolean;
    processingTime?: number;
    stats?: {
        totalFiles: number;
        processedFiles: number;
        errorFiles: number;
        cacheHits: number;
        totalTime: number;
    };
}

export interface ProcessResult {
    success: boolean;
    error?: string;
    data?: any;
}

export type FrameworkType = 'react' | 'vue' | 'svelte' | 'astro' | 'solid';

export interface OptimizationOptions {
    minify?: boolean;
    removeUnused?: boolean;
    combineMediaQueries?: boolean;
    combineDuplicates?: boolean;
    mergeRules?: boolean;
    parallel?: boolean;
    batchSize?: number;
    maxConcurrency?: number;
    workerPoolSize?: number;
    cacheStrategy?: 'memory' | 'filesystem' | 'none';
    maxCacheSize?: number;
    maxRetries?: number;
    retryDelay?: number;
    cacheTimeout?: number;
}

export interface WorkerMessage {
    type: 'process' | 'terminate';
    filePath?: string;
    content?: string;
    options?: ProcessFileOptions;
}

export interface WorkerResult {
    success: boolean;
    error?: string;
    data?: {
        classes: string[];
        dependencies: string[];
        errors: string[];
        imports?: string[];
    };
    metrics?: WorkerMetrics;
}

export interface WorkerMetrics {
    processingTime: number;
    memoryUsage: {
        heapUsed: number;
        heapTotal: number;
        external: number;
        arrayBuffers: number;
    };
}

export interface ProcessFileOptions {
    framework: string;
    content: string;
    config?: any;
}

export interface CacheEntry {
    key: string;
    value: ParserResult;
    timestamp: number;
    size: number;
}
