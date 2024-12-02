export interface ConfigOptions {
    cwd?: string;
    configPath?: string;
    watch?: boolean;
}

export interface Config {
    rootDir: string;
    outDir: string;
    include: string[];
    exclude: string[];
    
    framework?: string;
    frameworkOptions?: Record<string, any>;
    
    optimization: {
        minify: boolean;
        treeshake: boolean;
        parallel: boolean;
        cache: boolean;
        sourcemap: boolean;
    };
    
    plugins: Array<string | [string, Record<string, any>]>;
    
    paths: {
        root: string;
        config: string;
        cache: string;
        temp: string;
    };
}
