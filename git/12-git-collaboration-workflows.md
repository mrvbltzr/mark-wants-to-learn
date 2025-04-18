
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>Git Collaboration Workflows</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--05-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Pitfalls of a Centralized Workflow

**Centralized Workflow**

- a.k.a. Everyone Works On Master/Main
- a.k.a. The Most Basic Workflow Possible
- The simplest collaborative workflow is to have everyone work on the main branch.
- It's straightforward and can work for tiny teams, but it has quite a few shortcomings.

## Feature Branches

_Don't work on main branch!_

Rather than working directly on master/main, all new development should be done on separate branches.

- Treat master/main branch as the official project history.

- Multiple teammates can collaborate on a single feature and share code back and forth without polluting the master/main branch.

- The main branch won't contain broken code (or at least, it won't unless someone messes up).

## Pull Request

A **pull request (PR)** is a way to propose changes to a repository and have those changes reviewed before they are merged into the main branch (usually `main` or `master`). Think of it as a formal request to incorporate your work into the project. It's a core part of the collaborative workflow on GitHub.

**Pull requests are not native to Git itself.**

Docs: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests

## Forking

A GitHub **fork** is essentially a copy of a repository that you create under your own GitHub account. It's a crucial step in contributing to open-source projects or working on a project where you don't have direct write access. Think of it like making a copy of a document to work on without affecting the original.

**Forking is not native to Git itself.**
