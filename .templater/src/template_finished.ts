import type { Templater } from './types';

const getDateFromFooter = (tp: Templater): string => {
    const regex = /<div.*align="(?:left|center|right)".*>(\d{4}-\d{2}-\d{2})<\/div>/;
    const match = tp.file.content.match(regex);

    return match ? match[1] : tp.date.now();
};

export default async (tp: Templater): Promise<string> => {
    const date = await tp.system.prompt(`Set Finish Date (YYYY-MM-DD)`, getDateFromFooter(tp));

    return /* HTML */ `
<div align="center">
<img src="https://img.shields.io/badge/Finished-${date.replace(/-/g, '--')}-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>`.trim();
};
