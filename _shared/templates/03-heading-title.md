<%*
const $selection = await tp.system.suggester((h) => h, ['h2', 'h3', 'h4']);
const $heading = $selection && '#'.repeat(parseInt($selection.match(/h(\d+)/i)[1]));
const $title = $selection && await tp.system.prompt('Heading Title');
const $titleCased = $title && await tp.user.title_case($title);
if ($titleCased) { -%>
<% $heading %> <% $titleCased -%>

<% tp.file.cursor(0) -%>
<%* } -%>