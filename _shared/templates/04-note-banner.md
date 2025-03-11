<%*
const $courseTitle = tp.user.html_encode(await tp.user.metadata('COURSE_TITLE'));
const $courseTitleSnake = $courseTitle.replace(/\s/g, '_').replace(/_-_/g, '_--_');
const $noteTitle = await tp.user.title_case(tp.file.title.replace(/^\d+-/, ''));

if ($noteTitle) {
%>
<div>
    <div id="title" align="center">
        <a href="<% await tp.user.metadata('COURSE_URL') %>">
            <img src="https://img.shields.io/badge/<%- $courseTitleSnake -%>-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="<%- $courseTitle -%>" />
        </a>
        <h1>
            <%- tp.user.html_encode($noteTitle) -%>
        </h1>
    </div>
</div>
<%* } -%>
<% tp.file.cursor(0) -%>