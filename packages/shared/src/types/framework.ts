export interface FrameworkConfig {
    name: string;
    extensions: string[];
    filePatterns: string[];
    features: string[];
}

export interface FrameworkParseResult {
    classes: string[];
    imports: string[];
    dependencies: string[];
}

export interface FrameworkOptions {
    cacheEnabled?: boolean;
    useParallelProcessing?: boolean;
    minifyOutput?: boolean;
    customTransforms?: Array<(content: string) => string>;
}

export interface FrameworkDetectorOptions {
    content: string;
    filePath: string;
    features?: string[];
}
