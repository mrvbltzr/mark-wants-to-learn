import * as o from 'obsidian';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GEMINI_API_KEY: string;
        }
    }

    interface Window {
        app: o.App;
        Notice: typeof o.Notice;
    }
}

export {};
