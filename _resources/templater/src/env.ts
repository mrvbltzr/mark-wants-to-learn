import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';

interface Templater {
    file: {
        path: (absolute?: boolean) => string;
    };
}

interface EnvKeys extends dotenv.DotenvParseOutput {
    COURSE_TITLE: string;
    COURSE_URL: string;
}

/**
 * Access the .env file.
 */
export default async (tp: Templater, key?: keyof EnvKeys) => {
    const envContent = await readFile(join(dirname(tp.file.path()), '.metadata'));
    const envs = dotenv.parse<EnvKeys>(envContent);

    return key ? envs[key] : envContent;
};
