import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY).getGenerativeModel({
    model: 'gemini-2.0-flash',
});

const model = ai.model.split('/')[1];

/**
 * Generates content based on the provided prompt using the Gemini AI model.
 */
export default async (prompt: string): Promise<string> => {
    const notice = new window.Notice(`Talking to ${model}. Please wait...`, 0);

    try {
        return (await ai.generateContent(prompt.trim())).response.text();
    } catch (e: unknown) {
        return e instanceof Error ? `\`${e.message}\`\n` : '`Error\n`';
    } finally {
        notice.hide();
    }
};
