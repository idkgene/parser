import { 
    type ParserOptions,
    type ParserResult,
    type ProcessResult,
    type FrameworkType,
    PERFORMANCE_CONFIG
} from '@tailwind-optimizer/shared';
import { FrameworkFactory, FrameworkDetector } from '@tailwind-optimizer/frameworks';
import { WorkerPool } from './worker-pool';
import { Cache } from './cache';
import { ConfigValidator } from './config-validator';
import { createHash } from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';

export class Parser {
    private options: ParserOptions;
    private workerPool: WorkerPool;
    private cache: Cache;
    private frameworkFactory: FrameworkFactory;
    private frameworkDetector: FrameworkDetector;
    private configValidator: ConfigValidator;
    private fileContentCache: Map<string, string>;

    constructor(options: ParserOptions = {}) {
        this.options = this.normalizeOptions(options);
        this.workerPool = new WorkerPool();
        this.cache = new Cache(this.options);
        this.frameworkFactory = FrameworkFactory.getInstance();
        this.frameworkDetector = new FrameworkDetector();
        this.configValidator = new ConfigValidator();
        this.fileContentCache = new Map();
    }

    async parseFile(filePath: string): Promise<ParserResult> {
        const startTime = performance.now();

        try {
            // Check cache
            const cacheKey = await this.generateCacheKey(filePath);
            const cachedResult = await this.cache.get(cacheKey);
            if (cachedResult) {
                return {
                    ...cachedResult,
                    cacheHit: true,
                    processingTime: performance.now() - startTime,
                    classes: cachedResult.classes || [],
                    dependencies: cachedResult.dependencies || [],
                    errors: cachedResult.errors || []
                };
            }

            // Detect framework
            const framework = await this.detectFramework(filePath);
            if (!framework) {
                throw new Error(`Unable to detect framework for file: ${filePath}`);
            }

            // Process file
            const result = await this.processFile(filePath, framework);
            if (!result.success) {
                throw new Error(result.error || 'Unknown error during file processing');
            }

            const parserResult: ParserResult = {
                classes: result.data?.classes || [],
                dependencies: result.data?.dependencies || [],
                errors: result.data?.errors || [],
                imports: result.data?.imports,
                processingTime: performance.now() - startTime,
                cacheHit: false
            };

            // Save to cache
            await this.cache.set(cacheKey, parserResult);

            return parserResult;
        } catch (error) {
            return {
                classes: [],
                dependencies: [],
                errors: [error instanceof Error ? error.message : String(error)],
                processingTime: performance.now() - startTime,
                cacheHit: false
            };
        }
    }

    async parseFiles(filePaths: string[]): Promise<Map<string, ParserResult>> {
        const results = new Map<string, ParserResult>();
        const batchSize = this.options.optimization?.batchSize || PERFORMANCE_CONFIG.batchSize;
        const maxConcurrency = this.options.optimization?.maxConcurrency || PERFORMANCE_CONFIG.maxConcurrency;

        // Group files by frameworks for optimization
        const filesByFramework = new Map<string, string[]>();
        
        // Pre-detect frameworks for all files
        await Promise.all(filePaths.map(async (filePath) => {
            const framework = await this.detectFramework(filePath);
            if (!filesByFramework.has(framework)) {
                filesByFramework.set(framework, []);
            }
            filesByFramework.get(framework)!.push(filePath);
        }));

        // Process files by framework groups
        for (const [framework, files] of filesByFramework) {
            // Split files into batches
            for (let i = 0; i < files.length; i += batchSize) {
                const batch = files.slice(i, i + batchSize);
                
                // Process batch in parallel with concurrency limit
                const batchPromises = batch.map(filePath => this.parseFile(filePath));
                const batchResults = await Promise.all(
                    batchPromises.map(p => p.catch(e => e))
                );

                // Save results
                batch.forEach((filePath, index) => {
                    const result = batchResults[index];
                    if (!(result instanceof Error)) {
                        results.set(filePath, result);
                    }
                });

                // Clear file content cache
                this.fileContentCache.clear();

                // Run GC after each batch if needed
                if (this.shouldRunGC()) {
                    global.gc?.();
                }
            }
        }

        return results;
    }

    async validateConfig(): Promise<boolean> {
        return this.configValidator.validate(this.options);
    }

    private normalizeOptions(options: ParserOptions): ParserOptions {
        return {
            cwd: process.cwd(),
            cacheStrategy: 'memory',
            ...options,
            optimization: {
                parallel: true,
                workerPoolSize: PERFORMANCE_CONFIG.maxConcurrency,
                cacheStrategy: 'memory',
                maxCacheSize: PERFORMANCE_CONFIG.cacheSize,
                batchSize: PERFORMANCE_CONFIG.batchSize,
                maxRetries: PERFORMANCE_CONFIG.maxRetries,
                retryDelay: PERFORMANCE_CONFIG.retryDelay,
                ...options.optimization
            }
        };
    }

    private async detectFramework(filePath: string): Promise<string> {
        // If framework is specified in options, use it
        if (this.options.framework) {
            return this.options.framework;
        }

        // Otherwise try to detect automatically
        const content = await this.readFile(filePath);
        const detectedFramework = await this.frameworkDetector.detectFramework(
            content,
            filePath
        );

        if (!detectedFramework) {
            throw new Error(`Unable to detect framework for file: ${filePath}`);
        }

        return detectedFramework;
    }

    private async processFile(filePath: string, frameworkName: string): Promise<ProcessResult> {
        const content = await this.readFile(filePath);
        const framework = this.frameworkFactory.getFramework(frameworkName, {
            content: [content]
        });

        // Check syntax
        if (!framework.validateSyntax(content)) {
            return {
                success: false,
                error: `Invalid syntax in file: ${filePath}`
            };
        }

        // Use worker pool if parallel processing is enabled
        if (this.options.optimization?.parallel) {
            return this.workerPool.process(filePath, {
                framework: frameworkName,
                content,
                config: this.options.config
            });
        }

        // Otherwise process in main thread
        try {
            const parseResult = await framework.parseFile(content, filePath);
            return {
                success: true,
                data: parseResult
            };
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error during parsing'
            };
        }
    }

    private async generateCacheKey(filePath: string): Promise<string> {
        const content = await this.readFile(filePath);
        const stats = await fs.stat(filePath);
        
        return createHash('sha256')
            .update(content)
            .update(stats.mtime.toISOString())
            .update(JSON.stringify(this.options))
            .digest('hex');
    }

    private async readFile(filePath: string): Promise<string> {
        // Check file content cache
        if (this.fileContentCache.has(filePath)) {
            return this.fileContentCache.get(filePath)!;
        }

        try {
            const absolutePath = path.isAbsolute(filePath) 
                ? filePath 
                : path.resolve(this.options.cwd || process.cwd(), filePath);
                
            const content = await fs.readFile(absolutePath, 'utf-8');
            
            // Cache file content
            this.fileContentCache.set(filePath, content);
            
            return content;
        } catch (error) {
            throw new Error(`Error reading file ${filePath}: ${error}`);
        }
    }

    private handleError(error: unknown, filePath: string): Error {
        if (error instanceof Error) {
            error.message = `Error processing file ${filePath}: ${error.message}`;
            return error;
        }
        return new Error(`Unknown error processing file ${filePath}`);
    }

    private shouldRunGC(): boolean {
        if (!global.gc) return false;

        const memoryUsage = process.memoryUsage();
        const heapUsedPercentage = (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100;
        
        // Run GC if more than 75% of heap is used
        return heapUsedPercentage > 75;
    }
}
