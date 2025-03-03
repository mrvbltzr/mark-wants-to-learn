
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>CSS Basics</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--06-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Overview](#overview)
- [Inline Styles](#inline-styles)
- [Style Tag](#style-tag)
- [External Stylesheet](#external-stylesheet)
- [Types of Selector](#types-of-selector)
	- [Elements](#elements)
	- [Classes](#classes)
	- [IDs](#ids)
	- [Attributes](#attributes)
	- [Universal](#universal)
- [Cascading Style & Specificity](#cascading-style--specificity)
- [Inheritance](#inheritance)
- [Combinators](#combinators)
	- [Descendant Selector](#descendant-selector)
	- [Child Selector](#child-selector)
	- [Adjacent Sibling Selector](#adjacent-sibling-selector)
	- [General Sibling Selector](#general-sibling-selector)

## Overview

- **CSS** stands for **C**ascading **S**tyle **S**heets.

- `background: red` - where `background` is the **property** and `red` is the **value**.

## Inline Styles

- Inline CSS styles HTML elements directly using the `style` attribute.

- It's simple for quick, single-element styling, but not recommended for larger projects due to maintainability issues.

```html
<p style="color: blue;">This text is blue.</p>
```

## Style Tag

- Embeds CSS _directly_ in HTML.

- Styles apply _only_ to that HTML page.

- Goes in the `<head>` tag.

- Good for small, page-specific styles. (But usually better to link to external stylesheet for larger projects.)

```html
<style>
p {
	color: blue;
	font-size: 16px;
}
</style>

<p>This paragraph is blue and 16px font.</p>
```

## External Stylesheet

- Separate file for CSS rules.

- _Recommended_ way to style, _especially_ for bigger sites.

- Linked to HTML with `<link>` tag in `<head>`.

- Can reuse styles across multiple HTML pages. (Makes maintenance easier!)

**index.html:**

```html
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<p>This paragraph is styled by styles.css.</p>
</body>
</html>
```

**styles.css:**

```css
p { color: blue; font-size: 16px; }
```

## Types of Selector

**Write CSS rule names in _kebab-case._**

### Elements

- Set equal style for these elements.

```css
article {}
```

### Classes

- Set equal style for elements within the same class.

```css
.style-one {}
```

### IDs

- Set style to one specific element.

```css
#style-two {}
```

### Attributes

- Set equal styles to all elements with attribute(s).

```css
[disabled] {}
```

### Universal

- Rarely used selector.

```css
* {}
```

## Cascading Style & Specificity

There are four categories which define the specificity level of a selector:

1. Inline styles - `<h1 style="color: pink;">`

2. IDs - `#navbar`

3. Classes, pseudo-classes, attribute selectors - `.test, :hover, [href]`

4. Elements and pseudo-elements - `h1, ::before`

❗ Universal selectors are ignored.

## Inheritance

- Parent styles apply to children. (Unless children have their own styles.)

- Example: `div` text blue → all text inside `div` also blue (unless overridden).

- Avoids repeating styles. (Keeps CSS DRY - Don't Repeat Yourself!)

- Inheritance is the lowest in specificity.

```html
<style>
div {
	color: blue; /* Parent style */
	font-size: 20px; /* Parent style */
}
p {
	font-size: 16px; /* Child overrides parent's font-size */
}
</style>

<div>
	This text is blue and 20px (inherited from the div).
	<p>This text is blue and 16px (inherits color, overrides font-size).</p>
	<span>This text is blue and 20px (inherited from the div).</span>
</div>
```

## Combinators

- Special symbols to select elements based on relationships.

- More control over which elements get styled.

**There are four main types:**
### Descendant Selector

- **(space)**: Selects children _and_ nested elements.

```html
<style>
    div p { color: blue; }
</style>

<div>
    <p>This paragraph is blue.</p>
    <span><p>This nested paragraph is also blue.</p></span>
</div>
```

### Child Selector

- **(>):** Selects _direct_ children only.

```html
<style>
    div > p { font-weight: bold; }
</style>

<div>
    <p>This paragraph is bold.</p>
    <span><p>This nested paragraph is not bold.</p></span>
</div>
```

### Adjacent Sibling Selector

- **(+):** Selects the element _immediately_ after another.

```html
<style>
    h1 + p { text-decoration: underline; }
</style>

<h1>Heading</h1>
<p>This paragraph is underlined.</p>
<p>This paragraph is not underlined.</p>
```

### General Sibling Selector

- **(~):** Selects any sibling _after_ another.

```html
<style>
    h1 ~ p { font-style: italic; }
</style>

<h1>Heading</h1>
<p>This paragraph is italic.</p>
<ul><li>List Item</li></ul>
<p>This paragraph is also italic.</p>
```
