import { BaseFramework } from './base';
import type {
    FrameworkConfig,
    FrameworkParseResult,
    FrameworkOptions,
    FrameworkDetectorOptions,
    FrameworkFeature
} from '@tailwind-optimizer/shared';
import type { FrameworkHandler } from './types';

export class VueFramework extends BaseFramework implements FrameworkHandler {
    constructor(options: FrameworkOptions) {
        const config: FrameworkConfig = {
            name: 'vue',
            extensions: ['.vue'],
            patterns: ['**/*.vue'],
            features: ['vue', 'vue-template', 'vue-script']
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

        // Check for Vue-specific syntax
        const hasVueTemplate = /<template>/.test(options.content);
        const hasVueScript = /<script\b[^>]*>/.test(options.content);
        const hasVueImport = /import\s+(?:\{[^}]*\}\s+from\s+)?['"]vue['"]/.test(options.content);

        // Check for framework features if provided
        if (options.features?.length) {
            return options.features.some(feature => 
                this.config.features?.includes(feature)
            );
        }

        return hasVueTemplate || (hasVueScript && hasVueImport);
    }

    extractClasses(content: string): string[] {
        const classes: string[] = [];
        
        // Extract classes from template
        const classRegexes = [
            /class=["']([^"']+)["']/g,
            /:class=["']\{([^}]+)\}["']/g,
            /:class=["']\[([^\]]+)\]["']/g
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

    supports(feature: FrameworkFeature): boolean {
        return this.config.features?.includes(feature) ?? false;
    }

    validateSyntax(content: string): boolean {
        try {
            // Basic Vue SFC validation
            const hasTemplate = /<template>/.test(content);
            const hasScript = /<script\b[^>]*>/.test(content);
            const hasValidStructure = hasTemplate || hasScript;

            return hasValidStructure;
        } catch (error) {
            return false;
        }
    }
}
