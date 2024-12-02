export interface ProcessingError extends Error {
    code: string;
    filePath: string;
    retryCount?: number;
}

export interface ValidationError extends Error {
    code: string;
    field: string;
    value: any;
}

export interface FrameworkError extends Error {
    code: string;
    framework: string;
    feature?: string;
}
