
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/software-engineering-101/">
<img src="https://img.shields.io/badge/Software Engineering 101: Plan and Execute Better Software-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="Software Engineering 101: Plan and Execute Better Software" />
</a>
<h1>Design Modularity</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--01--25-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Software Design](#software-design)
	- [Stages of Software Design](#stages-of-software-design)
- [Modularity](#modularity)
	- [Goal of Modularity](#goal-of-modularity)
	- [Abstraction](#abstraction)
- [Coupling](#coupling)
	- [Module Coupling Levels](#module-coupling-levels)
		- [Tight (Bad)](#tight-bad)
		- [Medium (Needs Improvement)](#medium-needs-improvement)
		- [Loose (Good)](#loose-good)
- [Cohesion](#cohesion)
	- [Types of Cohesion](#types-of-cohesion)
		- [Weak Cohesion](#weak-cohesion)
		- [Medium Cohesion](#medium-cohesion)
		- [Strong Cohesion](#strong-cohesion)

## Software Design

- Design is the step where we start applying our plan and idea to real world solutions.

- **Design is not coding. Coding is not design.**

- Design is two things:

	- **Activity** : working to design the software.
	- **Product** : a document, or set of documents detailing the design of the software.

### Stages of Software Design

| <center>Step</center>   | <center>Description</center>                                                      | <center>Example (Castle Analogy)</center>                                   |
| ----------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Divide and Conquer**  | Break the big problem into smaller, easier-to-manage pieces.                      | Break down the castle into smaller parts (towers, walls, gates).            |
| **Deep Dive**           | Understand each small problem thoroughly.                                         | Figure out how each part needs to look and function.                        |
| **Brainstorm**          | Find possible ways to solve each small problem.                                   | Brainstorm different ways to build each part.                               |
| **Simplify**            | Describe the core ideas of each solution in a simple way.                         | Focus on the essential shapes and connections.                              |
| **Keep Simplifying**    | Repeat steps 3 and 4 until you have the most basic building blocks.               | Continue breaking down each part until you have basic Lego bricks.          |
| **Build the Parts**     | Design the individual components of the software.                                 | Assemble the individual Lego bricks into the different parts of the castle. |
| **Organize Data**       | Figure out how to store and organize the information the software will use.       | Decide where to place the bricks and how they will connect.                 |
| **Create Instructions** | Design the step-by-step instructions (algorithms) for how the software will work. | Create a step-by-step guide on how to build the entire castle.              |

## Modularity

- **Coupling:** how well modules work together.
- **Cohesion:** how well a module meets a singly designed goal.

Imagine you have a bunch of toys:

- **Coupling** is like how well your toys play together.
- **Cohesion** is like how well each toy does its own job.

### Goal of Modularity

| <center>Principle</center> | <center>Description</center>                                                |
| -------------------------- | --------------------------------------------------------------------------- |
| **Abstraction**                | Hide complex details, show only essential information.                      |
| **Decomposability**            | Break down a complex system into smaller, manageable parts.                 |
| **Composability**              | Build complex systems by combining smaller, reusable parts.                 |
| **Module Understandability**   | Make each module easy to understand and work with independently.            |
| **Continuity**                 | Changes in one module have minimal impact on others.                        |
| **Protectability**             | Isolate modules to prevent unwanted interactions and errors from spreading. |

### Abstraction

- **Information Hiding:** Concealing complexity within a "black box." Examples:

	- Functions
	- Macros
	- Libraries
	- Classes
	- Methods

- **Data Encapsulation:** Hiding implementation details from the user, providing only a set of tools (methods/functions) to manipulate the data.

## Coupling

- Measuring the strength of connections between modules/subsystems.
- Want to make it so changes don't affect other modules.
- Shared variables and control information creates tight coupling.
- State-decentralization creates loose coupling.

### Module Coupling Levels

#### Tight (Bad)

Strong dependencies, difficult to maintain.

| <center>Type</center> | <center>Description</center>                     | <center>Example</center>                                         |
| --------------------- | ------------------------------------------------ | ---------------------------------------------------------------- |
| **Content**           | One module modifies another's internal workings. | Module A directly changes a variable inside Module B.            |
| **Common**            | Modules share and manipulate global data.        | Multiple modules use and modify a global configuration variable. |
| **External**          | Modules share direct access to external I/O.     | Two modules directly write to the same file.                     |

#### Medium (Needs Improvement)

Better, but still room for improvement.

| <center>Type</center> | <center>Description</center>                                                  | <center>Example</center>                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Control**           | Data passed influences another module's internal logic.                       | Module A sends a "sort type" flag to Module B, which then performs different sorting algorithms based on the flag.             |
| **Data Structure**    | Modules share the same data structure (problematic if the structure changes). | Both modules use the same complex `Customer` object, and a change to the object's definition requires changes in both modules. |

#### Loose (Good)

Minimal dependencies, ideal.

| <center>Type</center> | <center>Description</center>                                         | <center>Example</center>                              |
| --------------------- | -------------------------------------------------------------------- | ----------------------------------------------------- |
| **Data**              | Modules share data.                                                  | Module A passes a simple `Customer ID` to Module B.   |
| **Message**           | Modules communicate via messages/commands.                           | Module A sends a "process order" message to Module B. |
| **No Coupling**       | No communication (theoretical; undesirable/unrealistic in practice). |                                                       |

## Cohesion

- A module's ability to work toward a set and well-defined purpose.
- The stronger the cohesion the better.
- We want **strong cohesion** and **loose coupling**.

Cohesion is the other area to focus on when we are talking about modularity. Cohesion is the measurement of how focused our module is on a single task. The more focused the module, the higher the cohesion.

### Types of Cohesion

#### Weak Cohesion

| <center>Type</center> | <center>Description</center>                                           | <center>Example</center>                                 |
| --------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------- |
| **Coincidental**      | Modules are only linked because they reside in the same file.          | Single-file program, mishmash controller, spaghetti code |
| **Temporal**          | Modules are only linked because events happen around the same time.    | Shutdown activities                                      |
| **Logical**           | Modules are linked because they fall within the same general category. | Backup controller                                        |

#### Medium Cohesion

| <center>Type</center> | <center>Description</center>                               | <center>Example</center>          |
| --------------------- | ---------------------------------------------------------- | --------------------------------- |
| **Procedural**        | An order of execution passes from one command to the next. | Update all databases and all logs |
| **Communicational**   | All activities operate on the same input or output data.   | Stack with all operations         |
| **Sequential**        | The output of one activity is the input of the next.       | Update database row               |

#### Strong Cohesion

| <center>Type</center>  | <center>Description</center>                                                   | <center>Example</center>                                                                           |
| ---------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| **Functional**             | A module supports activities needed for one and only one problem-related task. | Determine monthly payment, compute intercept of graphs                                             |
| **Object (Informational)** | All activities operate on or modify a single object.                           | Mortgage payment (related to a specific mortgage object), User (related to a specific user object) |
