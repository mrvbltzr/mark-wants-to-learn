
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Understanding Background Images and Images</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--08-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Background Property

The `background-*` properties allow us to manipulate the behavior of an element's background image, color, or gradient.

### `background-color`

Sets the background color.

```css
background-color: red; /* rgb(255, 0, 0) */
```

### `background-image`

Sets a background image.

```css
background-image: url("image.jpg");
```

### `background-repeat`

Controls how the image is repeated.

| <center>Value</center> | <center>Default?</center> | <center>Description</center>                        |
| ---------------------- | ------------------------- | --------------------------------------------------- |
| `repeat`               | <center>✔️</center>       | Image is repeated both horizontally and vertically. |
| `no-repeat`            | <center>❌</center>        | Image is not repeated.                              |
| `repeat-x`             | <center>❌</center>        | Image is repeated only horizontally.                |
| `repeat-y`             | <center>❌</center>        | Image is repeated only vertically.                  |

```css
background-repeat: no-repeat;
```

### `background-position`

Sets the starting position of the background image. Think of it as where we place the wallpaper.

```css
background-position: center; /* top, bottom, left, right */
background-position: 10%;
background-position: 10px 20px;
```

### `background-size`

Scales the image.

| <center>Value</center>      | <center>Default?</center> | <center>Description</center>                                                                                                    |
| --------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `auto`                      | <center>✔️</center>       | The image is displayed at its natural size.                                                                                     |
| `contain`                   | <center>❌</center>        | The image is scaled to fit within the container, preserving its aspect ratio. Some parts of the container might not be covered. |
| `cover`                     | <center>❌</center>        | The image is scaled to cover the entire container, preserving its aspect ratio. Parts of the image might be cropped.            |
| Length or percentage values | <center>❌</center>        | Sets the width and height of the image.                                                                                         |

```css
background-size: cover;
```

### `background-origin`

Determines where the background image's starting point is. _Where does the image begin to be drawn from?_

| <center>Value</center> | <center>Default?</center> | <center>Description</center>                                                                                       |
| ---------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `padding-box`          | <center>✔️</center>       | The background starts from the outer edge of the padding. The background will cover the padding area.              |
| `border-box`           | <center>❌</center>        | The background starts from the outer edge of the border. The background will cover the border area.                |
| `content-box`          | <center>❌</center>        | The background starts from the inner edge of the content box. The background will not cover the padding or border. |

```css
background-origin: border-box;
```

### `background-clip`

Determines how far the background (image and color) extends _within_ the element's box. _Where does the background get cut off?_

| <center>Value</center> | <center>Default?</center> | <center>Description</center>                                                                                                      |
| ---------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `border-box`           | <center>✔️</center>       | The background is clipped to the outer edge of the border. The background will extend to the border edge.                         |
| `padding-box`          | <center>❌</center>        | The background is clipped to the outer edge of the padding. The background will not be visible in the border area.                |
| `content-box`          | <center>❌</center>        | The background is clipped to the inner edge of the content box. The background will not be visible in the padding or border area. |

```css
background-clip: border-box;
```

### `background-attachment`

Makes the image fixed or scroll with the page.

| <center>Value</center> | <center>Default?</center> | <center>Description</center>                                   |
| ---------------------- | ------------------------- | -------------------------------------------------------------- |
| `scroll`               | <center>✔️</center>       | The image scrolls with the content.                            |
| `fixed`                | <center>❌</center>        | The image stays fixed in place, even when the content scrolls. |

```css
background-attachment: fixed;
```

### Shorthand

Shorthand for all background properties.

```css
background: rgb(255, 0, 0) url("image.jpg") no-repeat center;
```

