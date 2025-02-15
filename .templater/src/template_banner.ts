import { encode } from 'html-entities';
import titleCase from './title_case';
import type { Templater } from './types';

const courseTitle = encode('__TITLE__');
const courseTitleSnake = courseTitle.replace(/\s/g, '_').replace(/_-_/g, '_--_');

const titlePipe = (title: string, ...acronyms: string[]): string => {
    title = title.replace(/^\d+-/, ''); // remove ##- prefix
    title = title.replace(/---|-/g, (match) => (match === '---' ? ' - ' : ' ')); // convert --- to - and - to space
    title = titleCase(title, ...acronyms); // change to title case

    return title;
};

export default async (tp: Templater, ...acronyms: string[]) => {
    const title = titlePipe(await tp.system.prompt('Set Title', tp.file.title), ...acronyms);

    return /*HTML*/ `
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="__URL__">
<img src="https://img.shields.io/badge/${courseTitleSnake}-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="${courseTitle}" />
</a>
<h1>${title}</h1>
</div>
</div>`.trim();
};
