export const FRAMEWORK_CONFIG = {
    REACT: {
        name: 'react',
        extensions: ['.jsx', '.tsx'],
        filePatterns: ['*.jsx', '*.tsx'],
        features: ['jsx', 'react', 'reactDOM']
    },
    VUE: {
        name: 'vue',
        extensions: ['.vue'],
        filePatterns: ['*.vue'],
        features: ['vue', 'defineComponent', 'setup']
    },
    SVELTE: {
        name: 'svelte',
        extensions: ['.svelte'],
        filePatterns: ['*.svelte'],
        features: ['svelte']
    },
    ASTRO: {
        name: 'astro',
        extensions: ['.astro'],
        filePatterns: ['*.astro'],
        features: ['astro']
    },
    SOLID: {
        name: 'solid',
        extensions: ['.jsx', '.tsx'],
        filePatterns: ['*.jsx', '*.tsx'],
        features: ['solid', 'createSignal', 'createEffect']
    }
} as const;

export type FrameworkType = keyof typeof FRAMEWORK_CONFIG;
