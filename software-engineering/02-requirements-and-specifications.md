

<div id="title" align="center">
<a href="https://www.udemy.com/course/software-engineering-101/">
<img src="https://img.shields.io/badge/Software_Engineering_101:_Plan_and_Execute_Better_Software-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="Software Engineering 101: Plan and Execute Better Software" />
</a>
<h1>Requirements and Specifications</h1>
<img src="https://img.shields.io/badge/Finished-2025--01--22-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Requirements Overview

- A way to figuring out the exact specifications of what the software should do.

- A process for finding out the goal of the system.

- Captures the **WHAT** and not the **HOW**. _The HOW is for the design._

- Will create document which lays out these details.

## Requirements vs Specifications

### Requirements

- a non-technical definition of something the user requires from the system.

- should be understood by just about anybody. **NO JARGON.**

- **Example:**

    - ✔️ Ability to submit a "request for treatment" medical form.

    - ✔️ Ability to delete a request but must ask the password before deletion.

    - ❌ Use MySQL as database and PHP as back-end language.

### Specifications

- a technical definition of what is required from the system

- keep it simple, we are not trying to design it.

- no need to specify the tech stack to use. **NO JARGON.**

- **Example:**

    - ✔️ Send AES-256 encrypted for data from the front-end to the back-end server.

    - ❌ Use _Ncrypt_ to send AES-256 encrypted JSON form data from JavaScript to MySQL.

- **More Examples:**

    - **User Requirements:**

        - The user should be able to upload a video to the website.

    - **System Specification:**

        - The uploader should accept H264, MOV and MPG files for upload.

        - The uploader should compress the video and save 3 different copies on the server.

        - A link to the compressed video should be sent via email to the user after completion.

## Functional Requirements

- Requirements and specifications pertaining to the function of the program.

- _What should the system do?_

- **Example:**

    - ✔️ Send form data the front-end to the back-end server. _(answers the "what should the system do")_

## Non-Function Requirements

- Requirements and specification on what goals should be met.

- _How should the system work?_

- **Example:**

    - ✔️ Use AES-256 encryption on all form data. _(answers the "how should the system work")_

### Categories

- **Product Requirements** - Must haves of the product itself. Talk about behavior.

    - _Entire project must be coded in Java._

- **Organizational Requirements** - Company policies, standards, styles, rules.

    - _Product data must be encrypted by AES-256._

    - _The project will be developed using the Scrum methodology._

- **External Requirements** - External laws, regulations, trends, etc.

    - _Product must use SSL due to Law XYZ in the EU._

## WRSPM Model

- A reference model for understanding the connection between requirements and specifications and the real world.

_(The example below is an ATM)_

### Environment

#### World

- The world assumptions which are used to develop the system.

    - ❓ Will there be internet?

    - ❓ Electricity?

    - ❓ What is the speed of the internet?

#### Requirements

- Defining the problem at hand in terms of a user of the system.

    - ❗I want to get money out.

### Interface

#### Specifications

- Defining the technical requirements of the system. Here are we linking together the idea of the solution, to the system itself.

### System

#### Program

- The program and code itself.

#### Machine

- Hardware specification.

    - ✔️ The box

    - ✔️ Power cords

    - ✔️ computer chips, etc.

## WRSPM Variables

### Environment

- **Eh (environment hidden)** - elements of the environment which are hidden from the system. For example, the atm card itself.

### Interface

- **Ev (environment visible)** - elements of the environment which are visible to the system. For example, the magstrip/chip on the card itself.

- **Sv (system visible)** - elements of the system which are visible in the environment. For example, buttons, screens or the UI.

### System

- **Sh (system hidden)** - elements of the system which are hidden from the environment. The machinery inside, the back-end servers, contacting the bank.
