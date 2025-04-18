
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Responsive Website</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--08-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Hardware vs Software Pixels

### Hardware Pixels

- Physical dots on the screen.
- Fixed number per monitor (like tiles in a mosaic).

### Software Pixels

- Pixels used in CSS for styling.
- _Not_ necessarily the same size as hardware pixels. Abstract units.
- Like instructions for arranging mosaic tiles.

### Why the difference?

- Normalization across different screens.
- Hardware pixels would make things appear tiny on high-density screens.
- Software pixels ensure consistent sizing (e.g., a 16px font looks roughly the same size across devices), even with varying hardware pixel density.

### Scaling

- Browsers handle the scaling between software and hardware pixels.
- They make sure things look consistent.

Hardware pixels are the real dots. Software pixels are the instructions we give, and the browser figures out how to make those instructions look good on the actual hardware. High pixel density means more hardware pixels per software pixel.

## Viewport Metatag vs. Media Queries

### HTML Viewport Metatag

- HTML tag that controls how the browser scales and fits the webpage to the device screen (viewport). Crucial for responsive design.

- Without it: Mobile browsers might render the page as desktop-sized, then shrink it, leading to poor user experience. The tag corrects this.

- Important: The meta tag _itself_ does _not_ change the website's design. It tells the browser how to _display_ the design.

- See also: [Viewport](05-positioning-elements-with-css.md#Viewport)

### CSS Media Queries

- CSS rules that apply different styles based on conditions (mainly viewport size). The _mechanism_ for responsive design.

- _Where_ design changes happen. Define different CSS rules for different screen sizes (font sizes, layouts, element visibility, etc.).

- Design changes are _developer-defined_. Full control over styles and breakpoints.

- Think of them as conditional statements: "IF screen is this wide, THEN apply these styles." Multiple media queries possible, each with its own condition and styles.

## Mobile-first

- Prioritizes the mobile experience during website development.

- Not just a separate mobile version; it's about starting the design _with mobile in mind_.

- Progressive enhancement for larger screens.

## Media Queries

A `@media` query in CSS is a powerful tool that lets you apply different styles to a webpage based on certain conditions. Think of it like an "if" statement for styling.

```css
@media (media feature) {
    /* Styles to apply if the condition is met */
}

@media media-type and (media feature) {
    /* Styles to apply if both the media type and condition are met */
}
```

## Media Query Parameters

### Media Type

This specifies what kind of device the styles should apply to.

| <center>Type</center> | <center>Description</center>                                         |
| --------------------- | -------------------------------------------------------------------- |
| `all`                 | Applies to all devices.                                              |
| `screen`              | Applies to computer screens, tablets, and smartphones. (Most common) |
| `print`               | Applies when the page is printed.                                    |

```css
@media print {
    body { font-size: 12pt; }
    nav { display: none; /* Hide navigation when printing */ }
}
```

### Media Features

These are the conditions that must be met for the styles to be applied. They describe characteristics of the device or browser.

| <center>Feature</center> | <center>Description</center>                         |
| ------------------------ | ---------------------------------------------------- |
| `width`                  | Width of the viewport (browser window).              |
| `height`                 | Height of the viewport.                              |
| `orientation`            | Whether the device is in portrait or landscape mode. |
| `device-width`           | Width of the rendering surface of the device.        |
| `device-height`          | Height of the rendering surface of the device.       |
| `resolution`             | Resolution of the device.                            |

```css
@media (min-width: 768px) {
    body { font-size: 16px; }
    nav ul { flex-direction: row; }
}
```

## Logical Operators

- `@media` queries use logical operators.

- They help control when styles are applied.

- You can combine conditions for complex rules.

### `and`

Both conditions _must_ be true for the styles to apply. Like a double-check.

```css
@media (min-width: 768px) and (orientation: landscape) {
	body { font-size: 18px; }
}
```

This means the styles will _only_ apply if the screen is at least 768px wide _AND_ the device is in landscape orientation. Both have to be true.

### comma (`or`)

Acts like an "or". If _either_ condition is true, the styles apply. Like a "this OR that" situation.

```css
@media (max-width: 600px), (orientation: portrait) {
	body { font-size: 14px; }
}
```

This means the styles will apply if the screen is 600px wide or less _OR_ the device is in portrait mode (or both).

### `not`

Inverts a condition. Styles apply if the condition is _not_ true. Like saying "everything EXCEPT this."

```css
@media not (min-width: 1200px) {
	body { background-color: lightblue; }
}
```

These styles will apply to all screens _except_ those that are 1200px wide or more.

Using `not` with a media _type_ (like `screen` or `print`) is deprecated and can lead to unexpected behavior. It's generally best to avoid using `not` with media types.

### `only`

The `only` keyword can be used to prevent older browsers that don't support media queries with certain media types from applying the styles.

```css
@media only screen and (max-width: 600px) { ... }`
```

### Combination

You can combine these operators for more complex logic. Use parentheses `()` to group conditions, just like in regular code.

```css
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape), (max-width: 480px) {
	body { font-size: 16px; }
}
```

This applies styles to tablets in landscape mode _AND_ phones. The `and` conditions are grouped together.
