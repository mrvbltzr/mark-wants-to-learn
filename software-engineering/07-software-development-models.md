
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/software-engineering-101/">
<img src="https://img.shields.io/badge/Software Engineering 101: Plan and Execute Better Software-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="Software Engineering 101: Plan and Execute Better Software" />
</a>
<h1>Software Development Models</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--01--25-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Overview](#overview)
- [Waterfall Model](#waterfall-model)
- [V-Model](#v-model)
- [Sashimi Model](#sashimi-model)
- [Iterative vs Incremental](#iterative-vs-incremental)
- [Unified Process Framework](#unified-process-framework)
	- [Inception](#inception)
	- [Elaboration](#elaboration)
	- [Construction](#construction)
	- [Transition](#transition)
- [Spiral Model](#spiral-model)
- [Resources and Links](#resources-and-links)

## Overview

**Linear/*Predictive***

- Project has been done before
- A clear process is in place
- Not much room for change

**Flexible/*Adaptive***

- Project is a new idea
- No clear process in place
- Project is very likely to change overtime

## Waterfall Model

The **Waterfall model** is a linear, predictive, sequential software development approach. It progresses through distinct phases:

1. **Requirements:** Define and document all project needs.

2. **Design:** Create a detailed plan for the software's architecture.

3. **Implementation:** Develop and code the software based on the design.

4. **Testing:** Rigorously test the software to identify and fix bugs.

5. **Deployment:** Release the software to users.

6. **Maintenance:** Provide ongoing support and updates.

**Key Characteristics:**

- **Sequential:** Each phase must be completed before moving to the next.

- **Rigid:** Changes to requirements are difficult and costly to implement.

- **Documentation-heavy:** Extensive documentation is created at each stage.

**Pros:**

- Simple and easy to understand.

- Suitable for projects with well-defined requirements.

- Provides clear milestones and deliverables.

**Cons:**

- Inflexible to changes.

- High risk of project failure if requirements change.

- Limited user feedback until late in the development cycle.

The Waterfall model is a traditional approach that emphasizes thorough planning and sequential execution. While it can be effective for certain projects, it may not be suitable for projects with evolving requirements or those that require frequent user feedback.

![Waterfall](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/waterfall-flowchart-agile-waterfall.png)

## V-Model

The **V-model** is a software development approach that emphasizes **testing throughout the entire process**.

Imagine building a house:

- **Left side of the "V"**: Like architects and engineers meticulously planning the foundation, structure, and wiring, this side focuses on **planning and design** (requirements analysis, system design, etc.).

- **Right side of the "V"**: As construction progresses, inspectors check the foundation, walls, and plumbing at each stage. Similarly, this side focuses on **testing** at every corresponding stage (unit testing, integration testing, etc.).

**Key takeaway:** By testing early and often, you catch potential problems early on, saving time and money in the long run.

**Think of it this way:** If you find a crack in the foundation early on, it's much easier and cheaper to fix than discovering it after the house is built. The V-model applies this principle to software development, ensuring a more robust and reliable final product.

**Key Idea:** For each phase on the left side of the "V," there's a corresponding testing phase on the right side. This ensures that testing is planned and executed in parallel with development, leading to earlier detection and correction of issues.

**Advantages:**

- **Early defect detection:** Catches issues early on, reducing the cost and time of fixing them later.

- **Improved quality:** Leads to more reliable and robust software.

- **Better communication:** Fosters better communication and collaboration between development and testing teams.

**Disadvantages:**

- **Less flexible:** Can be less flexible for projects with changing requirements.

- **Requires thorough upfront planning:** Requires detailed planning and documentation.

The V-model is a valuable approach for projects where requirements are well-defined and changes are minimal.

![V-model](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/1_v-model.png)

## Sashimi Model

The **Sashimi model** is like a flexible version of the Waterfall model.

- **Imagine a waterfall:** You go through each stage (requirements, design, coding, testing) in a strict order, like steps on a staircase.

- **Now imagine Sashimi:** The "steps" of the waterfall overlap. So, while you're still designing, you might already be starting to code some parts. You get feedback early on and adjust your plans as you go.

**Think of it like building a house:**

- **Waterfall:** You'd finish the entire blueprint before laying a single brick.

- **Sashimi:** You'd start building the foundation while you're still finalizing the exact floor plan. If you encounter unexpected soil conditions, you can adjust the design accordingly.

**Key takeaway:** Sashimi allows for more flexibility and responsiveness to changes, making it better suited for projects where requirements might evolve during development.

**Pros:**

- **Faster Development:** Overlapping phases allow for parallel work, potentially speeding up the overall development cycle.

- **Early Feedback:** Early involvement of developers in the design phase can lead to quicker identification and resolution of potential issues.

- **Increased Flexibility:** The overlapping nature makes it easier to adapt to changing requirements or unforeseen challenges.

- **Improved Communication:** Encourages closer collaboration and communication between different teams involved in the project.

**Cons:**

- **Potential for Miscommunication:** Overlapping phases can increase the risk of miscommunication and coordination issues between teams.

- **Difficult to Track Progress:** Tracking progress can be more challenging due to the overlapping nature of the phases.

- **Increased Complexity:** The model can be more complex to manage compared to the linear Waterfall model.

- **Requires Experienced Teams:** Effective implementation requires experienced teams and strong project management skills.

This analogy helps illustrate the key difference between the rigid Waterfall model and the more adaptable Sashimi model.

## Iterative vs Incremental

- **Incremental:** Build the software in small, functional pieces. Imagine building a house room by room.

- **Iterative:** Build a basic version, get feedback, improve it, and repeat. Like sculpting, you refine the shape gradually.

**Key Difference:** Incremental focuses on adding features, while iterative focuses on refining the existing product.

## Unified Process Framework

### Inception

- Determine feasibility of project
- Look at potential project schedule and cost
- Decide to buy or build

- **Deliverable:** Lifecycle goals

### Elaboration

- Capture the requirements
- Address known risk factors
- Verify and validate the system architecture
- Use Case Diagrams, Class Diagrams and Architecture Diagrams
- Very core prototype code for testing

- **Deliverable:** System Architecture Plans and Prototype

### Construction

- Largest and longest phase of the project
- System is built on the foundation lay-out by Elaboration
- Features are implemented in short time-boxed iterations
- Each iteration delivers a workable release of the software

- **Deliverable:** Continual stream of improving software

### Transition

- System is deployed to target users
- Feedback is received, refinements are made

- **Deliverable:** Final Product

![UPF](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Unified_Process_Model_for_Iterative_Development.svg/800px-Unified_Process_Model_for_Iterative_Development.svg.png)

**Pros:**

- Adaptive
- Quality and re-use focused
- Focused on risk management
- Flexible to incorporate other models

**Cons:**

- Complicated
- Too much overhead for small-scale projects
- Need more programmers, managers, testers, etc.

## Spiral Model

The **Spiral Model** is like a winding staircase for software development.

**Imagine this:** You're building a skyscraper. Instead of building all floors at once, you build a few floors, test them thoroughly, and then build more.

**Key Idea:** At each "turn" of the spiral, you:

- **Plan:** Define goals and requirements.

- **Analyze Risks:** Identify potential problems (like budget overruns or changing technology).

- **Develop & Test:** Build and test a part of the software.

- **Evaluate:** Review the results, get feedback, and plan for the next "turn."

**This approach allows for:**

- **Early Risk Detection:** You catch problems early on, saving time and money.

- **Flexibility:** You can adjust plans based on feedback and changing needs.

- **Improved Quality:** Continuous evaluation leads to a better final product.

The **Spiral Model** is like a controlled experiment, where you learn and improve with each iteration.

**Pros:**

- Very adaptive
- Very risk-focused
- Options for go/no-go

**Cons:**

- Complicated
- Cost more to manage
- Needs constant stakeholder engagement

![Spiral](https://blog.airbrake.io/hubfs/Imported_Blog_Media/Screen-Shot-2016-09-29-at-7_56_49-AM.png)

## Resources and Links

- [https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm](https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm)
- [https://www.geeksforgeeks.org/software-engineering-classical-waterfall-model/](https://www.geeksforgeeks.org/software-engineering-classical-waterfall-model/)
- [https://www.tutorialspoint.com/sdlc/sdlc_v_model.htm](https://www.tutorialspoint.com/sdlc/sdlc_v_model.htm)
- [https://www.geeksforgeeks.org/software-engineering-sdlc-v-model/](https://www.geeksforgeeks.org/software-engineering-sdlc-v-model/)
- [https://www.tutorialspoint.com/sdlc/sdlc_iterative_model.htm](https://www.tutorialspoint.com/sdlc/sdlc_iterative_model.htm)
- [https://www.guru99.com/what-is-incremental-model-in-sdlc-advantages-disadvantages.html](https://www.guru99.com/what-is-incremental-model-in-sdlc-advantages-disadvantages.html)
- [http://agilemodeling.com/essays/agileModelingRUP.htm](http://agilemodeling.com/essays/agileModelingRUP.htm)
- [https://www.tutorialspoint.com/sdlc/sdlc_spiral_model.htm](https://www.tutorialspoint.com/sdlc/sdlc_spiral_model.htm)
