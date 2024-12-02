export const RUNTIME_CONFIG = {
    MODE: {
        DEVELOPMENT: 'development',
        PRODUCTION: 'production'
    },
    
    PATHS: {
        CONFIG: 'tailwind.config.js',
        CACHE: '.tailwind-cache',
        TEMP: '.tailwind-temp'
    },
    
    EXTENSIONS: {
        CONFIG: ['.js', '.cjs', '.mjs', '.ts'],
        STYLE: ['.css', '.scss', '.less', '.styl'],
        TEMPLATE: ['.html', '.jsx', '.tsx', '.vue', '.svelte', '.astro']
    }
} as const;
