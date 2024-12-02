import { BaseFramework } from './base';
import type {
    FrameworkConfig,
    FrameworkParseResult,
    FrameworkOptions,
    FrameworkDetectorOptions,
    FrameworkFeature
} from '@taily/shared';
import type { FrameworkHandler } from './types';

export class AstroFramework extends BaseFramework implements FrameworkHandler {
    constructor(options: FrameworkOptions) {
        const config: FrameworkConfig = {
            name: 'astro',
            extensions: ['.astro'],
            patterns: ['**/*.astro'],
            features: ['astro', 'astro-template', 'astro-script']
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

        // Check for Astro-specific syntax
        const hasAstroFrontmatter = /---[\s\S]*?---/.test(options.content);
        const hasAstroImport = /import\s+(?:\{[^}]*\}\s+from\s+)?['"]@astrojs\/[^"']*['"]/.test(options.content);
        const hasAstroComponent = /<[A-Z][A-Za-z0-9]*\s+.*?client:/.test(options.content);

        // Check for framework features if provided
        if (options.features?.length) {
            return options.features.some(feature => 
                this.config.features?.includes(feature)
            );
        }

        return hasAstroFrontmatter || hasAstroImport || hasAstroComponent;
    }

    supports(feature: FrameworkFeature): boolean {
        return this.config.features?.includes(feature);
    }

    extractClasses(content: string): string[] {
        const classes: string[] = [];
        
        // Extract classes from template
        const classRegexes = [
            /class=["']([^"']+)["']/g,
            /class:list=\{([^}]+)\}/g,
            /class:([^\s"'=]+)/g
        ];

        classRegexes.forEach(regex => {
            let match;
            while ((match = regex.exec(content)) !== null) {
                const classNames = match[1].split(/\s+/);
                classes.push(...classNames);
            }
        });

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
            // Basic Astro component validation
            const hasFrontmatter = /^---[\s\S]*?---/.test(content);
            const hasValidContent = content.replace(/^---[\s\S]*?---/, '').trim().length > 0;

            return hasFrontmatter && hasValidContent;
        } catch (error) {
            return false;
        }
    }
}
