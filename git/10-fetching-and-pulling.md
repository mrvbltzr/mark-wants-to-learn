
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>Fetching and Pulling</h1>
</div>
</div>

<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--04-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Remote Tracking Branches](#remote-tracking-branches)
- [Fetching](#fetching)
- [Pulling](#pulling)

## Remote Tracking Branches

Remote tracking branches are like local copies of branches on a remote repository.

They act as a read-only snapshot of what the branches on the remote looked like the last time you fetched from it. Think of them as your local "informant" about the state of the remote repository.

They follow this pattern `<remote>/<branch>`.

- `origin/master` references the state of the master branch on the remote repo named origin.

- `upstream/redesign` references the state of the redesign branch on the remote named upstream.

Run **`git branch -r`** to view the remote branches our local repository knows about.

## Fetching

```bash
git fetch <remote_name?> <branch_name?>
```

Fetching allows us to download changes from a remote repository, **BUT those changes will not be automatically integrated into our working files.**

It lets you see what others have been working on, without having to merge those changes into your local repo.

Think of it as "please go and get the latest information from GitHub, but don't screw up my working directory."

## Pulling

```bash
git pull <remote_name?> <branch_name?>
```

**`git pull`** is another command we can use to retrieve changes from a remote repository.

Unlike fetch, pull actually updates our HEAD branch with whatever changes are retrieved from the remote.

Think of it as "go and download data from GitHub AND immediately update my local repo with those changes."

Pulls can result in merge conflicts!

If you've set up upstream tracking for your branch (which is usually done automatically when you clone or push a new branch with `-u`), `git pull` by itself will fetch from the remote and merge into your current branch. It assumes the "origin" remote and the current branch. This is the shortest and most common form when you're working on a branch that's already connected to a remote.
