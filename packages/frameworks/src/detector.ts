import { FrameworkFactory } from './factory';
import type { FrameworkDetectorOptions } from '@tailwind-optimizer/shared';

export class FrameworkDetector {
    private factory: FrameworkFactory;

    constructor() {
        this.factory = FrameworkFactory.getInstance();
    }

    async detectFramework(content: string, filePath: string): Promise<string | null> {
        const options: FrameworkDetectorOptions = { content };
        const detectionResults = await Promise.all([
            this.detectFrameworkByExtension(filePath),
            this.detectFrameworkByContent(content)
        ]);

        const detectedFrameworks = detectionResults
            .filter(Boolean)
            .filter((value, index, self) => self.indexOf(value) === index);

        return detectedFrameworks.length > 0 ? detectedFrameworks[0] : null;
    }

    private async detectFrameworkByExtension(filePath: string): Promise<string | null> {
        const extension = filePath.split('.').pop()?.toLowerCase();
        
        if (!extension) return null;

        switch (extension) {
            case 'vue':
                return 'vue';
            case 'svelte':
                return 'svelte';
            case 'astro':
                return 'astro';
            case 'jsx':
            case 'tsx':
                // TODO
                return null;
            default:
                return null;
        }
    }

    private async detectFrameworkByContent(content: string): Promise<string | null> {
        const options: FrameworkDetectorOptions = { content };
        
        const detectionResults = await Promise.all([
            this.checkReact(options),
            this.checkVue(options),
            this.checkSvelte(options),
            this.checkAstro(options),
            this.checkSolid(options)
        ]);

        return detectionResults.find(Boolean) || null;
    }

    private async checkReact(options: FrameworkDetectorOptions): Promise<string | null> {
        const framework = this.factory.getFramework('react', { content: [options.content] });
        return (await framework.detectFramework(options)) ? 'react' : null;
    }

    private async checkVue(options: FrameworkDetectorOptions): Promise<string | null> {
        const framework = this.factory.getFramework('vue', { content: [options.content] });
        return (await framework.detectFramework(options)) ? 'vue' : null;
    }

    private async checkSvelte(options: FrameworkDetectorOptions): Promise<string | null> {
        const framework = this.factory.getFramework('svelte', { content: [options.content] });
        return (await framework.detectFramework(options)) ? 'svelte' : null;
    }

    private async checkAstro(options: FrameworkDetectorOptions): Promise<string | null> {
        const framework = this.factory.getFramework('astro', { content: [options.content] });
        return (await framework.detectFramework(options)) ? 'astro' : null;
    }

    private async checkSolid(options: FrameworkDetectorOptions): Promise<string | null> {
        const framework = this.factory.getFramework('solid', { content: [options.content] });
        return (await framework.detectFramework(options)) ? 'solid' : null;
    }
}
