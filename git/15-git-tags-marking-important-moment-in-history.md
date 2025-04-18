
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>Git Tags Marking Important Moment in History</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--05-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Git Tags

Tags are pointers that refer to particular points in Git history. We can mark a particular moment in time with a tag. Tags are most often used to mark version releases in projects _(v4.1.0, v4.1.1, etc.)_
Think of tags as branch references that _DO NOT CHANGE_.

Once a tag is created, it always refers to the same commit. It's just a label for a commit.

## Semantic Versioning

The semantic versioning spec outlines a standardized versioning system for software releases. It provides a consistent way for developers to give meaning to their software releases.

Versions consist of three numbers separated by periods: `MAJOR.MINOR.PATCH`.

See: https://semver.org/

## Viewing Tags

**`git tag`** will print a list of all the tags in the current repository.

We can search for tags that match a particular pattern by using `git tag -I` and then passing in a wildcard pattern. For example, `git tag -l "*beta*"` will print a list of tags that include "beta" in their name.

## Types of Tags

Git has two main types of tags:  

### Lightweight tags

- These are like sticky notes. They simply point to a specific commit. They're quick to create, but don't offer much extra information.

```bash
git tag <tagname>
````

### Annotated tags

- These are like index cards. They contain extra information like the tagger's name, email, date, and a message.

```bash
git tag -a <tagname>

# or one line just like git commit
git tag -a v1.1.0 -m "New Feature"
```

## Tagging Previous Commits

We can also tag an older commit by providing the commit hash:

```bash
git tag <tagname> <commit-hash>
# or
git tag -a <tagname> <commit-hash>
```

## Replacing Tags

Git will yell at us if we try to reuse a tag that is already referring to a commit. If we use the `-f` option, we can **FORCE** our tag through.

```bash
git tag -f <tagname> <commit-hash>
```

## Deleting Tags

```bash
git tag -d <tagname>
```
