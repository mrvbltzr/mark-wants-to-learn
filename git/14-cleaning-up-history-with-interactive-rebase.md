
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>Cleaning up History with Interactive Rebase</h1>
</div>
</div>

<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--05-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Overview](#overview)

## Overview

Interactive rebasing in Git is a powerful technique that allows you to rewrite your commit history. It gives you fine-grained control over your commits, letting you combine, split, reorder, edit, or even remove them before integrating your changes into a shared branch. Think of it as a way to polish your work before presenting it to the team.

```bash
git rebase -i <base_commit>
```

- `-i` or `--interactive` flag is crucial for interactive mode.

- `<base_commit>` can be a commit hash, a branch name, or a relative reference like `HEAD~3` (meaning the 3rd commit before HEAD). It's the parent commit of the _oldest_ commit you want to rewrite.

| Command       | Description                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| `p`, `pick`   | Use commit                                                                      |
| `r`, `reword` | Use commit, but edit the commit message                                         |
| `e`, `edit`   | Use commit, but stop for editing                                                |
| `s`, `squash` | Use commit, but meld into previous commit                                       |
| `f`, `fixup`  | Like squash, but discard this commit's log message                              |
| `x`, `exec`   | Run command (the rest of the line)                                              |
| `b`, `break`  | Stop here (to allow changing branches, etc.)                                    |
| `d`, `drop`   | Remove commit                                                                   |
| `l`, `label`  | Mark this commit                                                                |
| `t`, `reset`  | Reset HEAD to this commit                                                       |
| `m`, `merge`  | Run a merge command (the rest of the line)                                      |
| `.`           | Edit the commit message of the previous commit (use only with reword and fixup) |
