import dotenv from 'dotenv';
import { join } from 'path';
import { readFile } from 'fs/promises';

interface EnvKeys extends dotenv.DotenvParseOutput {
    COURSE_TITLE: string;
    COURSE_URL: string;
}

const currentVaultPath: string | null = (() => {
    if (window.app && window.app.vault && window.app.vault.adapter) {
        return (window.app.vault.adapter as unknown as { basePath: string }).basePath || null;
    }

    return null;
})();

/**
 * Accesses and retrieves keys and values from the .env file.
 */
export default async (key?: keyof EnvKeys): Promise<string> => {
    if (!currentVaultPath) {
        new window.Notice('Vault is not set.', 5_000);
        return '';
    }

    const envContent = await readFile(join(currentVaultPath, '.metadata'));
    const envs = dotenv.parse<EnvKeys>(envContent);

    return key ? envs[key] : String(envContent);
};
