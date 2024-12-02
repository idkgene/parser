export interface WorkerMessage {
    type: 'process_file' | 'cleanup' | 'status';
    payload: {
        filePath?: string;
        options?: ProcessFileOptions;
        error?: string;
    };
}

export interface WorkerResult {
    filePath: string;
    classes: string[];
    imports: string[];
    dependencies: string[];
    framework: string;
    processingTime: number;
    cacheHit?: boolean;
    memoryUsage?: number;
}

export interface ProcessFileOptions {
    framework?: string;
    cacheEnabled?: boolean;
    useParallelProcessing?: boolean;
    minifyOutput?: boolean;
    ignorePatterns?: string[];
    customTransforms?: Array<(content: string) => string>;
}

export interface WorkerMetrics {
    totalProcessed: number;
    totalErrors: number;
    totalRetries: number;
    averageProcessingTime: number;
    peakMemoryUsage: number;
    activeWorkers: number;
    busyWorkers: number;
    queueLength: number;
    currentMemoryUsage: number;
    memoryUsage: number;
    processingTime: number;
}
