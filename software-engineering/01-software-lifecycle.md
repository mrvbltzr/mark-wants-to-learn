
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/software-engineering-101/">
<img src="https://img.shields.io/badge/Software Engineering 101: Plan and Execute Better Software-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="Software Engineering 101: Plan and Execute Better Software" />
</a>
<h1>Software Lifecycle</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--01--22-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Why Learn Software Engineering/Dev?](#why-learn-software-engineeringdev)
- [Typical Software Development Lifecycle](#typical-software-development-lifecycle)
	- [Requirements](#requirements)
	- [Design](#design)
	- [Implementation](#implementation)
	- [Verification](#verification)
	- [Maintenance](#maintenance)

## Why Learn Software Engineering/Dev?

- **Technical Debt** - a poor, hard-to-understand, hacky implementation which will have to be repaid with interest later on.

- 1 hour saved now, could cost 20+ hours later.

- Projects could become large so having bad code structure could cost a large amount of hours debugging and money in the future.

- 20% of projects fail. Many of these are due to poor development practices.

```javascript
// ✔️ Good code
a.comp == null && b.comp == null;

// ❌ Bad code
(a.comp == null && !(b.comp != null)) ||
(b.comp == null && !(a.comp != null)) ||
(a.comp == null && b.comp != null);
```

## Typical Software Development Lifecycle

### Requirements

- What are we building?
- This is where we gather the client's demands for their software.

### Design

- How are we going to build it?
- This is where tech stack planning goes.
- Also, the interface design happens here.

### Implementation

- Build the thing.
- Can now start coding if everyone is on the same page.

### Verification

- Testing the product's functionality and security.
- Answers if the product meets the "requirements."
- Is it working properly as what it is supposed to do?
- Is it giving the required output?

### Maintenance

- Fixing bugs, more testing.
- Keep it running.
- Can be difficult if you do not go through the lifecycle.
