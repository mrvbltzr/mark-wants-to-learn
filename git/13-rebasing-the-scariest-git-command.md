
<div id="title" align="center">
<a href="https://www.udemy.com/course/git-and-github-bootcamp/">
<img src="https://img.shields.io/badge/The_Git_&amp;_GitHub_Bootcamp-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="The Git &amp; GitHub Bootcamp" />
</a>
<h1>Rebasing: The Scariest Git Command</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--05-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Rebasing

**Docs:** https://git-scm.com/docs/git-rebase

`git rebase` is a powerful Git command that lets you rewrite the commit history of a branch. It's primarily used to create a cleaner, more linear project history, often by integrating changes from one branch into another in a more structured way than a simple `git merge`.

Imagine you have a LEGO castle. You built a tower, then a drawbridge. Your friend also built a LEGO castle, and they added a cool gate _after_ they built their tower.

`git merge` is like just smashing your tower and drawbridge onto your friend's castle. You'd have a big mess! Your tower, your drawbridge, and then their tower and gate all mixed up.

`git rebase` is like this: You take your tower and drawbridge _off_ your friend's castle. Then, you take their cool gate and put it on _your_ castle _after_ your tower. _Then_ you put your tower and drawbridge back on _after_ the gate. Now you have your castle with the gate in the right place, nice and neat! It looks like you planned it that way from the start.

So, rebase helps you add your friend's cool stuff to your work, but in a way that makes sense and keeps things organized, like adding the gate _after_ the main castle is built.

> Basically, rebase is just "rewriting" the history.

**WARNING:**
Never rebase commits that have been shared with others. If you have already pushed commits up to GitHub... **DO NOT** rebase them unless you are positive no one on the team is using those commits.
