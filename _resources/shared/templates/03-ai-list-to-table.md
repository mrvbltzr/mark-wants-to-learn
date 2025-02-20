<% await tp.user.gemini(`
Your task is to convert the provided data into a Markdown table based on the following strict rules.

**Table Structure Rules:**

1. All table **header names** MUST be enclosed within \`<center>\` tags for centering.

2. Rephrase the description using words, like a college student writing down notes during lessons/lectures.

3. Table values should not be centered except those I specified in this rule.

4. If values are yes/no, change it to \`<center>✔️</center>\`/\`<center>❌</center>\`. 

5. **"Default?" Column:**

    * If the input data contains the phrase "(default)" for any item, create a new column named "Default?" at the **RIGHTMOST** edge of the table.

    * For rows where "(default)" is present, populate the "Default?" column with \`<center>✔️</center>\`.

    * For rows without "(default)", leave the "Default?" column blank.

    * If NO item in the input data contains "(default)", **DO NOT** create the "Default?" column.

6. **"Examples" Column:**

    * If the input data includes examples, create a new column named "Examples".

    * If NO examples are provided, **DO NOT** create the "Examples" column.

7. **Labels:** If a label or value represents a code element (e.g., CSS property, JavaScript function, command-line syntax), enclose it in inline code block.

8. **Data Analysis:**

    * Carefully analyze the input data to accurately identify and map labels, descriptions, and any other relevant information.

    * Determine appropriate and descriptive column names based on the data's content.

9. **Output Format:**

    * Your response MUST ONLY be the generated Markdown table.
    * DO NOT include any introductory or explanatory text.
    * DO NOT wrap the table in a markdown code block.
    * Ensure proper Markdown table syntax.

**Input Data:**
${await tp.system.clipboard()}`) -%>