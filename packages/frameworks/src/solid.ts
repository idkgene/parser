import { BaseFramework } from './base';
import type {
    FrameworkConfig,
    FrameworkParseResult,
    FrameworkOptions,
    FrameworkDetectorOptions,
    FrameworkFeature
} from '@taily/shared';
import type { FrameworkHandler } from './types';

export class SolidFramework extends BaseFramework implements FrameworkHandler {
    constructor(options: FrameworkOptions) {
        const config: FrameworkConfig = {
            name: 'solid',
            extensions: ['.jsx', '.tsx'],
            patterns: ['**/*.jsx', '**/*.tsx'],
            features: ['solid', 'solid-js', 'jsx', 'tsx']
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

        // Check for Solid-specific syntax
        const hasSolidImport = /import\s+(?:\{[^}]*\}\s+from\s+)?['"]solid-js['"]/.test(options.content);
        const hasSolidComponent = /(?:createSignal|createEffect|createMemo|createResource)/.test(options.content);
        const hasJsxSyntax = /<[A-Z][A-Za-z0-9]*/.test(options.content);

        // Check for framework features if provided
        if (options.features?.length) {
            return options.features.some(feature => 
                this.config.features?.includes(feature)
            );
        }

        return hasSolidImport || (hasSolidComponent && hasJsxSyntax);
    }

    supports(feature: FrameworkFeature): boolean {
        return this.config.features?.includes(feature) ?? false;
    }

    extractClasses(content: string): string[] {
        const classes: string[] = [];
        
        // Extract classes from template
        const classRegexes = [
            /class=["']([^"']+)["']/g,
            /classList=\{([^}]+)\}/g,
            /className=["']([^"']+)["']/g
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
            // Basic Solid component validation
            const hasSolidImport = /import\s+(?:\{[^}]*\}\s+from\s+)?['"]solid-js['"]/.test(content);
            const hasJsxSyntax = /<[A-Z][A-Za-z0-9]*/.test(content);
            const hasValidExport = /export\s+(?:default\s+)?(?:function|const)\s+\w+/.test(content);

            return hasSolidImport && (hasJsxSyntax || hasValidExport);
        } catch (error) {
            return false;
        }
    }
}