In the order they should appear (though order doesn't strictly matter in most cases):

| <center>Property</center> | <center>Description</center>                                                             | <center>Example</center>                                    |
| ------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `background-color`        | Sets the background color.                                                               | `red`, `rgba(0, 0, 0, 0.5)`, `#f0f0f0`                      |
| `background-image`        | Sets one or more background images.                                                      | `url("image.jpg")`, `linear-gradient(to bottom, red, blue)` |
| `background-position`     | Sets the starting position of the background image(s).                                   | `center`, `top right`, `10px 20px`                          |
| `background-size`         | Sets the size of the background image(s).                                                | `cover`, `contain`, `auto`, `100px 50px`                    |
| `background-repeat`       | Sets how the background image(s) will be repeated.                                       | `repeat`, `no-repeat`, `repeat-x`, `repeat-y`               |
| `background-origin`       | Sets the origin area of the background image.                                            | `padding-box`, `border-box`, `content-box`                  |
| `background-clip`         | Sets whether the background extends beneath the border box, padding box, or content box. | `border-box`, `padding-box`, `content-box`                  |
| `background-attachment`   | Sets whether the background image is fixed or scrolls with the rest of the page.         | `scroll`, `fixed`, `local`                                  |

## Linear Gradient

This function creates a gradient that transitions along a straight line.

```css
linear-gradient([angle | direction], color-stop1, color-stop2, ...);
```

- `angle` or `direction`: Defines the direction of the gradient.

    - `angle`: An angle in degrees (e.g., `0deg` is straight up, `90deg` is right, `180deg` is down, `270deg` is left).

	- `direction`: Keywords like `to top`, `to bottom`, `to right`, `to left`, or combinations like `to top right`.

- `color-stop1`, `color-stop2`, etc.: Colors and their positions along the gradient line. We can specify the color and the position (as a percentage or length). If we don't specify the position, the colors are evenly distributed.

```css
/* Gradient from top to bottom */
linear-gradient(to bottom, red, blue);

/* Gradient at a 45-degree angle */
linear-gradient(45deg, red, blue);

/* Gradient with multiple color stops and positions */
linear-gradient(to right, red 0%, yellow 50%, green 100%);

/* Gradient with transparent stop */
linear-gradient(to right, rgba(255, 0, 0, 0.5), transparent);
```

## Radial Gradient

This function creates a gradient that radiates outwards from a central point.

```css
radial-gradient([shape size at position], color-stop1, color-stop2, ...);
```

| <center>Parameter</center>         | <center>Description</center>                                                                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `shape`                            | The shape of the gradient: `circle` or `ellipse` (default).                                                                                      |
| `size`                             | The size of the gradient. Can be keywords like `closest-side`, `farthest-side`, `closest-corner`, `farthest-corner` or length/percentage values. |
| `position`                         | The center point of the gradient. Can be keywords like `center`, `top`, `bottom`, `left`, `right`, or coordinate values.                         |
| `color-stop1`, `color-stop2`, etc. | Colors and their positions.                                                                                                                      |

```css
/* Circular gradient from the center */
radial-gradient(circle, red, blue);

/* Elliptical gradient from the top left */
radial-gradient(ellipse at top left, red, blue);

/* Gradient with different size and color stops */
radial-gradient(farthest-corner at 20% 50%, red, yellow, green);
```

## Stacking Multiple Background

- Apply multiple background images/gradients to one element. Like layering wallpapers.

- `background-image` (or `background` shorthand) with comma-separated values.

- Stacking order:

	- First listed = bottom (furthest back).
    - Last listed = top (closest to content).

- Individual control: `background-position`, `background-size`, `background-repeat`, etc., can be set individually for each background (comma-separated values).

```css
.element {
    background-image: url("image1.jpg"), url("image2.png"), linear-gradient(to bottom, red, blue);
    background-position: top left, center, left;
    background-size: 50px, auto, auto;
    background-repeat: no-repeat, repeat, no-repeat;
}
```

In this example:

- `image1.jpg` is the bottom layer, positioned at the top left, and has a size of 50px.
- `image2.png` is the middle layer, positioned at the center, and is repeated.
- `linear-gradient` is the top layer, positioned at the left, and is not repeated.

## Filters

Apply visual effects to elements, like blurring, color adjustments, shadows, and more.

### `blur(radius)`

Blurs the element. `radius` defines the blur amount.

```css
.blurred { filter: blur(3px); }
```

### `brightness(amount)`

Adjusts the brightness. `amount` is a number or percentage.

```css
.dimmed { filter: brightness(0.7); }
```

### `contrast(amount)`

Adjusts the contrast. `amount` is a number or percentage.

```css
.high-contrast { filter: contrast(1.1); }
```

### `grayscale(amount)`

Converts to grayscale. `amount` is a number (0-1) or percentage (0%-100%).

```css
.grayscale { filter: grayscale(100%); /* or grayscale(1) */ }
```

### `invert(amount)`

Inverts the colors. `amount` is a number (0-1) or percentage (0%-100%).

```css
.inverted { filter: invert(1); }
```

### `opacity(amount)`

Sets the opacity (transparency). `amount` is a number (0-1) or percentage (0%-100%).

```css
.transparent { filter: opacity(0.5); }
```

### `saturate(amount)`

Adjusts the color saturation. `amount` is a number or percentage.

```css
.more-saturated { filter: saturate(1.5); }
```

### `sepia(amount)`

Applies a sepia tone. `amount` is a number (0-1) or percentage (0%-100%).

```css
.sepia { filter: sepia(0.8); }
```

### `drop-shadow(x-offset y-offset blur-radius color)`

Adds a drop shadow.

```css
.drop-shadow {
	filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
}
```

### `hue-rotate(angle)`

Rotates the hue of the image. `angle` is an angle in degrees.

```css
.hue-rotated {
	filter: hue-rotate(90deg);
}
```

### Combining Filters

Multiple filters can be combined, separated by spaces.

```css
.combined { filter: blur(2px) brightness(0.8) grayscale(50%); }
```

## SVG (Scalable Vector Graphics)

- Written in XML (markup language, like HTML). Viewable in text editors.

- Defined by mathematical equations (not pixels). Scalable without loss of quality (lines stay crisp on zoom).

- Can be interactive: Animations, hover effects, JavaScript integration for user input. Good for interactive maps, charts, etc.

```xml
<svg width="200" height="100">
	<rect x="10" y="10" width="180" height="80" fill="lightblue" stroke="black" stroke-width="2" />
	<circle cx="100" cy="50" r="40" fill="yellow" />
	<line x1="20" y1="20" x2="180" y2="80" stroke="red" stroke-width="3" />
	<text x="50" y="60" font-size="20" fill="green">Hello SVG</text>
</svg>
```

| <center>Element</center> | <center>Description</center>                                                          |
| ------------------------ | ------------------------------------------------------------------------------------- |
| `<svg>`                  | The root element, defines the viewport. `width` and `height` attributes set the size. |
| `<rect>`                 | Rectangle                                                                             |
| `<circle>`               | Circle                                                                                |
| `<line>`                 | Line                                                                                  |
| `<ellipse>`              | Ellipse                                                                               |
| `<polygon>`              | Polygon (a shape with multiple sides)                                                 |
| `<path>`                 | Path (for more complex shapes – you can define curves and lines)                      |

| <center>Attribute</center> | <center>Description</center>  |
| -------------------------- | ----------------------------- |
| `fill`                     | Color inside the shape.       |
| `stroke`                   | Color of the outline.         |
| `stroke-width`             | Thickness of the outline.     |
| `x`                        | X-coordinate for positioning. |
| `y`                        | Y-coordinate for positioning. |
| `width`                    | Width.                        |
| `height`                   | Height.                       |
| `r`                        | Radius (for circles).         |
