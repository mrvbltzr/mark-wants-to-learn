
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>Writing Custom Git Aliases</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--06-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Overview

Git aliases are shortcuts for longer Git commands. They let you type a shorter, custom command instead of the full, often more complex, command. This can save you a lot of typing and make your Git workflow more efficient.

## Setting Aliases

**Using command line:**

```bash
git config --global alias.<alias_name> "<actual_command>"
```

**Directly in config file:**

```toml
[alias]
    <alias_name> = <actual_command>
```

## Resources & Links

- https://www.durdn.com/blog/2012/11/22/must-have-git-aliases-advanced-examples/
- https://github.com/GitAlias/gitalias
- https://gist.github.com/mwhite/6887990
