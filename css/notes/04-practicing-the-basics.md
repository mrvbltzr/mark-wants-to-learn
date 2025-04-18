
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Practicing the Basics</h1>
🎉 <img src="https://img.shields.io/badge/Finished-2025--02--07-white?labelColor=2A6041&color=B6EFD4" alt="Finished" /> 🎂
<br /><br />
</div>

## CSS File Order

- File order _matters_ because of the cascade.

- Cascade = how CSS decides which styles win when multiple rules target one element.

- Like a waterfall: later styles override earlier styles.

- Specificity also plays a role (more specific rules override less specific ones), but file order is important when specificity is the same.

- So, if you define a style in `style1.css` and then redefine it in `style2.css` (and both are linked to your HTML), the version in `style2.css` wins.

## Box Shadow

- Adds a shadow effect to an element.

| <center>Parameter</center> | <center>Optional?</center> | <center>Description</center>                                                                                                             |
| -------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `offset-x`                 | <center>❌</center>         | Horizontal offset of the shadow (positive values move the shadow to the right, negative to the left).                                    |
| `offset-y`                 | <center>❌</center>         | Vertical offset of the shadow (positive values move the shadow down, negative up).                                                       |
| `blur-radius`              | <center>❌</center>         | The amount of blur applied to the shadow. Higher values create a more blurred shadow.                                                    |
| `spread-radius`            | <center>❌</center>         | How much the shadow should expand or contract. Positive values make the shadow larger than the element, negative values make it smaller. |
| `color`                    | <center>❌</center>         | The color of the shadow.                                                                                                                 |
| `inset`                    | <center>✔️</center>        | Makes the shadow an inner shadow (inside the element).                                                                                   |

```css
.item-1 {
    /* Example: x-offset, y-offset, blur, spread, color */
	box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);
	/* Example: inset shadow */
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) inset;
}
```

## Inherit Fonts

- Super useful for consistent typography.

- Makes an element inherit _all_ font properties from its parent.

- Saves repeating styles.

```css
.child-element {
    font: inherit; /* Inherits all font properties from its parent */
}
```

## Cursor

- Controls the mouse pointer's appearance.

- Important for UX.

| <center>Value</center> | <center>Description</center>                                      |
| ---------------------- | ----------------------------------------------------------------- |
| `pointer`              | Hand cursor, often used for links.                                |
| `default`              | Standard arrow cursor.                                            |
| `text`                 | Used for text input fields.                                       |
| `wait`                 | Spinning wheel or hourglass, indicating that the page is loading. |
| `crosshair`            | Often used in image editing tools.                                |
| `grab`, `grabbing`     | For indicating draggable elements.                                |

```css
.clickable-element {
    cursor: pointer;
}

.loading-element {
    cursor: wait;
}
```

## Auto Margin

- The "magic trick" for horizontal centering.

- _Only_ works on _block-level_ elements.

- Element must have a _defined width_.

- `margin-left: auto;` and `margin-right: auto;` (or just `margin: 0 auto;` or `margin: auto;`) distribute remaining space equally.

- Vertical centering with `margin: auto` is more complex and usually requires Flexbox or Grid.

```css
.centered-element {
    width: 300px;   /* Essential for centering with margin: auto */
    margin: 0 auto; /* Shorthand for top/bottom 0, left/right auto */
}
```

## Border Radius

- Rounds the corners of an element's border.

- Softens designs, creates non-rectangular shapes.

```css
.rounded-corners {
    border-radius: 10px; /* Rounds all four corners by 10 pixels */
    border: 2px solid blue; /* So we can see the effect */
}

.different-corners {
    border-radius: 10px 20px 30px 40px; /* Each corner has a different radius */
    border: 2px solid red; /* So we can see the effect */
}

.pill-shape {
    border-radius: 50px; /* Creates a pill or capsule shape if the value is large enough */
    border: 2px solid green; /* So we can see the effect */
}

.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%; /* Creates a perfect circle */
    background-color: yellow;
}
```

## List Style

- Shorthand for styling list items (`<li>`).

- Applies to ordered (`<ol>`) and unordered (`<ul>`) lists.

| <center>Property</center> | <center>Description</center>                                           |
| ------------------------- | ---------------------------------------------------------------------- |
| `list-style-type`         | Defines the marker type (bullet, number, letter, Roman numeral, none). |
| `list-style-position`     | Controls marker placement (inside or outside the content box).         |
| `list-style-image`        | Lets you use an image as a marker.                                     |
| `list-style`              | Shorthand property for setting all list styles at once.                |
| `list-style: none;`       | Removes list markers completely.                                       |

```css
ul {
	list-style-type: square; /* Bullet style: disc, circle, square, none */
	list-style-position: outside; /* Position of the marker: inside, outside */
	padding-left: 20px; /* Indentation of the list items */
}
```

## Float

- Floats used for side-by-side element placement.

- They are removed from document flow! This can lead to container collapse. Need to be mindful of this.

```css
.left-floated-element {
    float: left; /* Element floats to the left */
    float: right;
}
```

## RGB and RGBA

### `rgb`

- RGB values specify color intensity.

- Three components: Red, Green, Blue.

- Values can be integers (0-255) or percentages (0%-100%).

```css
.example-element {
    background-color: rgb(255, 0, 0); /* Pure red */
    color: rgb(0, 255, 0); /* Pure green */
    border-color: rgb(0, 0, 255); /* Pure blue */
    background-color: rgb(50%, 20%, 80%); /* Percentages also work */
}
```

### `rgba`

- RGBA extends RGB.

- Adds _alpha_ value for opacity/transparency control.

- Alpha value range: 0 (fully transparent) to 1 (fully opaque).

```css
.example-element {
    background-color: rgba(255, 0, 0, 0.5); /* Red transparency */
}
```

## Focus Pseudo-class

- Styles element when it's in focus (user interaction).

- Examples: Text input click, button tab.

- Provides visual feedback on active element.

```css
button:focus { background-color: lightgray; /* Change the background color on focus */ }
```
