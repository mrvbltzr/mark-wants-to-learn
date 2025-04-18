
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Introducing Sass</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--20-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Overview

- Sass (Syntactically Awesome Style Sheets) and SCSS are basically the same, just slightly different syntax. Both are preprocessors, not run directly in the browser.

- Sass extends CSS; it doesn't replace it.

- **Purpose:** Makes CSS easier to write and maintain. Helps avoid huge, messy CSS files by providing features like nesting and reusable code snippets. It's a development tool, not for production.

- **How it works:** You write Sass/SCSS code, then a tool compiles it into regular CSS for the browser.

- **Key Sass Features:**

    - Nesting CSS rules (for shorter code)
    - Inheritance from other rules (less repetition)
    - Helper functions (e.g., adjusting colors)
    - Mixins (reusable code blocks)
    - Partials (splitting code into multiple files)
    - Variables (for reusable values like hex codes)
    - Conditions and loops

## Nesting

- Makes CSS cleaner, easier to read & maintain.

### Selectors

- CSS selectors inside each other, matching HTML structure.

```scss
.house {
    background-color: lightblue;
    padding: 20px;

    .living-room {
        background-color: lightyellow;
        padding: 10px;

        .sofa {
            background-color: brown;
            color: white;
        }
    }
}
```

**Compiled to CSS:**

```css
.house {
  background-color: lightblue;
  padding: 20px;
}
.house .living-room {
  background-color: lightyellow;
  padding: 10px;
}
.house .living-room .sofa {
  background-color: brown;
  color: white;
}
```

### Properties

- Reduces repeated CSS rules for related properties (especially helpful for layouts like flexbox).

```scss
.container {
    display: flex;
    flex: {
        direction: column;
        wrap: nowrap;
        justify-content: center;
    }
    width: 100%;
    background-color: #eee;
}
```

**Compiled to CSS:**

```css
.container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
    background-color: #eee;
}
```

## Variables

- Store & reuse info (colors, fonts, etc.)

- Like programming variables

- Makes CSS organized, easy to update, consistent

```scss
// Defining variables
$primary-color: #3498db; // A blue color
$secondary-color: #e74c3c; // A red color
$font-family: 'Arial', sans-serif;
$base-font-size: 16px;

// Using variables
body {
    font-family: $font-family;
    font-size: $base-font-size;
    color: $primary-color;
    background-color: #f0f0f0;
}
```

## Lists & Maps

### Lists

- Group multiple values (like arrays).

- Good for looping (iteration).

- Store related info together.

- Pass many arguments to functions at once.

```scss
$colors: (red, green, blue);
```

### Maps

- Like dictionaries/associative arrays (data structure)

- `Key: Value` (e.g., Dish Name: Price)

- Easy way to look up values using keys (like a menu)

```scss
$menu: (
    "Adobo": 150,
    "Sinigang": 180,
    "Lechon": 250,
    "Pancit": 120
);

// Accessing values (like asking for the price of a dish)
$adobo-price: map-get($menu, "Adobo"); // $adobo-price will be 150
$sinigang-price: map-get($menu, "Sinigang"); // $sinigang-price will be 180
```

## Built-In Functions

- Familiar CSS functions (like `rgb`) and new ones (e.g., `red` to extract a color component) exist.

- These are very useful! Example: Creating lighter shades of a base color.

- **Problem:** Manually adjusting light purple shades is tedious if the base color changes. Better to dynamically derive lighter shades.

    - **Solution:** Use the `lighten()` function. It takes a color and a percentage (0-100%).

    - **Example**: `lighten(map-get($colors, main), 70%)` lightens the `main` color (from a map) by 70%.

    - **Fine-tuning:** Experimenting with the percentage (70% was too dark, 80% too light; 72% looked best).

    - **Advantage:** Now, changing the `main` color automatically updates all derived lighter shades. (e.g., changing `main` to black results in an adjusted gray background).

## Arithmetic

