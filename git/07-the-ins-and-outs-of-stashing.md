
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>The Ins and Outs of Stashing</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--01-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Overview

**`git stash`** is like a temporary shelf for your changes.

Imagine you're working on a feature, but suddenly need to switch to a different branch to fix a bug. You don't want to commit your unfinished work, but you also don't want to lose it.

`git stash` lets you take your current changes (modified files, staged changes, etc.) and put them away temporarily. You can then switch branches, do your work, and later come back to your stashed changes and reapply them. It's a handy way to keep your working directory clean and organized without committing incomplete work.

## Usage

### `git stash save` (or just `git stash`)

- It takes your uncommitted changes (both modifications in your working directory and changes you've added to the staging area) and saves them as a new stash. Think of it like putting your work-in-progress aside on a shelf with a label.

- You can add a message to your stash to describe what it contains like `git stash save "My unfinished feature"`.

- You stash multiple times by simply running `git stash save "your message"` (or just `git stash`) repeatedly. Each time you do this, a new stash is added to the stack, and the stash list grows.

### `git stash pop`

- Takes the most recently stashed changes (the one at the top of the "shelf") and applies them back to your working directory.

- It's like taking your work back off the shelf to continue working on it. After a successful `pop`, the stash is removed.

### `git stash apply`

- It similar to `git stash pop`, but with a key difference: it applies the stashed changes back to your working directory _without_ removing the stash from the stash list. This means that after using `git stash apply`, the stashed changes are still saved, allowing you to apply them again later if needed.

- This is useful when you want to temporarily put aside some changes but might need to refer back to them or apply them to another branch.

### `git stash list`

- It displays all your currently stashed changes.

- It shows a list of each stash, along with a brief description (usually the message you provided when you created the stash with `git stash save`), and an identifier (like `stash@{0}`, `stash@{1}`, etc.) that you can use to refer to a specific stash when applying it.

- It's like looking at the labels on your temporary shelf to see what you've stashed.

### `git stash drop`

- It removes a specific stash from your stash list.

- It's like taking an item off your temporary shelf and throwing it away.

- You specify which stash to drop by using its identifier, like `git stash drop stash@{0}` (which would remove the most recent stash). If you don't specify a stash, it defaults to dropping the most recent one (`stash@{0}`). Use this command when you're sure you no longer need a particular set of stashed changes.

### `git stash clear`

- Removes _all_ stashed entries from your stash list.

- It's like clearing your entire temporary shelf at once.

- Use this command when you're absolutely sure you no longer need any of the stashed changes. It's a quick way to clean up your stashed work when you're starting fresh or have decided not to pursue those changes.
