
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/solid-design/">
<img src="https://img.shields.io/badge/SOLID Principles: Introducing Software Architecture & Design-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="SOLID Principles: Introducing Software Architecture & Design" />
</a>
<h1>Interface Segregation Principle</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--13-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Overview](#overview)
- [Techniques to Identify Violations of ISP](#techniques-to-identify-violations-of-isp)
- [Example](#example)

## Overview

- I in SOLID = Interface Segregation Principle (ISP)

- Clients shouldn't be forced to depend on methods they don't use. (Or, many specific interfaces are better than one general interface.)

- Break "fat" interfaces into smaller, more specific ones. A class implementing an interface should only need to know about the methods it actually uses.

- Avoid forcing classes to implement methods that are irrelevant to them. This leads to "interface bloat" and unnecessary dependencies.

- Don't make a class implement a huge interface with 20 methods if it only needs 2 of them. Create smaller interfaces (like `Printable`, `Scannable`) and let classes implement the ones they actually use.

## Techniques to Identify Violations of ISP

- Fat interfaces
- Interfaces with low cohesion
- Empty method implementations

## Example

**This violates ISP:**

```typescript
interface Machine {
    print(): void;
    scan(): void;
    fax(): void;
}

class MultiFunctionPrinter implements Machine {
    print(): void {
        console.log('Printing...');
    }
    scan(): void {
        console.log('Scanning...');
    }
    fax(): void {
        console.log('Faxing...');
    }
}

class SimplePrinter implements Machine {
    print(): void {
        console.log('Printing...');
    }
    scan(): void {
        // Not supported, but have to implement to satisfy the interface.
        // Could throw an error, return nothing, or provide a no-op implementation.  All are undesirable.
        throw new Error('Scanning not supported');
    }
    fax(): void {
        throw new Error('Faxing not supported');
    }
}

// Example Usage (ISP Violation)
const multiPrinter = new MultiFunctionPrinter();
multiPrinter.print();
multiPrinter.scan();
multiPrinter.fax();

const simplePrinter = new SimplePrinter(); //Have to implement scan and fax even though it does not support them
simplePrinter.print();
simplePrinter.scan(); //Throws error
interface Machine {
    print(): void;
    scan(): void;
    fax(): void;
}

class MultiFunctionPrinter implements Machine {
    print(): void {
        console.log('Printing...');
    }
    scan(): void {
        console.log('Scanning...');
    }
    fax(): void {
        console.log('Faxing...');
    }
}

class SimplePrinter implements Machine {
    print(): void {
        console.log('Printing...');
    }
    scan(): void {
        // Not supported, but have to implement to satisfy the interface.
        // Could throw an error, return nothing, or provide a no-op implementation.  All are undesirable.
        throw new Error('Scanning not supported');
    }
    fax(): void {
        throw new Error('Faxing not supported');
    }
}

// Example Usage (ISP Violation)
const multiPrinter = new MultiFunctionPrinter();
multiPrinter.print();
multiPrinter.scan();
multiPrinter.fax();

const simplePrinter = new SimplePrinter(); //Have to implement scan and fax even though it does not support them
simplePrinter.print();
simplePrinter.scan(); //Throws error
```

**This one complies to ISP:**

```typescript
interface Printer {
    print(): void;
}

interface Scanner {
    scan(): void;
}

interface Fax {
    fax(): void;
}

class ModernPrinter implements Printer, Scanner, Fax {
    print(): void {
        console.log('Printing...');
    }
    scan(): void {
        console.log('Scanning...');
    }
    fax(): void {
        console.log('Faxing...');
    }
}

class BasicPrinter implements Printer {
    print(): void {
        console.log('Printing...');
    }
}

const modernPrint = new ModernPrinter();
modernPrint.print();
modernPrint.scan();
modernPrint.fax();

const basicPrint = new BasicPrinter();
basicPrint.print(); //Only needs to implement print
```
