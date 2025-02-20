<%*
const $selection = await tp.system.suggester((h) => h, ['h2', 'h3', 'h4']);
const $title = tp.user.title_case(await tp.system.prompt('Heading Title'));
%>
<%* if ($selection == 'h2') { -%>
## <%- $title -%>
<%* } else if ($selection == 'h3') { -%>
### <%- $title -%>
<%* } else if ($selection == 'h4') { -%>
#### <%- $title -%>
<%* } %>

<% await tp.file.cursor() -%>