import { defineConfig } from 'taze'

export default defineConfig({
  ignorePaths: [
    '**/node_modules/**',
    '**/test/**',
  ],
  
  install: true,
  
  write: true,
  
  packageMode: {
    'typescript': 'latest',
    'tailwindcss': 'latest',
    'lightningcss': 'latest',
    'postcss': 'latest',
    'tsup': 'latest',
    'zod': 'latest'
  },
  
  depFields: {
    dependencies: true,
    devDependencies: true,
    peerDependencies: true
  }
});
