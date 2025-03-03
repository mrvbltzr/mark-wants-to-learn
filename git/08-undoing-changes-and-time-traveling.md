
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>Undoing Changes and Time Traveling</h1>
</div>
</div>

<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--02-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>
## What's in my notes?

- [Checking Out Old Commits](#checking-out-old-commits)
- [Referencing Commits Relative to HEAD](#referencing-commits-relative-to-head)
- [Discarding Changes](#discarding-changes)
- [Restoring](#restoring)
- [Unstaging Changes](#unstaging-changes)
- [Undoing Commits](#undoing-commits)
- [Reverting Commits](#reverting-commits)

## Checking Out Old Commits

To view a previous commit, we can use:

```bash
git checkout <commit-hash>
```

You can find commit hashes using `git log`. We can use the first 7 digits of a commit hash.

This command puts your working directory into a "detached HEAD" state, meaning you're not on any branch. You can browse the files as they existed at that commit. However, any changes you make and commit in this state won't be directly associated with a branch, making them harder to integrate back into your main development. Detached HEAD state is useful for examining past code or running tests at a specific point in history.

To create a new branch from an old commit (the recommended way to work with historical commits), first check out the commit hash as shown above, and then run:

```bash
git switch -c <new-branch-name>
```

## Referencing Commits Relative to HEAD

**`git checkout`** supports a slightly odd syntax for referencing previous commits relative to a particular commit.

- **HEAD~1** refers to the commit before HEAD (parent)
- **HEAD~2** refers to 2 commits before HEAD (grandparent)

## Discarding Changes

**`git checkout HEAD`** or **`git checkout -- <file_names>`**

If you have made changes in your working directory that are _not staged_ (i.e., you've modified files but haven't used `git add`), this command will _discard those unstaged changes_. It essentially resets your working directory to match the state of the `HEAD` commit (the latest commit on your branch). This is a way to quickly undo any modifications you've made since the last commit.

## Restoring

**`git restore`** reverts changes to files in your working directory or staging area.

It can restore a file to its state in a previous commit, from the staging area, or even just from a specific path. Unlike `git checkout --`, it's designed specifically for restoring files and offers more granular control, including options to restore only from the staging area or to a specific path.

## Unstaging Changes

To unstage changes using `git restore`, use the `--staged` option:

```bash
git restore --staged <file>
```

If we want to unstage _all_ changes, we can use:

```bash
git restore --staged .
# or
git restore --staged *
```

## Undoing Commits

**`git reset`** is a powerful command that can be used to undo commits, but it's important to understand how it works to avoid accidentally losing work. It essentially moves the branch pointer to a different commit, and optionally modifies the staging area and working directory to match.

**Different modes:**

**`git reset <commit>`**

- Moves the branch pointer to `<commit>`.

- Updates the staging area to match `<commit>`.

- **Does not** change the working directory.

- You don't lose the work, **you lose the commits**.

- This is the **default mode** if you don't specify an option. It's like saying, "I want to pretend the last few commits never happened, and I want to remove those changes from the staging area, but I want to keep the changes in my working directory."

**`git reset --hard <commit>`**

- Moves the branch pointer to `<commit>`.

- Updates the staging area and working directory to match `<commit>`.

- **You lose the changes and commits here.**

- This is the most drastic option. It's like saying, "I want to completely undo the last few commits and make my working directory and staging area look like they never happened." **Use this with caution, as it will permanently delete any changes in your working directory that were made in the commits you're resetting.**

## Reverting Commits

`git revert` is used to undo changes made by specific commits, but _without_ rewriting the commit history. Instead of deleting a commit, it creates a _new_ commit that _reverses_ the changes introduced by the targeted commit. This preserves the original commit in the history, showing that the change was made and then undone.

**Key Differences from `git reset`:**

- `git revert` creates a _new_ commit that undoes the changes. `git reset` _moves_ the branch pointer, potentially discarding commits from history (especially in `--hard` mode).

- `git revert` preserves the original commit history. `git reset` rewrites history.

- `git revert` is safe to use on public branches (those that have been pushed to a remote repository), as it doesn't rewrite history. `git reset` should be avoided on public branches.
