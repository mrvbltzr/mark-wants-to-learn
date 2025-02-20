
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Sizes and Units</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--08-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [CSS Units](#css-units)
	- [Why do we need them?](#why-do-we-need-them)
	- [Which properties can we use the units?](#which-properties-can-we-use-the-units)
- [Types of Units](#types-of-units)
	- [Absolute Units](#absolute-units)
	- [Relative Units](#relative-units)
- [Rules To Remember](#rules-to-remember)
- [Minimum and Maximum Width/Height](#minimum-and-maximum-widthheight)
	- [`min-width` / `min-height`](#min-width--min-height)
	- [`max-width` / `max-height`](#max-width--max-height)
- [em vs. rem](#em-vs-rem)
	- [Relative to Parent (`em`)](#relative-to-parent-em)
	- [Relative to Root (`rem`)](#relative-to-root-rem)
- [Viewport Units](#viewport-units)
- [Recommended Unit Per Property](#recommended-unit-per-property)
- [Using `auto` To Center Elements](#using-auto-to-center-elements)

## CSS Units

- CSS units are like the measuring sticks in the world of web design. They tell the browser how big or small something should be.

- Think of them as the "size" and "position" indicators for your HTML elements.

- They tell the browser how big or small something should be, whether it's the font size, the width of a box, or the space around an element.

### Why do we need them?

- Without units, the browser wouldn't know how to interpret our size values. Is "10" ten pixels? Ten ems? Ten what? Units make it clear.

- They give us control over how our web page looks on different screens and devices.

### Which properties can we use the units?

- font-size
- padding / margin
- border
- width / height
- top / bottom / left / right

## Types of Units

### Absolute Units

- These are fixed sizes, like centimeters or inches in the real world.

| <center>Name</center>            | <center>Unit</center>             | <center>Description</center>              |
| -------------------------------- | --------------------------------- | ----------------------------------------- |
| pixels                           | <center>`px`</center>             | The most common unit for screen displays. |
| points                           | <center>`pt`</center>             | Used mainly for print.                    |
| centimeters, millimeters, inches | <center>`cm`, `mm`, `in`</center> | Less common for web.                      |

### Relative Units

- These sizes change depending on something else, like the size of the parent element or the browser window.

| <center>Name</center> | <center>Unit</center>       | <center>Description</center>                                |
| --------------------- | --------------------------- | ----------------------------------------------------------- |
| percent               | <center>`%`</center>        | Relative to the parent element's size.                      |
| em                    | <center>`em`</center>       | Relative to the current font size.                          |
| root em               | <center>`rem`</center>      | Relative to the root (html) element's font size.            |
| viewport width/height | <center>`vw`, `vh`</center> | Relative to the viewport (browser window) width and height. |

## Rules To Remember

1. An element with a `fixed` position and percentage unit uses the viewport as its containing block.

Imagine your webpage is a big coloring book, and the screen of your computer is like a window into that book.

A `fixed` element is like a sticker you put on the window. It stays stuck there, even if you turn the page (scroll).

If you say the sticker's size should be `50%`, it means it will take up 50% of the _window's_ size, not the page's size. So, even if the coloring book page is huge, the sticker only cares about how big the window is.

2. An element with an `absolute` position and percentage unit uses the nearest positioned ancestor (not `position: static`) as its containing block.

Imagine you have a sticker (the absolutely positioned element) and you want to stick it on a wall. If the wall is plain (like `position: static`), the sticker just floats anywhere. But if you put a picture frame on the wall (a positioned ancestor), the sticker sticks _inside_ the frame. The frame becomes the sticker's "home." The sticker's size (using percentages) will be based on the size of the frame, not the whole wall.

1. An element with a `static` or `relative` position and percentage unit uses the closest block-level ancestor element as its containing block, without considering the padding.

Imagine you have a box (your element). If you put that box inside another box (its parent), and the parent box has a specific height, your box can be told to be "half as tall" (50% height).

But, if the parent box's height changes depending on what's _inside_ it, then telling your box to be "half as tall" doesn't make sense, because the parent's height keeps changing!

So, for your box to know how tall "half" is, the parent box needs to have a set height, and that height is measured from the _inside edges_ of the parent, ignoring any "cushioning" (padding) around the edges.

## Minimum and Maximum Width/Height

### `min-width` / `min-height`

- Sets the _smallest_ size an element can be. A "floor" for element dimensions.

- Prevents elements from becoming too small/squished.

```css
button {
    min-width: 80px; /* Button will never be narrower than 80 pixels */
}

.sidebar {
    min-height: 250px; /* Sidebar will never be taller than 250 pixels */
}
```

### `max-width` / `max-height`

- Sets the _largest_ size an element can be. A "ceiling" for element dimensions.

- Prevents elements from becoming too large and breaking layout.

```css
img {
    max-height: 500px; /* Image will never be taller than 500 pixels */
}

.container {
    max-width: 960px; /* Container will never be wider than 960 pixels */
    margin: 0 auto; /* Center the container on the page */
}
```

## em vs. rem

Both `em` and `rem` are **relative units** in CSS, but they behave differently when it comes to scaling elements.

### Relative to Parent (`em`)

- `em` is based on the **font-size of the parent element**.

- It **multiplies** the parent's font size.

- Useful for **scaling elements proportionally** within a container.

```css
.parent {
    font-size: 20px;
}

.child {
    font-size: 1.5em; /* 1.5 × 20px = 30px */
}
```

### Relative to Root (`rem`)

- `rem` is based on the **root element’s (`html`) font size**, not the parent.

- More predictable, great for consistent typography across the site.

- No matter where `rem` is used, it's always based on the `html` font size.

```css
html {
    font-size: 16px;
}

h1 {
    font-size: 2rem; /* 2 × 16px = 32px */
}
```

## Viewport Units

- `vh`: Stands for "viewport height." It's a percentage of the _total height_ of the browser window (or viewport). So, `100vh` is 100% of the viewport height, `50vh` is 50%, and so on.

- `vw`: Stands for "viewport width." It's a percentage of the _total width_ of the browser window. `100vw` is 100% of the viewport width, `25vw` is 25%, etc.

They're great for creating elements that **scale with the browser window size**. This makes your website look good on different screens, from phones to desktops.

```css
.sidebar {
    width: 20vw; /* Takes up 20% of the viewport width */
    height: 100vh; /* Takes up the entire viewport height */
}
```

## Recommended Unit Per Property

| <center>Property</center>        | <center>Unit</center>             |
| -------------------------------- | --------------------------------- |
| `font-size` (root element)       | `%` or not set                    |
| `font-size` (other elements)     | `rem` (or `em` for children only) |
| `padding` & `margin`             | `rem`                             |
| `border`                         | `px`                              |
| `width` & `height`               | `%`, `vw`, `vh`                   |
| `top`, `bottom`, `left`, `right` | `%`                               |

## Using `auto` To Center Elements

`margin: auto;` only works for _block-level_ elements that have a defined width. Inline elements won't center this way.

- **Horizontal centering:** `margin: 0 auto;` (or just `margin: auto;`) centers horizontally. The `0` is for top/bottom margins (can be anything). `auto` on left/right margins makes them equal, thus centering.

- **Vertical centering:** `margin: auto;` _alone_ does _not_ vertically center. Vertical centering is trickier. Usually involves Flexbox or Grid. `margin: auto` only works vertically if the parent has a defined height _and_ the element being centered has `position: absolute` or `fixed`.

**Why it works?** `auto` margins try to take up _available_ space. Horizontally, if the element has a fixed width, the remaining space on the left and right is split equally by the `auto` margins, centering it.
