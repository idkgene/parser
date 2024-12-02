import { BaseFramework } from './base';
import type {
    FrameworkConfig,
    FrameworkParseResult,
    FrameworkOptions,
    FrameworkDetectorOptions,
    FrameworkFeature
} from '@taily/shared';
import type { FrameworkHandler } from './types';

export class ReactFramework extends BaseFramework implements FrameworkHandler {
    constructor(options: FrameworkOptions) {
        const config: FrameworkConfig = {
            name: 'react',
            extensions: ['.jsx', '.tsx'],
            patterns: ['**/*.jsx', '**/*.tsx'],
            features: ['jsx', 'tsx', 'react']
        };
        super(config, options);
    }

    async parseFile(content: string, filePath: string): Promise<FrameworkParseResult> {
        const processedContent = await this.preProcess(content);
        const classes = this.extractClasses(processedContent);
        const imports = this.extractImports(processedContent);

        const result = {
            classes,
            dependencies: [],
            errors: [],
            imports
        };

        return this.postProcess(result);
    }

    async detectFramework(options: FrameworkDetectorOptions): Promise<boolean> {
        if (!options.content) return false;

        // Check for React-specific imports
        const hasReactImport = /import\s+(?:\*\s+as\s+)?React/.test(options.content);
        const hasJsxSyntax = /<[A-Z][A-Za-z0-9]*/.test(options.content);

        // Check for framework features if provided
        if (options.features?.length) {
            return options.features.some(feature => 
                this.config.features?.includes(feature)
            );
        }

        return hasReactImport || hasJsxSyntax;
    }

    extractClasses(content: string): string[] {
        const classes: string[] = [];
        const classNameRegex = /className=["']([^"']+)["']/g;
        let match;

        while ((match = classNameRegex.exec(content)) !== null) {
            const classNames = match[1].split(/\s+/);
            classes.push(...classNames);
        }

        return [...new Set(classes)];
    }

    extractImports(content: string): string[] {
        const imports: string[] = [];
        const importRegex = /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+[^,]*|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+[^,]*|\w+))*\s+from\s+)?["']([^"']+)["']/g;
        let match;

        while ((match = importRegex.exec(content)) !== null) {
            imports.push(match[1]);
        }

        return imports;
    }

    validateSyntax(content: string): boolean {
        try {
            // Basic JSX syntax validation
            const hasValidJsx = /<[A-Z][A-Za-z0-9]*/.test(content) && 
                               /import\s+(?:\*\s+as\s+)?React/.test(content);
            return hasValidJsx;
        } catch (error) {
            return false;
        }
    }

    supports(feature: FrameworkFeature): boolean {
        return this.config.features?.includes(feature);
    }
}
