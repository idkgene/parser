import { BaseFramework } from './base';
import type {
    FrameworkConfig,
    FrameworkParseResult,
    FrameworkOptions,
    FrameworkDetectorOptions,
    FrameworkFeature
} from '@taily/shared';
import type { FrameworkHandler } from './types';

export class SvelteFramework extends BaseFramework implements FrameworkHandler {
    constructor(options: FrameworkOptions) {
        const config: FrameworkConfig = {
            name: 'svelte',
            extensions: ['.svelte'],
            patterns: ['**/*.svelte'],
            features: ['svelte', 'svelte-template', 'svelte-script']
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

        // Check for Svelte-specific syntax
        const hasSvelteScript = /<script\b[^>]*>/.test(options.content);
        const hasSvelteImport = /import\s+(?:\{[^}]*\}\s+from\s+)?['"]svelte['"]/.test(options.content);
        const hasSvelteSyntax = /{#if|{#each|{#await/.test(options.content);

        // Check for framework features if provided
        if (options.features?.length) {
            return options.features.some(feature => 
                this.config.features?.includes(feature)
            );
        }

        return hasSvelteScript || hasSvelteImport || hasSvelteSyntax;
    }

    extractClasses(content: string): string[] {
        const classes: string[] = [];
        
        // Extract classes from template
        const classRegexes = [
            /class=["']([^"']+)["']/g,
            /class:([^\s"'=]+)=["'][^"']*["']/g,
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
            // Basic Svelte component validation
            const hasScript = /<script\b[^>]*>/.test(content);
            const hasStyle = /<style\b[^>]*>/.test(content);
            const hasTemplate = content.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, '').trim().length > 0;

            return hasTemplate || hasScript || hasStyle;
        } catch (error) {
            return false;
        }
    }

    supports(feature: FrameworkFeature): boolean {
        return this.config.features?.includes(feature) ?? false;
    }
}
