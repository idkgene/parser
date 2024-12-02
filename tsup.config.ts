import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: true,
    clean: true,
    minify: true,
    sourcemap: true,
    treeshake: true,
    target: 'node16',
    outDir: 'dist',
    external: [
        'tailwindcss',
        'lightningcss',
        'postcss',
        'fast-glob',
        'zod'
    ],
    esbuildOptions(options) {
        options.footer = {
            js: 'if (typeof module !== "undefined") module.exports.workerPath = __filename;'
        };
    }
});
