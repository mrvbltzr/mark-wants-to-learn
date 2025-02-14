import titleCase from './title_case';

const icon =
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif';

export default (title: string, ...acronyms: string[]) => {
    title = title.replace(/^\d+-/, '');
    title = title.replace(/---|-/g, (match) => (match === '---' ? ' - ' : ' '));
    title = titleCase(title, ...acronyms);

    return /*HTML*/ `<div>
<div id="icon" align="center">
<img src="${icon}" width="120"/>
</div>
<div id="title" align="center">
<a href="__URL__">
<img src="https://img.shields.io/badge/__TITLE__-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="__TITLE__" />
</a>
<h1>${title}</h1>
</div>
</div>`;
};
