import { ConfigLoader } from '../src/core/config';
import * as path from 'path';

async function validateConfig() {
    const configPath = process.argv[2];
    if (!configPath) {
        console.error('Please provide a path to your Tailwind config file');
        process.exit(1);
    }

    try {
        const absolutePath = path.resolve(process.cwd(), configPath);
        const result = await ConfigLoader.validateConfigFile(absolutePath);

        if (result.isValid) {
            console.log('✅ Config is valid!');
            process.exit(0);
        } else {
            console.error('❌ Config validation failed:');
            result.errors?.forEach(error => console.error(`  - ${error}`));
            process.exit(1);
        }
    } catch (error) {
        console.error('❌ Validation failed:', error);
        process.exit(1);
    }
}

validateConfig();
