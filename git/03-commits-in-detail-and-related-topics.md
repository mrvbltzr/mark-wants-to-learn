
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>Commits in Detail and Related Topics</h1>
<img src="https://img.shields.io/badge/Finished-2025--01--26-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Atomic Commits

When possible, a commit should encompass a single feature, change or fix. In other words, try to **keep each commit focused on a single thing.**

This makes it much easier to undo or rollback changes later on. It also makes your code or project easier to review.

- **Think of them as single, focused changes.** Each commit should address one specific task or feature, making it easier to understand, debug, and revert if needed.

- **It's like writing a short, concise paragraph in a paper** instead of a long, rambling essay.

By breaking down your work into small, atomic commits, you create a cleaner and more maintainable project history.

## Past or Preset Tense?

Use **Preset-Tense Imperative Style** when composing commit messages.

**From Git Docs:**

> Describe your changes in imperative mood, e.g. "make xyzzy do frotz" instead of "\[This patch\] makes xyzzy do frotz" or "I changed xyzzy to do frotz", as if you are giving orders to the codebase to change its behavior.

```bash
git commit -m "add new feature"
```

**But, you DO NOT have to follow this pattern.**

Though the Git docs suggest using present-tense imperative messages, many developers prefer to use past-tense messages. All that matters is consistency, especially when working on a team with many people making commits.

## More Log Options

There are useful flags for `git log`. Check the [documentation](https://git-scm.com/docs/git-log) for more info.

- `--oneline`: This is a shorthand for `--pretty=oneline --abbrev-commit` used together.

## Amending Commits

Suppose you just made a commit and then realized you forgot to include a file or maybe you made a typo in the commit message that you want to correct.

Rather than making a brand new separate commit, you can "redo" the previous commit using the `--amend` option.

```bash
git commit -m "Initial commit"
git add modified_file.txt
git commit --amend
```

## Ignoring Files

We can tell Git which files and directories to ignore in a given repository, using a **`.gitignore`** file.

This is useful for files you know you **NEVER** want to commit, including:

- Secrets, API keys, credentials, etc.
- Operating System files
- Log files
- Dependencies & packages

Create a file called `.gitignore` in the root of a repository. Inside the file, we can write patterns to
tell Git which files & folders to ignore:

- `.env` will ignore files named.env
- `folderName/` will ignore an entire directory
- `*.log` will ignore any files with the `.log` extension

## Links

- [https://git-scm.com/docs](https://git-scm.com/docs)
