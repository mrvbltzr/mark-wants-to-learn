<%*
const finishedAt = await tp.system.prompt(`If this section is finish, set a date (YYYY-MM-DD), else set to empty.`, tp.date.now(), true);

const metadata = await tp.user.metadata();

const courseTitle = tp.user.html_encode(metadata.COURSE_TITLE);

const courseTitleSnake = courseTitle.replace(/\s/g, '_').replace(/_-_/g, '_--_');

const noteTitle = await tp.user.title_case(tp.file.title.replace(/^\d+-/, ''));
-%>
<%* if (noteTitle) { %>
<div id="title" align="center">
<a href="<% metadata.COURSE_URL -%>">
<img src="https://img.shields.io/badge/<% courseTitleSnake -%>-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="<% courseTitle -%>" />
</a>
<h1><% tp.user.html_encode(noteTitle) -%></h1>
<%* if (finishedAt) { -%>
<img src="https://img.shields.io/badge/Finished-<% finishedAt.replace(/-/g, '--') -%>-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<%* } else { -%>
<img src="https://img.shields.io/badge/Status-In_Progress-white?labelColor=383D3B&color=6290C8" alt="Status" />
<%* } -%>
<br /><br />
</div>
<%* } -%>
<% tp.file.cursor(0) -%>