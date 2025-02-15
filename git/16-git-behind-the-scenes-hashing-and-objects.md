
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>Git Behind the Scenes: Hashing and Objects</h1>
</div>
</div>

<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--06-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Config](#config)
- [Refs](#refs)
- [HEAD](#head)
- [Objects](#objects)
- [SHA-1](#sha-1)
- [Git Database](#git-database)
- [Hashing](#hashing)
- [Retrieving Data](#retrieving-data)
- [Git Objects](#git-objects)
	- [blob](#blob)
	- [tree](#tree)
	- [commits](#commits)

## Config

Think of `.git/config` files as settings that tell Git how to behave. There are actually _three_ levels of config, and they're read in this order, with later ones overriding earlier ones:

1. **System config:** This applies to _all_ users on the machine. It's rarely used for project-specific settings.

2. **Global config (`~/.gitconfig`):** This applies to _you_ as a user, across all your Git projects. This is where you usually set your name and email.

3. **Local config (`.git/config`):** This applies _only_ to the specific Git repository (project) you're currently in. This is where project-specific settings live.

The `.git/config` file is a plain text file (usually INI format) that stores key-value pairs.

**In short:** The `.git/config` file inside the `.git` directory stores the local configuration settings for your Git repository. It's where project-specific settings, like remote URLs and branch tracking information, are kept. It's one of the most important files within the `.git` directory.

**Docs:** https://git-scm.com/docs/git-config

## Refs

The `.git/refs` directory inside your `.git` folder is crucial for how Git manages branches and tags. Think of it as Git's address book. It stores pointers to specific commits, allowing Git to easily find them.

## HEAD

The `.git/HEAD` file is a symbolic reference that points to the currently checked-out branch or commit. It tells Git which branch (or specific commit) you're currently working on. It's like a pointer that shows your current location in the project's history.

## Objects

The `.git/objects` directory is a core part of Git's internal storage. It's where Git stores all the _data_ of your repository—the actual content of your files, as well as information about the relationships between different versions of your project. Think of it as Git's warehouse.

The files are all compressed and encrypted, so they won't look like much!

## SHA-1

Git uses the SHA-1 hashing algorithm to generate unique identifiers for all objects stored in the repository, including files, directories (trees), and commits.

SHA-1 is fundamental to how Git works. It provides a way to uniquely identify and track every piece of data in a repository, ensuring data integrity and enabling efficient version control.

## Git Database

Git is a **key-value data store**. We can insert any kind of content into a Git repository, and Git will hand us back a unique key we can later use to retrieve that content.

These keys that we get back are SHA-1 checksums.

## Hashing

```bash
git hash-object <filename>
```

_hash-object_ is a low-level Git command that allows you to calculate the SHA-1 hash of a file's content _without_ actually adding it to the Git repository. It's primarily used for testing and understanding Git's internals, and you'll rarely use it in your everyday Git workflow.

**Common Options:**

- `-w`: This option is the most common one used with `git hash-object`. It not only calculates the hash but also _writes_ the object (the file's content) to the Git object database (`.git/objects`). This is how you can prepare objects for later use without immediately creating a commit.

## Retrieving Data

```bash
git cat-file <options> <object>
```

_cat-file_ is a powerful, low-level Git command that allows you to inspect the _contents_ of Git objects (blobs, trees, and commits) directly from the object database (`.git/objects`). It's like peeking behind the scenes of Git's storage. While not something you'd use every day, it's invaluable for understanding Git's internals and debugging.

**Common options:**

| <center>Option</center> | <center>Description</center> |
|---|---|
| `-t` | Displays the type of the object (blob, tree, or commit). |
| `-s` | Displays the size of the object. |
| `-p` | Pretty-prints the content of the object. |

## Git Objects

There are 4 types of objects:

### blob

- A **"blob" (Binary Large Object)** is one of the fundamental object types. It represents the *content* of a file. Think of it as a container holding the raw data of your file, like a snapshot of the file's bytes at a specific moment.

### tree

- Git trees are fundamental objects that represent directories and their contents within a Git repository. They act as snapshots of your project's directory structure at a given point in time. Think of them as the "index" or "table of contents" for a specific version of your files and folders.

### commits

- Commits are the heart of Git's version control. They represent snapshots of your entire project at specific points in time. Think of them as "save points" in your project's history.