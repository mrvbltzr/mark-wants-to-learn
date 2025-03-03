
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/solid-design/">
<img src="https://img.shields.io/badge/SOLID Principles: Introducing Software Architecture & Design-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="SOLID Principles: Introducing Software Architecture & Design" />
</a>
<h1>Liskov Substitution Principle</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--13-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Overview](#overview)
- [Examples](#examples)
	- [Break The Hierarchy](#break-the-hierarchy)
	- ["Tell, Don't Ask"](#tell-dont-ask)

## Overview

- L in SOLID = Liskov Substitution Principle (LSP)

- Objects should be replaceable with their subtypes without affecting the correctness of the program.

- Subclasses should be substitutable for their base classes. If you have a function that works with a base class, it should also work correctly with any of its subclasses.

## Examples

#### Break The Hierarchy

If `Bird` has a `fly()` method, and `Penguin` inherits from `Bird` but can't fly, it violates LSP. Code expecting a `Bird` to fly will break when given a `Penguin`.

```typescript
// Violates LSP

class Bird {
    fly(): void {
        console.log('Flying...');
    }
}

class Penguin extends Bird {
    override fly(): never {
        throw new Error("Penguins can't fly!"); // Or just don't do anything
    }
}

function makeBirdFly(bird: Bird) {
    bird.fly();
}

const bird = new Bird();
makeBirdFly(bird); // Works fine

const penguin = new Penguin();
makeBirdFly(penguin); // CRASHES - LSP Violation!
```

```typescript
// Obeys LSP

class Bird {
    move(): void {
        console.log('Moving...'); // More general method
    }
}

class Penguin extends Bird {
    override move(): void {
        console.log('Waddling...'); // Different way of moving
    }
}

class Eagle extends Bird {
    override move(): void {
        console.log('Soaring...');
    }

    fly(): void {
        console.log('Flying...');
    }
}

function makeBirdMove(bird: Bird) {
    bird.move();
}

const bird = new Bird();
makeBirdMove(bird); // Works fine

const penguin = new Penguin();
makeBirdMove(penguin); // Works fine - different movement

const eagle = new Eagle();
makeBirdMove(eagle); // Works fine - different movement
eagle.fly(); // Can call fly specifically for eagles
```

#### "Tell, Don't Ask"

```typescript
// VIOLATES LSP:
class Product {
    protected discount: number = 0;

    getDiscount(): number {
        return this.discount;
    }
}

class InHouseProduct extends Product {
    addExtracDiscount(): void {
        this.discount = this.discount * 1.5;
    }
}

const p1 = new Product();
const p2 = new Product();
const p3 = new InHouseProduct();

const productList: Product[] = [p1, p2, p3];

for (const product of productList) {
    if (product instanceof InHouseProduct) {
        product.addExtracDiscount();
    }

    console.log(product.getDiscount());
}
```

```typescript
// OBEYS LSP
class Product {
    protected discount: number = 0;

    getDiscount(): number {
        return this.discount;
    }
}

class InHouseProduct extends Product {
    override getDiscount(): number {
        this.addExtracDiscount();
        return this.discount;
    }

    addExtracDiscount(): void {
        this.discount = this.discount * 1.5;
    }
}

const p1 = new Product();
const p2 = new Product();
const p3 = new InHouseProduct();

const productList: Product[] = [p1, p2, p3];

for (const product of productList) {
    console.log(product.getDiscount());
}
```
