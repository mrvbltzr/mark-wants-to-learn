<%*
const $courseTitle = tp.user.html_encode(await tp.user.env(tp, 'COURSE_TITLE'));
const $courseTitleSnake = $courseTitle.replace(/\s/g, '_').replace(/_-_/g, '_--_');
const $noteTitle = tp.user.html_encode(tp.user.title_case(
    (await tp.system.prompt('Set Title', tp.file.title))
                    .replace(/^\d+-/, '')
                    .replace(/---|-/g, (match) => (match === '---' ? ' - ' : ' '))
));
-%>

<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="<% await tp.user.env(tp, 'COURSE_URL') %>">
<img src="https://img.shields.io/badge/<%- $courseTitleSnake -%>-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="<%- $courseTitle -%>" />
</a>
<h1><%- $noteTitle -%></h1>
</div>
</div>
