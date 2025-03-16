<%*
const selection = await tp.system.suggester((h) => h, ['h2', 'h3', 'h4'], true);

const title = await tp.system.prompt('Heading Title', '', true);

const heading = '#'.repeat(parseInt(selection.match(/h(\d+)/i)[1]));
-%>
<% heading %> <% await tp.user.title_case(title) || title %>

<% tp.file.cursor(0) -%>