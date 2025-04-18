
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>Merging Branches</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--01-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Merging Branches

Branching makes it super easy to work within self-contained contexts, but often we want to incorporate changes from one branch into another.

We can do this using the `git merge` command.

To merge, follow these basic steps:

1. Switch to or checkout the branch you want to merge the changes into (the receiving branch, usually the `master`).

2. Use the `git merge` command to merge changes from a specific branch into the current branch.

## Fast-forward Merge

A **fast-forward merge** happens when you merge one branch into another, and the target branch hasn't changed since the source branch was created. Instead of creating a new merge commit, Git simply moves the target branch's pointer forward to the latest commit of the source branch. This results in a linear, cleaner history.

For example, if you're the only one working on the repository, and you create a new branch and work on it, the `main` (or `master`) branch typically remains untouched until you decide to merge your working branch into `main` (or `master`). This is a typical scenario where a fast-forward merge can occur.

Merging integrates changes, but branches remain separate. New commits on one branch don't automatically appear in the other unless you merge again.

## Generating Merge Commits

A merge commit is a special commit in Git that records the merging of two or more branches. Unlike a regular commit that represents changes to files, a merge commit represents the _act_ of combining changes from different branches. It has two (or more) parent commits, one from each branch being merged. This visually shows the history of the merge in the Git repository's graph. Merge commits are created when a fast-forward merge is _not_ possible (because the target branch has diverged from the source branch).

## Resolving Merge Conflicts

Merge conflicts happen when you try to merge two branches that have both changed the _same_ lines of code in _different_ ways. Git can't automatically decide which changes to keep, so it marks the conflicting areas in the affected files and leaves it up to you to fix them. It's like two people trying to draw on the same part of a picture at the same time – you have to decide whose drawing stays and whose goes.

Depending on the specific changes you're trying to merge, Git may not be able to automatically merge. This results in merge conflicts, which you need to manually resolve.
