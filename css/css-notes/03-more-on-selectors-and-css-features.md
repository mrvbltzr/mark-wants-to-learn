
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>More on Selectors and CSS Features</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--07-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Multiple Class](#multiple-class)
- [Class vs ID](#class-vs-id)
	- [Class](#class)
	- [ID](#id)
- [Important](#important)
- [Selecting The Opposite](#selecting-the-opposite)

## Multiple Class

- Apply _multiple_ classes to _one_ HTML element.

- Combine styles from different sources.

- List class names in `class` attribute, separated by spaces.

- Classes are applied in the order they are listed. Later classes can override earlier ones.

```html
<div class="highlighted bold large-text">
	This text is highlighted, bold, and large.
</div>
```

## Class vs ID

### Class

- Think of a class as a _category_ or _group_ of elements. _Multiple_ elements can share the same class.

### ID

- Think of an ID as a _unique identifier_ for a _single_ element. Only _one_ element on a page can have a specific ID.

| <center>Feature</center> | <center>Class</center>                 | <center>ID</center>                  |
| ------------------------ | -------------------------------------- | ------------------------------------ |
| **Selects**              | Multiple elements                      | Single element                       |
| **Syntax**               | `.` (dot) before the name              | `#` (hash) before the name           |
| **Uniqueness**           | Not unique; many elements can share it | Unique; only one element can have it |
| **Use Cases**            | Styling groups of elements             | Styling a specific, unique element   |
| **Specificity**          | Lower specificity than ID              | Higher specificity than class        |

## Important

* `!important` in CSS beats all other rules, no matter how specific they are.

* Using `!important` too much messes up CSS, making it hard to fix and understand.

* Better to be specific with CSS selectors instead of always using `!important`.

```css
p {
    color: blue !important;
}
```

## Selecting The Opposite

* `not()` in CSS lets you pick stuff that doesn't fit a certain description.

```css
/* Style all elements that are NOT paragraphs */
:not(p) {
    color: blue;
}

/* Style all list items that are NOT the first child */
li:not(:first-child) {
    font-style: italic;
}

/* Style all divs that do NOT have the class "special" */
div:not(.special) {
    background-color: lightgray;
}
```
