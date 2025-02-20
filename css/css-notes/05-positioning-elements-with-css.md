
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Positioning Elements with CSS
</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--07-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Document Flow](#document-flow)
- [Viewport](#viewport)
- [Position](#position)
- [Index](#index)
- [Overflow](#overflow)
	- [`overflow-x` and `overflow-y`](#overflow-x-and-overflow-y)

## Document Flow

- The document flow is the default way elements are laid out.

- Block-level elements stack vertically, inline elements flow horizontally.

- Understanding the difference between block and inline elements is crucial.

- The box model affects spacing and sizing within the document flow.

- Other layout methods modify or remove elements from the normal flow. You must first understand the normal flow to use them effectively.

## Viewport

- Visible area of a web page on a device. Like a "window" to the page.

- Key for responsive design: Viewport size changes depending on device (desktop, tablet, phone).

- On a desktop: the viewport is typically the browser window.

- On a mobile: device screen area used by the browser.

- `<meta>` tag with `viewport` property controls scaling and how the page fits the viewport due to varying screen sizes.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- `width=device-width`: This sets the width of the viewport to the width of the device's screen. This is essential for mobile devices so that the page doesn't initially load zoomed out.  

- `initial-scale=1.0`: This sets the initial zoom level when the page loads. `1.0` means no initial zoom.

## Position

- Controls element placement within its container (or document).

- Determines how element is "stuck" to a spot.

- Think of it as how you "stick" an element to a certain spot.

| <center>Value</center> | <center>Default?</center> | <center>Description</center>                                                                                                                                 |
| ---------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `static`               | <center>✔️</center>       | No special positioning; follows the normal document flow.                                                                                                    |
| `relative`             | <center>❌</center>        | Positioned relative to its normal position. You can use `top`, `right`, `bottom`, and `left` to nudge it around. It still takes up space in the normal flow. |
| `absolute`             | <center>❌</center>        | Positioned relative to its nearest positioned ancestor (or the `<html>` element if none exists). It's taken out of the normal flow.                          |
| `fixed`                | <center>❌</center>        | Positioned relative to the viewport (browser window). It stays in the same place even when you scroll.                                                       |
| `sticky`               | <center>❌</center>        | A hybrid of `relative` and `fixed`. It initially acts like `relative`, but becomes `fixed` when it scrolls to a specific point.                              |

```css
div {
	position: sticky;
}
```

## Index

- Controls the stacking order of positioned elements (elements with a position other than `static`).

- Higher `z-index` value = on top.

- Lower `z-index` value = below.

- Can be positive, negative, or zero.

- Only works on positioned elements.

```css
iframe {
	z-index: 999;
}
```

## Overflow

- Controls what happens when content is too big to fit inside its container element.

| <center>Value</center> | <center>Default?</center> | <center>Description</center>                                                               |
| ---------------------- | ------------------------- | ------------------------------------------------------------------------------------------ |
| `visible`              | <center>✔️</center>       | Content spills outside the container. The overflowing content is visible.                  |
| `hidden`               | <center>❌</center>        | Content outside the container is clipped (hidden). The overflowing content is not visible. |
| `scroll`               | <center>❌</center>        | Adds scrollbars to the container, even if the content doesn't overflow.                    |
| `auto`                 | <center>❌</center>        | Adds scrollbars only when the content overflows.                                           |

```css
html {
	overflow: hidden;
}
```

### `overflow-x` and `overflow-y`

- These properties let you control horizontal and vertical overflow separately.

- For example, `overflow-x: hidden; overflow-y: scroll;` would hide horizontal overflow and add a vertical scrollbar if needed.