- Sass lets you do math directly in your CSS. Useful for lengths, colors, etc.

- **Basic Ops:** `+ - * /` (just like regular math)

- **Example:** `$width: 100px + 20px;` (adds 100px and 20px)

- Order of operations matters (PEMDAS applies). Use parentheses `()` to control it. Example: `(10px + 20px) * 2`

- Mixing units can sometimes lead to unexpected results, or errors, if the units are not compatible.

```scss
$complex-calculation: (10px + 20px) * 2; // 60px

/* Sass automatically handles units during calculations.
   However, it's generally best to use the same units for consistency. */
$length1: 10px;
$length2: 20px;
$combined-length: $length1 + $length2; // 30px
```

## Import & Partial

- Smaller, manageable Sass files; think modular coding. File names start with an underscore (e.g., `_variables.scss`). They aren't compiled into separate CSS files.

- **How to use them?** Import them into a main Sass file (like a master file) using `@use` (preferred) or `@import` (older method). `@use` creates namespaces to avoid naming conflicts.

- **Why use them?** Better organization (easier to read & update); code reusability (e.g., one `_variables.scss` for all colors); easier maintenance (find stuff quickly); better team collaboration (less overlap/conflict).

```scss
@import '_variables.scss';
@import 'typography.scss';
```

## Media Queries

- Instead of separate media queries, we can _nest_ them within the CSS rules they affect. This means moving the media query code _inside_ the CSS for the element it styles.

- Keeps the media query visually close to the element it modifies, improving readability. It still compiles to valid, separate media queries in the final CSS. It's optional; the old way works perfectly fine.

- Nesting doesn't change the output CSS or the website's appearance; it just improves code organization for developers. It's a stylistic choice, not a requirement.

```scss
html {
  font-size: 94.75%;
  @media (min-width: 40rem) {
    font-size: 125%;
  }
}
```

**Compiled to CSS:**

```css
html {
  font-size: 94.75%;
}
@media (min-width: 40rem) {
  html {
    font-size: 125%;
  }
}
```

## Inheritance

- `@extend`: Shares CSS styles between selectors.

- Basically one selector inherits styles from another.

- Goal: Re-use code, less repetition.

```scss
.sass-section {
    border: $border-default;
    background: lighten(map-get($colors, main), 72%);
    padding: $size-default * 2;
    text-align: center;
    width: 90%;
    box-sizing: border-box;
    @media (min-width: 40rem) {
        width: 30rem;
    }
}

.sass-introduction {
    @extend .sass-section;
    box-shadow: $size-tiny $size-tiny $size-tiny / 2 #ccc;
}
```

## Mixins

- Reusable blocks of CSS code – like functions in programming.

- **Key benefits:**

    - Avoid repeating CSS (saves time & space).
    - Makes CSS easier to update (change one place, changes everywhere).
    - Keeps stylesheets organized (better readability & maintainability).

- **How they work:**

    - Encapsulate CSS rules (group them together).
    - Can accept arguments (customize output).

```scss
@mixin display-flex(/* we can accept parameters here */) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}

.container {
    @include display-flex(/* arguments here */);
    padding: $size-default * 3 0;
}
```

### `@content`

- `@content:` Lets you add custom CSS _inside_ a mixin.

- Acts like a placeholder for extra styles.

```scss
@mixin media-min-width($width) {
    @media (min-width: $width) {
        @content;
    }
}

html {
    font-size: 94.75%;
    @include media-min-width(40rem) {
        font-size: 125%;
    }
}
```

## Ampersand (&) Operator

- Use it with `:hover`, `::before`, etc. Targets element states/parts.

```scss
.documentation-link {
    color: map-get($colors, main);
    padding: $size-tiny;
    border: $border-default;

    &:hover,
    &:active {
        background: map-get($colors, secondary);
        border-color: map-get($colors, secondary);
    }
}
/* generates: .documentation-link:hover, .documentation-link:active */
```

## Links

- https://sass-lang.com/documentation
