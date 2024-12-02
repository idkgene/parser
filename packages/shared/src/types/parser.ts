import type { Config as TailwindConfig } from 'tailwindcss';
import type { TransformOptions } from 'lightningcss';
import type { FrameworkType } from '../constants';

export interface ParserOptions {
    cwd?: string;
    configPath?: string;
    framework?: string;
    cacheStrategy?: 'memory' | 'filesystem' | 'none';
    cacheDir?: string;
    exclude?: string[];
    include?: string[];
    watch?: boolean;
    minify?: boolean;
    sourcemap?: boolean;
    
    optimization?: OptimizationOptions;
    
    plugins?: ParserPlugin[];
}

export interface OptimizationOptions {
    parallel?: boolean;
    workerPoolSize?: number;
    
    cacheStrategy?: 'memory' | 'filesystem' | 'none';
    maxCacheSize?: number;
    cacheTimeout?: number;
    
    batchSize?: number;
    
    minify?: boolean;
    treeshake?: boolean;
}

export interface ParserResult {
    classes: string[];
    imports: string[];
    dependencies: string[];
    framework: string;
    processingTime: number;
    cacheHit?: boolean;
    memoryUsage?: number;
}

export interface ProcessResult {
    content: string;
    sourceMap?: string;
    dependencies: string[];
    stats: ProcessStats;
}

export interface ProcessStats {
    processTime: number;
    inputSize: number;
    outputSize: number;
    compressionRatio: number;
}

export interface CacheEntry<T> {
    data: T;
    timestamp: number;
    hash: string;
}

export interface ParserPlugin {
    name: string;
    transform?: (content: string) => string | Promise<string>;
    process?: (result: ProcessResult) => ProcessResult | Promise<ProcessResult>;
}

export interface FrameworkDetectionResult {
    framework: string;
    confidence: number;
    features: string[];
}
