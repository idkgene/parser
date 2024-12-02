import { 
    type FrameworkConfig, 
    type FrameworkOptions,
    type FrameworkFeature
} from '@taily/shared';
import type { FrameworkHandler } from './types';

export abstract class BaseFramework implements FrameworkHandler {
    protected config: FrameworkConfig;
    protected options: FrameworkOptions;

    constructor(config: FrameworkConfig, options: FrameworkOptions) {
        this.config = config;
        this.options = {
            ...options,
            cacheEnabled: options.cacheEnabled ?? true,
            useParallelProcessing: options.useParallelProcessing ?? true,
            minifyOutput: options.minifyOutput ?? true
        };
    }

    get name(): string {
        return this.config.name;
    }

    get extensions(): string[] {
        return this.config.extensions;
    }

    get patterns(): string[] {
        return this.config.patterns;
    }

    abstract parseFile(content: string, filePath: string): Promise<string[]>;
    
    abstract detectFramework(options: FrameworkFeature): Promise<boolean>;
    
    abstract extractClasses(content: string): string[];
    
    abstract extractImports(content: string): string[];
    
    abstract validateSyntax(content: string): boolean;

    abstract detect(content: string): boolean;
    abstract parse(content: string): string[];
    abstract transform(content: string, features: FrameworkFeature[]): string;

    supports(feature: FrameworkFeature): boolean {
        return this.config.features?.includes(feature) ?? false;
    }

    protected async preProcess(content: string): Promise<string> {
        let processedContent = content;

        if (this.options.customTransforms) {
            for (const transform of this.options.customTransforms) {
                processedContent = transform(processedContent);
            }
        }

        return processedContent;
    }

    protected async postProcess(result: string[]): Promise<string[]> {
        if (this.options.minifyOutput) {
            result = this.minifyClasses(result);
        }

        return result;
    }

    protected minifyClasses(classes: string[]): string[] {
        return [...new Set(classes)].sort();
    }

    protected normalizeFilePath(filePath: string): string {
        return filePath.replace(/\\/g, '/');
    }
}
