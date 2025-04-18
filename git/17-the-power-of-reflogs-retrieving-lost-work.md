
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>The Power of Reflogs: Retrieving "Lost" Work</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--06-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Overview

The "reflog" (reference log) is a safety net in Git. It's a log of _all_ the changes to your branch pointers (refs) over time. It records when branches were created, deleted, checked out, reset, or otherwise modified.

Think of it as a time-travel diary for your branches.

```bash
git reflog
```

Git only keeps reflogs on your local activity. They are not shared with collaborators.

Reflogs also expire. Git cleans out old entries after around 90 days, though this can be configured.

To show a specific branch:

```bash
git reflog show <branch>
```

## What It Shows

The `git reflog` command displays a list of reflog entries. Each entry shows:

- **A short commit hash:** This is the commit hash that the branch pointed to at that point in time.

 - **The ref (branch name):** The branch that was affected.

- **The action:** What happened to the ref (e.g., `checkout`, `reset`, `merge`, `branch: created`, `branch: deleted`).

- **A timestamp:** When the action occurred.

- **A message (sometimes):** Some actions include a message, like the commit message if you made a commit.

## Reflog References

**`name@{qualifier}`**

We can access specific git refs is name (qualifier). We can use this syntax to access specific ref pointers and can pass them to other commands including checkout, reset, and merge.

## Timed References

Every entry in the reference logs has a timestamp associated with it. We can filter reflags entries by time/date by using time qualifiers like:

- 1.day.ago
- 3.minutes.ago
- yesterday
- Fri, 12 Feb 2021 14:06:21 -0800

## Rescuing Lost Commit With Reflog

- **`git reflog`:** Shows a history of changes to your local branches.

- **Find the lost commit's hash:** Look in the reflog for the commit _before_ the loss.

- **Recover:**

	- `git branch <new_branch_name> <commit_hash>` (safest)
	- `git reset --hard <commit_hash>` (use with extreme caution)
