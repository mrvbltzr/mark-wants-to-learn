
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/solid-design/">
<img src="https://img.shields.io/badge/SOLID Principles: Introducing Software Architecture & Design-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="SOLID Principles: Introducing Software Architecture & Design" />
</a>
<h1>Single Responsibility Principle</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--13-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## What's in my notes?

- [Overview](#overview)
- [Cohesion and Coupling](#cohesion-and-coupling)
	- [Cohesion](#cohesion)
	- [Coupling](#coupling)
- [Examples](#examples)

## Overview

- S in SOLID = Single Responsibility Principle (SRP)

- Every software component **should have one and only one responsibility (or reason to change).**

- **Analogy:** A Swiss Army knife tries to do _everything_, but isn't the _best_ at anything. The Single Responsibility Principle is like having a separate, specialized tool for each job, rather than one tool trying to do it all.

## Cohesion and Coupling

#### Cohesion

- Cohesion is the degree to which the various parts of a software component are related.

- Higher Cohesion helps attain better adherence to the Single Responsibility Principle.

- ✔️ Aim for Higher Cohesion.

#### Coupling

- Coupling is the level of inter dependency between various software components.

- Loose Coupling helps attain better adherence to the Single Responsibility Principle.

 - ✔️ Aim for Loose Coupling.

## Examples

A class that handles both employee data _and_ tax calculations violates SRP. Changes to tax laws should only affect tax-related code, and changes to employee data should only affect employee-related code. Instead, create separate classes: `EmployeeInfo` (for employee data) and `TaxCalculator` (for tax calculations). The main class can then utilize both.

 **This example violates SRP:**

```typescript
// Single class handling both employee data and tax calculations

class EmployeeAndTax {
    private employeeName: string;
    private salary: number;

    constructor(employeeName: string, salary: number) {
        this.employeeName = employeeName;
        this.salary = salary;
    }

    getEmployeeName(): string {
        return this.employeeName;
    }

    getSalary(): number {
        return this.salary;
    }

    calculateTax(): number {
        // Complex tax calculation logic (prone to change)
        if (this.salary > 50000) {
            return this.salary * 0.3; // Example tax rate
        } else {
            return this.salary * 0.15; // Example tax rate
        }
    }
}
```

**This example complies to SRP:**

```typescript
// Separate classes for employee data and tax calculations

class EmployeeInfo {
    private employeeName: string;
    private salary: number;

    constructor(employeeName: string, salary: number) {
        this.employeeName = employeeName;
        this.salary = salary;
    }

    getEmployeeName(): string {
        return this.employeeName;
    }

    getSalary(): number {
        return this.salary;
    }
}

class TaxCalculator {
    calculateTax(employee: EmployeeInfo): number {
        const salary = employee.getSalary();
        
        // Complex tax calculation logic (isolated here)
        if (salary > 50000) {
            return salary * 0.3; // Example tax rate
        } else {
            return salary * 0.15; // Example tax rate
        }
    }
}
```
