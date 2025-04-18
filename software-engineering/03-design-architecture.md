

<div id="title" align="center">
<a href="https://www.udemy.com/course/software-engineering-101/">
<img src="https://img.shields.io/badge/Software_Engineering_101:_Plan_and_Execute_Better_Software-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="Software Engineering 101: Plan and Execute Better Software" />
</a>
<h1>Design Architecture</h1>
<img src="https://img.shields.io/badge/Finished-2025--01--25-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Overview

- Architecture is the very top level of design.

- Architects are the link between idea and reality.

- Architecture is something that cannot be fixed once implemented.

- In software, **bad architecture is something that can't be fixed with good programming.**

    - Imagine trying to fix the fountain of a skyscraper after it was already 20 stories high.

- Software architecture is all about breaking up larger system into smaller focused system.

    - Good architecture is hard.

    - Maintainable software has good architecture.

    - Architecture mistakes are almost impossible to fix once coding has begun.

- Good architecture allows for faster development and smarter task allocation.

    - Also allows company to decide where to buy and where to build.

    - Reduce overall idle time.

## Pipe-and-Filter Pattern

- **Pipe-and-Filter pattern** is a design pattern where data is processed sequentially through a series of independent components called "filters." Each filter performs a specific transformation or operation on the data, passing the modified data to the next filter in the chain. This modular approach enhances code reusability, maintainability, and testability.

- Like in Laravel's Pipeline class, data is passed through a series of "pipes," where each pipe performs a specific action on the data before passing it to the next pipe.

![Pipe-and-Filter Pattern](https://miro.medium.com/v2/resize:fit:1144/1*_uqZy7WheVfbtAUvXErHmw.png)

## Client-Server Pattern

- A distributed architecture where clients request services from a central server.

- Clients ask for things, the server fulfills those requests.

### Clients

- Request services (e.g., data, processing)

- Have limited processing power

- Examples: web browsers, mobile apps, workstations

### Server

- Provides services to clients

- Manages resources (data, hardware)

- Handles requests, processes data, and sends responses

- Examples: web servers, database servers, file servers

![Client-Server Pattern](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshxWqTg4pm7ZWfex5OhGtt9qMYAuMPhmGiw&s)

## Master-Slave Pattern

- A design pattern where one component (master) controls and distributes tasks to multiple other components (slaves).

### Master

- Coordinates and manages the overall system.

- Assigns tasks to slaves.

- Collects results from slaves.

### Slaves

- Perform specific tasks assigned by the master.

- Operate independently.

- Report results back to the master.

![Master-Slave Pattern](https://www.oreilly.com/api/v2/epubs/9781787287495/files/assets/b35851ef-fe49-498a-8de9-a79828a7074a.png)

## Layered Pattern

- Organizes software into distinct horizontal layers, each with specific responsibilities.

- **Layered Architecture** is like an organizational chart for our software, dividing it into clear levels of responsibility to improve structure and maintainability.

![Layered Pattern](https://www.oreilly.com/api/v2/epubs/9781491971437/files/assets/sapr_0101.png)

## Software Architecture Process

- Control how a program is decomposed and how it interacts with itself and the outside world.

- Model how the control structure of the system will behave.

- Break project into **subsystems** and **modules**:

### Subsystem

- Independent system which holds independent value.

- A group of modules working together to achieve a larger goal within the software.

- Think of a bigger Lego structure, like a car. It's made up of many Lego bricks (modules) working together (wheels, engine, body).

### Module

- Component of a subsystem which cannot function as a standalone.

- A small, independent part of the software with a specific job.

- Imagine a Lego brick. It's a small, self-contained piece with a specific function (like a wheel or a window).

## Conclusion

There is no one size fits all plan when it comes to software development. The process must be taken on a case to case basis. Us, as engineers, seek to find the best pattern or set of patterns which solve the problem.

This process is an iterative one. We come up with an idea, get feedback, rework it, and repeat the process many times. After a series of iterations, we have the architecture that will work best for the problem.
