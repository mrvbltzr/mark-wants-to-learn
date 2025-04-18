
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>The Very Basic of Git: Adding &amp; Committing</h1>
<img src="https://img.shields.io/badge/Finished-2025--01--26-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Repository

A Git "repo" is a workspace which tracks and manages files within a folder.

Anytime we want to use Git with a project, app, etc., we need to create a new git repository. We can have as many repos on our machine as needed, all with separate histories and contents.

❌ Do not initialize a repo inside of a repo.

## Initializing and Checking Repo

### `git init`

- Use this command to create a new git repository. Before we can do anything git-related, we must initialize a repo first.

- This is something we do once per project. Initialize the repo in the top-level folder containing your project.

### `git status`

- This command gives information on the current status of a git repository and its content.

## The `.git` Folder

The `.git` folder is a hidden directory in your project that contains all the necessary files for Git to track changes and manage your project's history.

Think of it as Git's "brain" for that specific project.

**In simpler terms:** It's where Git stores all the information about your project's versions, branches, and commits.

**Never modify files within the `.git` folder directly**, as this can corrupt your repository.

## Adding and Committing Files

### `git add`

- Stages the changes in your working directory for inclusion in the next commit.
- Think of it as preparing files to be "saved" in your project's history

```bash
# Add selected files to staging:
git add file1.txt file2.txt

# Will add all unstaged files:
git add .
```

### `git commit`

- Creates a permanent snapshot of the currently staged changes.
- This "snapshot" is recorded in your project's history.
- You usually include a message with each commit describing the changes made. using the `-m` flag.

```bash
git commit -m "Initial commit"
```

## The `git log` Command

`git log` shows you the history of your project's changes. Think of it as a timeline of commits, each representing a snapshot of your code at a particular point in time. It displays information like the author, date, and a short message describing the changes made in each commit.

**In simpler terms:** It's like looking at a journal of all the modifications you and your team have made to your code, allowing you to track progress, understand the evolution of your project, and easily revert to previous versions if needed.
