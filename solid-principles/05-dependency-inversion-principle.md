

<div id="title" align="center">
<a href="https://www.udemy.com/course/solid-design/">
<img src="https://img.shields.io/badge/SOLID_Principles:_Introducing_Software_Architecture_&amp;_Design-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="SOLID Principles: Introducing Software Architecture &amp; Design" />
</a>
<h1>Dependency Inversion Principle</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--13-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Overview

- High-level modules shouldn't depend on low-level modules. Both should depend on abstractions.  

- Abstractions shouldn't depend on details. Details (implementations) should depend on abstractions.  

- Think: Depend on _what_ something does (interface), not _how_ it does it (concrete class). This makes code more flexible and reusable.

## Injection vs. Inversion

- Dependency Injection is different from Dependency Inversion.

- Both separate concepts.

- Cannot be use interchangeably.

| <center>Feature</center> | <center>Inversion of Control (IoC)</center> | <center>Dependency Injection (DI)</center> |
| ------------------------ | ------------------------------------------- | ------------------------------------------ |
| **Concept**              | General design principle                    | Specific implementation technique          |
| **Focus**                | Inverting control flow                      | How dependencies are provided              |
| **Scope**                | Broader, includes various techniques        | More focused on dependency management      |

## Dependency Injection (DI)

- Give an object its dependencies instead of it creating them itself.

- Makes code more testable, flexible, and maintainable.

- Instead of `Car` creating its `Engine`, you _inject_ the `Engine` into the `Car`.

### Without DI

```typescript
class Engine {
    start() {
        console.log('Engine started');
    }
}

class Car {
    private engine: Engine;

    constructor() {
        this.engine = new Engine(); // Car creates its own Engine - tight coupling
    }

    drive() {
        this.engine.start();
        console.log('Car driving');
    }
}

const myCar = new Car();
myCar.drive();
```

### With DI

```typescript
interface EngineInterface {
    // Abstraction for Engine
    start(): void;
}

class EngineDI implements EngineInterface {
    // Engine that implements the interface
    start() {
        console.log('Engine started');
    }
}

class ElectricEngine implements EngineInterface {
    // Another Engine that implements the interface
    start() {
        console.log('Electric Engine started');
    }
}

class CarDI {
    private engine: EngineInterface; // Car now depends on the interface

    // Dependency Injection via constructor
    constructor(engine: EngineInterface) {
        // Engine is injected
        this.engine = engine;
    }

    drive() {
        this.engine.start();
        console.log('Car driving');
    }
}

const myEngine = new EngineDI();
const myCarDI = new CarDI(myEngine); // Injecting the Engine
myCarDI.drive();

const myElectricEngine = new ElectricEngine();
const myElectricCar = new CarDI(myElectricEngine); // Injecting the Electric Engine
myElectricCar.drive();
```

## Inversion of Control (IoC)

- A framework or container controls the execution flow of a program, not the application code itself. (Or, "Don't call us, we'll call you.")  

- Traditional programming: Your code calls libraries/frameworks. IoC: The framework calls your code.

- Examples: Event listeners, dependency injection containers. Makes code more modular, reusable, and testable.  

**This example violates DIP:**

```typescript
class LightBulb {
    turnOn(): void {
        console.log('Light bulb on');
    }

    turnOff(): void {
        console.log('Light bulb off');
    }
}

class Switch {
    constructor(private lightBulb: LightBulb) {}

    flipUp(): void {
        this.lightBulb.turnOn();
    }

    flipDown(): void {
        this.lightBulb.turnOff();
    }
}

const lightBulb = new LightBulb();
const mySwitch = new Switch(lightBulb); // Switch directly depends on LightBulb
mySwitch.flipUp();
```

**This one obeys the DIP:**

```typescript
interface Switchable {
    turnOn(): void;
    turnOff(): void;
}

class Lightbulb implements Switchable {
    turnOn(): void {
        console.log('Light bulb on');
    }

    turnOff(): void {
        console.log('Light bulb off');
    }
}

class Fan implements Switchable {
    //New Class that implements the interface
    turnOn(): void {
        console.log('Fan on');
    }

    turnOff(): void {
        console.log('Fan off');
    }
}

class Switch {
    constructor(private device: Switchable) {
        // Depends on the Switchable interface
    }

    flipUp(): void {
        this.device.turnOn();
    }

    flipDown(): void {
        this.device.turnOff();
    }
}

const lightBulb = new Lightbulb();
const lightSwitch = new Switch(lightBulb); // Switch depends on Switchable interface
lightSwitch.flipUp();

const fan = new Fan();
const switchForFan = new Switch(fan); // Can now control a fan with the same switch!
switchForFan.flipUp();
```
