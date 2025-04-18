
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>GitHub: The Basics</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--02-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## GitHub

**[GitHub](https://github.com/)** is a hosting platform for git repositories. You can put your own Git repos on GitHub and access them from anywhere and share them with people around the world.

Beyond hosting repos, GitHub also provides additional collaboration features that are not native to Git (but are super useful). Basically, GitHub helps people share and collaborate on repos.

## Git vs GitHub

 **Git** is the version control software that runs locally on your machine. You don't need to register for an account. You don't need the internet to use it. You can use Git without ever touching GitHub.

**GitHub** is a service that hosts Git repositories in the cloud and makes it easier to collaborate with other people. You do need to sign up for an account to use GitHub. It's an online place to share work that is done using Git.

## Cloning Repositories

**`git clone`** is how you create a local copy of a remote Git repository. Think of it like downloading a project from a website or server, but with the added benefit of Git's version control. When you clone a repository, you get:

- **All the files:** A complete copy of all the project files.

- **The entire repository history:** Not just the current version of the files, but the entire history of changes, including all commits, branches, and tags. This allows you to see how the project has evolved over time.

- **A connection to the remote repository:** The clone maintains a link to the original remote repository, so you can later synchronize your local copy with the remote one.

```bash
git clone <remote_url> [local_directory_name]
```

**Make sure you are not inside a repo when you clone another repo.**

**Anyone can clone a repository from GitHub**, provided the repo is public. You do not need to be an owner or collaborator to clone the repo locally to your machine. You just need the URL from GitHub.

Pushing up your own changes to the GitHub repo needs permission though.

Cloning isn't exclusive to GitHub. It can be from other platforms like [Bitbucket](https://bitbucket.org/product/).

## Connection Using SSH

GitHub SSH connections allow you to interact with your GitHub repositories securely, without needing to enter your username and password every time. Instead of using HTTPS, which requires authentication for each operation, SSH uses cryptographic keys to verify your identity. Think of it like having a special key that GitHub recognizes, so you don't have to keep telling them who you are.

**Read:** https://docs.github.com/en/authentication/connecting-to-github-with-ssh

## Creating Named Shortcut

A `git remote` is a shortcut to a URL of a remote Git repository. It's like a bookmark or nickname that simplifies working with that remote. Instead of typing the full URL every time you want to fetch or push changes, you can use the remote's name. When you clone a repository, Git automatically creates a remote named `origin` that points to the URL you cloned from. You can add more remotes if you need to interact with other repositories related to your project. These remotes make it easier to keep track of and synchronize with different sources of code.

```bash
# Adds a remote named "my-remote"
git remote add my-remote https://github.com/someuser/some-repo.git  

# Fetches changes from "my-remote"
git fetch my-remote                                                 

# Pushes the "main" branch to "my-remote"
git push my-remote main                                            
```

### Common Commands

| <center>Command</center>                  | <center>Description</center>       |
| ----------------------------------------- | ---------------------------------- |
| `git remote`                              | Lists the configured remotes.      |
| `git remote add <name> <url>`             | Adds a new remote.                 |
| `git remote remove <name>`                | Removes a remote.                  |
| `git remote rename <old-name> <new-name>` | Renames a remote.                  |
| `git fetch <remote-name>`                 | Downloads changes from the remote. |
| `git push <remote-name> <branch-name>`    | Uploads changes to the remote.     |

**Documentation:** https://git-scm.com/docs/git-remote

## Pushing To Remote

**`git push <remote-name> <branch-name?>`**

- Use to upload your local commits to a remote repository.

- It's how you share your changes with others and back up your work.

- After adding a remote URL using `git remote add`, you can use the remote's name in place of the `<remote-name>` parameter in other Git commands (like `git push`, `git fetch`, etc.).

**`git push -u <remote-name> <branch-name?>`**

 - Sends your changes to the remote and sets up a link so Git remembers which remote branch your local branch is connected to, making future pushes simpler.

- It is like sending the car _and_ telling your friend, "Hey, every time I update this car, it's this _exact_ car I'm sending you." It's setting up a special connection so your friend knows which car to expect from you in the future. You only need to do this special setup once for each car (branch). After that, you can just send the car (`git push`) without the extra instructions.

**Documentation:** https://git-scm.com/docs/git-push
