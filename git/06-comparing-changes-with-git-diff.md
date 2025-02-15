
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>Comparing Changes with Git Diff</h1>
</div>
</div>

<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--01-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Overview](#overview)
- [Reading Diffs](#reading-diffs)
- [Different Use of `git diff`](#different-use-of-git-diff)

## Overview

We can use the `git diff` command to view changes between commits, branches, files, our working directory and more!

We often use `git diff` alongside commands like `git status` and `git log`, to get a better picture of a repository and how it has changed over time.

`git diff` is like a magnifying glass for your code. It shows you the exact changes you've made to your files. You can use it to see what's different between your current code and the last version you saved, or even compare different versions of your project. It highlights additions, deletions, and modifications, so you can easily track your progress and spot any potential issues.

## Reading Diffs

```diff
diff --git a/hello.txt b/hello.txt
index a1b2c3d..e4f5g6h 100644
--- a/hello.txt
+++ b/hello.txt
@@ -1,3 +1,4 @@
 Hello, world!
 This is a test.
-Goodbye!
+Goodbye, world!
+Have a nice day!
```

1. **`diff --git a/hello.txt b/hello.txt`**: This line tells you which files are being compared. `a/` represents the "before" version, and `b/` represents the "after" version. `file1` is the name of the file.

2. **`index a1b2c3d..e4f5g6h 100644`**: This line shows the object names (hashes) of the two versions being compared and the file mode. Don't worry too much about this for basic diff reading; it's more for Git's internal tracking.

3. **`--- a/hello.txt`**: This line indicates the start of the "before" version of the file.

4. **`+++ b/hello.txt`**: This line indicates the start of the "after" version of the file.

5. **`@@ -1,3 +1,4 @@`**: This is the _hunk header_. It tells you which lines have changed. `-1,3` means "3 lines starting from line 1 in the 'before' version." `+1,4` means "4 lines starting from line 1 in the 'after' version." This shows that a line was added.

6. **Lines starting with `-`**: These lines were _removed_ in the "after" version.

7. **Lines starting with `+`**: These lines were _added_ in the "after" version.

8. **Lines without `-` or `+`**: These lines are _unchanged_ and are shown for context.

In the example:

- "Goodbye!" was removed.
- "Goodbye, world!" and "Have a nice day!" were added.

### Different Use of `git diff`

| <center>Command</center>    | <center>Description</center>                  |
| --------------------------- | --------------------------------------------- |
| `git diff HEAD`             | Changes in working tree since last commit.    |
| `git diff --staged`         | Changes between staging area and last commit. |
| `git diff HEAD <file>`      | Changes in `<file>` since last commit.        |
| `git diff --staged <file>`  | Changes in `<file>` in staging area.          |
| `git diff branch1..branch2` | Differences between branches.                 |
| `git diff commit1..commit2` | Differences between commits.                  |
