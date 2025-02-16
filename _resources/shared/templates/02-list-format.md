<%- (await tp.system.prompt('List')).replace(/- \*\*`/g, "\n\n- **`").trim() -%>


<% tp.file.cursor() %>
