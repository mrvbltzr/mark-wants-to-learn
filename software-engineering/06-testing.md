
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/software-engineering-101/">
<img src="https://img.shields.io/badge/Software Engineering 101: Plan and Execute Better Software-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="Software Engineering 101: Plan and Execute Better Software" />
</a>
<h1>Testing</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--01--25-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Overview](#overview)
	- [Keywords](#keywords)
- [Testing Bugs](#testing-bugs)
	- [Level of Bugs](#level-of-bugs)
- [Verification vs. Validation](#verification-vs-validation)
	- [Verification](#verification)
	- [Validation](#validation)
- [Types of Tests](#types-of-tests)
	- [Unit Testing](#unit-testing)
	- [Integration Testing](#integration-testing)
	- [Back-to-Back Testing](#back-to-back-testing)
	- [Incremental Testing](#incremental-testing)
- [Who Should Test?](#who-should-test)
	- [Developer](#developer)
	- [Tester](#tester)
	- [User](#user)
- [Manual vs. Automatic](#manual-vs-automatic)
	- [Manual Testing](#manual-testing)
	- [Automated Testing](#automated-testing)
- [Blackbox vs. Whitebox](#blackbox-vs-whitebox)
	- [Blackbox Testing](#blackbox-testing)
	- [Whitebox Testing](#whitebox-testing)
- [Problem with Testing](#problem-with-testing)

## Overview

- Testing is the process of finding errors.

- We can test code, implementations, documentation and even other testing.

![Testing](https://www.cs.uic.edu/~jbell/CourseNotes/OO_SoftwareEngineering/images/Chapter11/SommervilleV_Model.jpg)

### Keywords

- **Test data** - inputs that are designed to test the system.

- **Test cases** - ways in which we operate the system with the given data.

- **Oracle** - the set of "good" outcomes.

## Testing Bugs

- Bugs can be both an error and a deviation from expected behavior.
### Level of Bugs

- **Failure** - the event by which the code deviates from expected behavior..

- **Error** - the part of code that leads to the failure.

- **Fault** - what the outcome actually was.

Testing can be used to show presence of bugs, but never to insure the absence of them.

![Testing Bug Lifecycle](https://www.softwaretestinghelp.com/wp-content/qa/uploads/2018/01/Bug-Lifecycle.jpg)

## Verification vs. Validation

### Verification

- Are we building the ***thing right***?
- Does the software work compared to the given specifications?

### Validation

- Are we building the ***right thing***?
- Does the software work compared to what the user needs?

[More Information](https://www.plutora.com/blog/verification-vs-validation)

## Types of Tests

### Unit Testing

- Focus on the smallest unit of a software.

- The smallest testable component of your code, usually a single function or method.

- **Goal:** To ensure that each individual part of your program works as expected in isolation.

- [**Unit Testing**](http://softwaretestingfundamentals.com/unit-testing/)

### Integration Testing

- Focus on the communication and architecture of the program.

- How different parts of your program interact with each other.

- **Goal:** To verify that the communication and data flow between different modules or components are functioning correctly.

- [**Integration Testing**](http://softwaretestingfundamentals.com/integration-testing/)

### Back-to-Back Testing

- Comparing a new version of software to an older, known-good version.

- **Goal:** To identify any regressions (unexpected changes in behavior) introduced by the new version.

- [**Back-to-Back Testing**](http://www.professionalqa.com/back-to-back-testing)

### Incremental Testing

- Where you create a module, do some tests, create another module, and do some more tests.

- Testing as you develop, rather than at the end.

- **Goal:** To catch and fix bugs early in the development process, making debugging and maintenance easier.

- **Types of Incremental Testing:**

	- **Top-Down:** Start testing from the highest-level components (e.g., the main program). Use "stubs" (simplified versions of lower-level components) to simulate their behavior during testing.

	- **Bottom-Up:** Start testing from the lowest-level components (e.g., individual functions). Use "drivers" (small programs) to provide input to and receive output from these components.

- [**Incremental Testing**](https://www.tutorialspoint.com/software_testing_dictionary/incremental_testing.htm)

**In essence:**

- [**Unit tests**](http://softwaretestingfundamentals.com/unit-testing/) are like checking that each individual gear in a complex machine is turning smoothly.

- [**Integration tests**](http://softwaretestingfundamentals.com/integration-testing/) are like checking that all the gears in the machine mesh together correctly.

- [**Incremental tests**](https://www.tutorialspoint.com/software_testing_dictionary/incremental_testing.htm) are like continuously testing the machine as you build it, piece by piece.

- [**Back-to-back tests**](http://www.professionalqa.com/back-to-back-testing) are like comparing the performance of a new machine model to an older, reliable one.

## Who Should Test?

### Developer

- Understand the system
- Knows the code which cause problems
- Know how to do technical tests
- May treat the testing lightly

### Tester

- Must learn the system
- Tries to test everything
- Will try to break the program at all costs

### User

- Must learn the system
- Knows how they will use the system
- Won't try to break or go light; will try to use

## Manual vs. Automatic

### Manual Testing

- **Human-driven:** Performed by testers interacting directly with the software.

- **Flexible:** Adaptable to unexpected issues and user scenarios.

- **Slower:** Time-consuming for repetitive tasks.

- **Prone to human error:** Consistency may vary between testers.

### Automated Testing

- **Computer-driven:** Executed by scripts and tools.

- **Fast and efficient:** Ideal for repetitive tasks and large test suites.

- **Consistent:** Ensures reliable results with every run.

- **Requires initial setup:** Investment in tools and script creation.

Manual testing relies on human judgment and flexibility, while automated testing prioritizes speed, efficiency, and consistency for repetitive tasks. Often, a combination of both approaches is most effective.

## Blackbox vs. Whitebox

### Blackbox Testing

- **Boundary Value Analysis:** Inputs at the extreme high and low ends of the allowed range are tested. It's assumed that values within this range will also pass.

- **Cause-Effect Graphing:** Tests are designed to verify that specific causes produce the expected effects.

- **Pair-wise Testing:** Combinations of multiple parameters are tested together to ensure all possible conditions are covered.

- **State-based Testing:** Input values are used to check for expected state transitions within the system.

- [Blackbox Testing](http://softwaretestingfundamentals.com/black-box-testing/)

### Whitebox Testing

- **Control Flow Testing** - Setup test case which covers all branch conditions and different statements.

- **Data Flow Testing** - Covering all variables. Designing test cases to cover the different variable declarations, and uses.

- [Whitebox Testing](http://softwaretestingfundamentals.com/white-box-testing/)

Depending on who tests can also have a large difference on testing. In the testing world there is this idea of "white box" and black box" testing.

With black box testing, we are testing the device based on inputs and outputs. We have no idea how the program works. All we know is that we should give it a certain input, and a certain output should occur. With this type of testing, we are looking for general functionality. We want to see how the program reacts to different inputs and outputs.

White box testing however, is when we know the inner workings of a system. With this type of testing, we are trying to test the code itself. We typically develop more technical tests that try to make sure the system is coded correctly.

## Problem with Testing

- Exhaustive testing is impossible.

- You will never get a 100% testing coverage.

- As the number of detected defects increases, so does the probability of more bugs.

- You'll never know if a program is bug-free.
