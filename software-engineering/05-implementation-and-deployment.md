

<div id="title" align="center">
<a href="https://www.udemy.com/course/software-engineering-101/">
<img src="https://img.shields.io/badge/Software_Engineering_101:_Plan_and_Execute_Better_Software-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="Software Engineering 101: Plan and Execute Better Software" />
</a>
<h1>Implementation and Deployment</h1>
<img src="https://img.shields.io/badge/Finished-2025--01--25-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Implementation

**Take care of programmers:**

- Implementation is where most time is spent and where a lot of time can be lost.

- Always program while alert and focused.

    - 35 hours of programming can be just as productive as 70. (with technical debt).

- Programming takes focus. Constant interruptions will reduce the overall focus.

**Coding principals:**

- Use a style guide, so all the code looks relatively the same.

- Code is written for people, not computers.

- Make modules easy to learn and understand.

- Shorter code!= better code - **Make it READABLE.**

- Break up action into methods.

## Buy vs. Build

Good design allows us to see our entire project before it is built. With this, we can decide which areas we want to build, and which areas we want to purchase. The great thing about purchasing code is that it is almost always cheaper.

Imagine a company which develops a subsystem to sell. They spend 3000 man hours building it. At a rate of $40 an hour, they would have spent $12,000 developing the software. If we wanted to build the same thing, we could expect the same outcome in cost.

However, this company wouldn't sell it at $12,000. They have the benefit of being able to sell it over and over and over again. Because of this, they might sell it at say $500. They only need 24 sales to break even, and we save $11,500 through purchasing it.

It's almost always a win-win situation to purchase instead of build. Coding however is usually very specific. This makes it rare to find software that perfectly fits the problem. However, do some research before you begin building, you can save a lot of money.

[More Information](https://clevertap.com/blog/build-vs-buy/)

## Deployment

- Deployment is a mix between testing and implementation.

    - It happens after testing, but a lot of times requires certain implementation to get correct.

- We are not talking beta deployment, but final deployment

- The level of planning in this phase, directly relates to how the deployment effects the overall project.

    - Is it a small update, a large update, a complete overhaul?

- Deployment should be built with the idea of retreat. If something goes wrong, how can we revert?

## Deployment Planning

- Amount of planning is dependent on the size of the change.

- We look at which areas will most likely have the biggest problems.

- Areas to look at:

    - Database Activities

    - 3rd-party Software Integration

    - Runtime Changes

    - Training (both on user and business side)

    - Downtime

    - Backups

    - Network

    - Memory

## Deployment Rollback

- **Rollback**: the act of reverting a system back to a previous working state.

- Look of a point of no return:

    - This is a point where it takes longer to go back, that it does to just continue through.

    - Knowing this will help make a decision during deployment.

- Every step of the deployment process, make a decision whether rollback is a better option.
