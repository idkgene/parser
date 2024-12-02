import { existsSync } from 'fs';
import { resolve } from 'path';
import { SUPPORTED_FRAMEWORKS, FILE_EXTENSIONS, type SupportedFramework } from './constants';
import type { FrameworkConfig } from './types';

export function resolveConfig(configPath?: string): string | null {
    if (!configPath) return null;
    
    const absolutePath = resolve(process.cwd(), configPath);
    return existsSync(absolutePath) ? absolutePath : null;
}

export function detectFramework(files: string[]): SupportedFramework | null {
    const extensions = files.map(file => {
        const ext = file.slice(file.lastIndexOf('.'));
        return ext.toLowerCase();
    });

    for (const framework of SUPPORTED_FRAMEWORKS) {
        const frameworkExts = FILE_EXTENSIONS[framework];
        if (extensions.some(ext => frameworkExts.includes(ext))) {
            return framework;
        }
    }

    return null;
}

export function getFrameworkConfig(framework: string): FrameworkConfig | null {
    if (!SUPPORTED_FRAMEWORKS.includes(framework as SupportedFramework)) {
        return null;
    }

    const extensions = FILE_EXTENSIONS[framework as SupportedFramework];
    
    return {
        name: framework,
        extensions,
        patterns: [`**/*{${extensions.join(',')}}`]
    };
}

export function validateFiles(files: string[]): boolean {
    return files.length > 0 && files.every(file => existsSync(file));
}
