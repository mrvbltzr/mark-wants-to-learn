
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>Working with Branches</h1>
</div>
</div>

<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--01--27-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Branches](#branches)
- [The "master" Branch](#the-master-branch)
- [What is "HEAD"?](#what-is-head)
- [Navigating Branches](#navigating-branches)
	- [`git branch`](#git-branch)
	- [`git branch <branch-name>`](#git-branch-branch-name)
	- [`git switch <branch-name>`](#git-switch-branch-name)
	- [`git switch -`](#git-switch--)
- [`git checkout` vs `git switch`](#git-checkout-vs-git-switch)
- [Switch Branches With Unstaged Changes](#switch-branches-with-unstaged-changes)
- [Deleting and Renaming Branches](#deleting-and-renaming-branches)
	- [`git branch -d <branch_name>`](#git-branch--d-branch_name)
	- [`git branch -m <new_branch_name>`](#git-branch--m-new_branch_name)

## Branches

**Branches** are an essential part of Git. Think of branches as alternative timelines for a project.

They enable us to create separate contexts where we can try new things, or even work on multiple ideas in parallel.

If we make changes on one branch, they do not impact the other branches (unless we merge the changes).

## The "master" Branch

In Git, we are always working on a branch. The default branch name is **master**\*. It doesn't do anything special or have fancy powers. It's just like any other branch.

Many people designate the master branch as their "source of truth" or the "official branch" for their codebase, but that is left to us to decide.

From Git's perspective, the master branch is just like any other branch. It does not have to hold the "master copy" of our project.

*\* In 2020, GitHub renamed the default branch from master to main.*

## What is "HEAD"?

`commit 8a6f1f63b2f74b2b1f27feca703c3a0e98469eae (HEAD -> master)`

We'll often come across the term HEAD in Git.

**HEAD** is simply a pointer that refers to the current "location" in your repository. It points to a particular branch reference.

## Navigating Branches

### `git branch`

- Use this command to view your existing branches.

- The default branch in every git repo is **master**, though you can configure this.

### `git branch <branch-name>`

- Use this command to make a new branch based upon the current HEAD.

- This just creates the branch. It does not switch you to that branch (the HEAD stays the same).

- **Remember that creating a new branch will clone the current active HEAD branch.** This means the new branch will start at the same point as the current branch, allowing you to work on changes independently without affecting the original branch.

### `git switch <branch-name>`

- Use this to switch to a different branch.

- Running `git switch -c <branch-name>` will create a branch and switch to it at the same time.

### `git switch -`

- A shortcut to switch back to the previously checked-out branch.

- It's a quick way to toggle between two branches you're actively working on.

- For example, if you're on `main` and then switch to `feature/new-stuff`, running the command while on `feature/new-stuff` will take you back to `main`.

## `git checkout` vs `git switch`

Historically, early adopters used `git checkout <branch-name>` to switch branches. This still works.

The checkout command does a million additional things, so the decision was made to add a standalone switch command which is much simpler.

## Switch Branches With Unstaged Changes

If you have unstaged files and switch branches, Git will **prevent** the switch.

> error: The following untracked working tree files would be overwritten by checkout:

## Deleting and Renaming Branches

### `git branch -d <branch_name>`

- Use this command to delete a branch.

- You must first exit the targeted branch by switch to either master or the other branch, then run the command.

### `git branch -m <new_branch_name>`

- To rename a branch, you must switch to the branch you intended to rename, then run the command.
