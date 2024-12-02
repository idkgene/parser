import type { FrameworkOptions } from '@taily/shared';
import { ReactFramework } from './react';
import { VueFramework } from './vue';
import { SvelteFramework } from './svelte';
import { AstroFramework } from './astro';
import { SolidFramework } from './solid';
import { BaseFramework } from './base';

export class FrameworkFactory {
    private static instance: FrameworkFactory;
    private frameworks: Map<string, BaseFramework>;

    private constructor() {
        this.frameworks = new Map();
    }

    static getInstance(): FrameworkFactory {
        if (!FrameworkFactory.instance) {
            FrameworkFactory.instance = new FrameworkFactory();
        }
        return FrameworkFactory.instance;
    }

    getFramework(name: string, options: FrameworkOptions): BaseFramework {
        const cachedFramework = this.frameworks.get(name);
        if (cachedFramework) {
            return cachedFramework;
        }

        const framework = this.createFramework(name, options);
        this.frameworks.set(name, framework);
        return framework;
    }

    private createFramework(name: string, options: FrameworkOptions): BaseFramework {
        switch (name.toLowerCase()) {
            case 'react':
            case 'nextjs':
                return new ReactFramework(options);
            case 'vue':
            case 'nuxt':
                return new VueFramework(options);
            case 'svelte':
            case 'sveltekit':
                return new SvelteFramework(options);
            case 'astro':
                return new AstroFramework(options);
            case 'solid':
            case 'solidjs':
                return new SolidFramework(options);
            default:
                throw new Error(`Unsupported framework: ${name}`);
        }
    }

    clearCache(): void {
        this.frameworks.clear();
    }
}
