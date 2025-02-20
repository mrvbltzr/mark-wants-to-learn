import gemini from './gemini';

/**
 * Converts string to title case using AI.
 */
export default async (title: string): Promise<string> => {
    if (!title) {
        new window.Notice('No action performed.', 5_000);
        return '';
    }

    return await gemini(`Can you convert this to title case, with acronyms propely capitalized: ${title}`);
};
