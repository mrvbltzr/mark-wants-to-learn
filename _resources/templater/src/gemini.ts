import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import type { Notice } from 'obsidian';

interface Templater {
    obsidian: {
        Notice: typeof Notice;
    };
}

dotenv.config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY).getGenerativeModel({
    model: 'gemini-1.5-flash',
});

const model = ai.model.split('/')[1];

export default async (tp: Templater, prompt: string) => {
    const notice = new tp.obsidian.Notice(`Talking to ${model}. Please wait...`, 0);
    const result = await ai.generateContent(prompt.trim());

    notice.hide();

    return result.response.text();
};
