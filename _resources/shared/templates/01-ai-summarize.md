<% await tp.file.cursor(0) -%>
<% await tp.user.gemini(`
Your task is to summarize the provided data based on the following strict rules.

**Summarization Rules:**

1. Rephrase it a little using simple words like a college student writing down notes during lectures/lessons.

2. Format it into bullet points. Add spaces on every points.

3. **Output Format:**

    * Your response MUST ONLY be the requested response.
    * DO NOT include any introductory or explanatory text.

Data to summarize:
${await tp.system.clipboard()}
`) -%>