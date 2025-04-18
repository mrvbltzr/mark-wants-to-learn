
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Adding and Styling Forms</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--08-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Advanced Attribute Selectors

- More precise targeting of HTML elements based on attributes and values.

- Beyond simple attribute presence checks.

- Provides granular styling control.

- Selection based on:

    - Partial matches
    - Attribute value beginnings
    - Attribute value endings
    - Specific values in space-separated lists.

```css
/* Element with attribute */
[type] { border: 2px solid blue; }
```

```css
/* Element with specific attribute value */
[type="email"] { background-color: lightyellow; }
```

```css
/* Element with specific attribute value in list */
[lang~="en-us"] { color: green; }
```

```css
/* Element with matching specific attribute value */
[lang|="en"] { font-style: italic; }
```

```css
/* Element with specific attribute value prefix */
[href^="#"] { text-decoration: underline; }
```

```css
/* Element with specific attribute value suffix */
[href$=".de"] { font-weight: bold; }
```

```css
/* Element with at least one attribute value */
[src*="cdn"] { box-shadow: 2px 2px 5px rgba(0,0,0,0.3); }

/* Case-insensitive value check */
[src*="cdn" i] { outline: 2px dashed red; }
```

## Form Element Default Style

Input elements (`<input>`, `<textarea>`, `<select>`, etc.) have default browser styles.

**How to handle:**

- CSS Reset/Normalize: Minimize inconsistencies.

- Careful targeting: Specific CSS selectors.

- Browser dev tools: Inspect default styles.

- User expectations: Maintain familiar visual cues.

## Borders vs. Outlines

### Border

- Part of the box model: Affects element size.  

- Different styles per side possible.

- Supports `border-radius`.

### Outline

- _Not_ part of the box model: Doesn't affect element size.

- Same style on all sides.

- No `border-radius`.

- Supports `outline-offset`.

## Valid and Invalid Pseudo-selectors

- Style form elements based on validation state.

- Dynamically change appearance based on user input validity.

- Reflects form validation rules.

### `:invalid`

- Applies to form elements (`<input>`, `<select>`, `<textarea>`) when content is _invalid_ per form rules.

- Triggers:

    - Empty required fields.
    - `type` mismatch (e.g., text in number field).
    - `pattern` mismatch.
    - Custom JavaScript validation.

- Used for visual feedback on invalid input.

### `:valid`

- Applies to form elements when content is _valid_ per form rules.

- Triggered when user input meets all requirements.

- Used for positive feedback on correct input.
