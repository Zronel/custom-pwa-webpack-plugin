import webpack from 'webpack';

export interface IConfigOptions {
    entry: string;
    dist?: string;
    version?: string;
    name?: string;
    file_pattern?: RegExp;
    file_prefix?: string;
    files?: string[];
    mode?: 'development' | 'production';
}

export interface IWPConfig {
    [key: string]: string;
    entry: string;
    output: {
        path: string;
        filename: string;
    };
    module: {
        rules: any[];
    };
}


export declare function getConfig(options: IConfigOptions): webpack.Configuration;

export declare function runWebpack(options: IConfigOptions): void;

export declare function createSW(options: IConfigOptions): void;
