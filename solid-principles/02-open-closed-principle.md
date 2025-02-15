
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/solid-design/">
<img src="https://img.shields.io/badge/SOLID Principles: Introducing Software Architecture & Design-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="SOLID Principles: Introducing Software Architecture & Design" />
</a>
<h1>Open Closed Principle</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--13-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Overview](#overview)
	- [Key Takeaways](#key-takeaways)
	- [SOLID Principle](#solid-principle)
	- [Cautions](#cautions)
	- [Example](#example)

## Overview

- O in SOLID = Open Closed Principle (OCP)

- Software entities (classes, modules, functions, etc.) should be _open_ for extension, but _closed_ for modification.

- **Open for extension:** You should be able to add new functionality.

- **Closed for modification:** You shouldn't have to change existing code.

- **How?** Use abstractions (interfaces, abstract classes) so new features can be added by creating _new_ classes that implement/inherit from the abstractions, _without_ altering the original code.

#### Key Takeaways

- Ease of adding new features.

- Leads to minimal cost of developing and testing software.

- Open Closed Principle often requires decoupling, which, in turn, automatically follows the Single Responsibility Principle.

- Following OCP can lead to cost benefits in the long run.

- OCP and [SRP](01-single-responsibility-principle.md) can work together to achieve a better design.

#### SOLID Principle

- SOLID principles are all intertwined and interdependent.

- SOLID principles are most effective when they are combined together.

- It is important to get a wholesome view of all the SOLID principles.

#### Cautions

- Do not follow the Open Closed Principle blindly.

- You will end up with a huge number of class that can complicate your overall design.

- Make a subjective (opinion-based, personal), rather than an objective (fact-based, measurable, verifiable) decision.

#### Example

```typescript
// Interface for all shapes
interface Shape {
    getArea(): number;
}

// Concrete shape classes
class Rectangle implements Shape {
    constructor(
        private width: number,
        private height: number,
    ) {}

    getArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    constructor(private radius: number) {}

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Class that uses shapes (this class is "closed" for modification)
class AreaCalculator {
    calculateTotalArea(shapes: Shape[]): number {
        let totalArea = 0;

        for (const shape of shapes) {
            totalArea += shape.getArea();
        }

        return totalArea;
    }
}

// Now, let's say we want to add a Triangle
class Triangle implements Shape {
    constructor(
        private base: number,
        private height: number,
    ) {}

    getArea(): number {
        return 0.5 * this.base * this.height;
    }
}

// Example usage
const shapes: Shape[] = [new Rectangle(5, 10), new Circle(7)];
const calculator = new AreaCalculator();
let area = calculator.calculateTotalArea(shapes);

console.log(`Area of Rect and Circle: ${area}`); // Output: 253.98

// Adding a triangle - NO modification to AreaCalculator needed!
shapes.push(new Triangle(4, 6));
area = calculator.calculateTotalArea(shapes);

console.log(`Area of Rect, Circle, and Tri: ${area}`); // Output: 265.98
```
