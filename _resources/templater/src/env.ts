import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';

export interface Templater {
    file: {
        path: (absolute?: boolean) => string;
    };
}

/**
 * Access the .env file.
 */
export default async (tp: Templater, key?: string) => {
    const envContent = await readFile(join(dirname(tp.file.path()), '.env'));
    const envs = dotenv.parse(envContent);

    return key ? envs[key] : envContent;
};
