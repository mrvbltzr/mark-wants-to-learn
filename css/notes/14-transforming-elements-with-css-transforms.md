
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Transforming Elements With CSS Transforms</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--17-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Transform

- The `transform` property changes how an element _looks_ without changing how other elements are positioned around it (no reflow).

- Like a filter on an image - changes the view, not the actual image.

- Can do scaling, rotation, skewing, and translating. Basically, lots of visual effects.

- Hardware-accelerated and keeps the element in document flow.

- Shorthand of `transform-*`.

```css
/* Example 1: Scaling */
.scaled-element {
    transform: scale(1.5); /* Makes the element 1.5 times larger */
}

/* Example 2: Rotating */
.rotated-element {
    transform: rotate(45deg); /* Rotates the element 45 degrees clockwise */
}

/* Example 3: Skewing */
.skewed-element {
    transform: skew(15deg, 10deg); /* Skews the element 15 degrees along the x-axis and 10 degrees along the y-axis */
}

/* Example 4: Translating */
.translated-element {
    transform: translate(50px, -20px); /* Moves the element 50 pixels to the right and 20 pixels up */
}

/* Example 5: Combining transformations */
.combined-transform {
    transform: rotate(30deg) scale(1.2) translate(20px, 0); /* Combines rotation, scaling, and translation */
}

/* Example 6: transform-origin */
.transform-origin-example {
    transform-origin: top left; /* Changes the origin point of the transform */
    transform: rotate(45deg);
}

/* Example 7: Perspective for 3D transforms */
.perspective-example {
    perspective: 800px; /* Creates a 3D space */
    transform: rotateX(45deg); /* Rotates along the X-axis in 3D space */
}
```

Imagine you have a photograph printed on a flexible sheet of plastic. `transform` is like physically manipulating that plastic sheet:

- **`scale()`:** You can stretch or shrink the plastic sheet, making the photo bigger or smaller.

- **`rotate()`:** You can twist the plastic sheet, rotating the photo.

- **`skew()`:** You can push one side of the plastic sheet, distorting the photo like it's leaning.

- **`translate()`:** You can slide the plastic sheet around, moving the photo's position.

- **`perspective()`:** Imagine you're holding the photo at an angle, creating a sense of depth and making it look 3D. `perspective` in CSS is similar, creating a 3D rendering context.

- **`transform-origin`:** This is like pinning a point on the plastic sheet. When you rotate or scale, it rotates or scales _around_ that pinned point.

## Transform Functions

### `rotate`

- Spins an element around a point (origin). Like turning a dial.

- Specify the rotation angle.

- Positive angle = clockwise rotation.

- **Analogy:** Imagine a clock's hand. `rotate(90deg)` would turn the hand 90 degrees clockwise, pointing it from 12 to 3. `rotate(-45deg)` would turn it 45 degrees counter-clockwise.

#### `rotate3d`

- Rotates an element in 3D space.

- `x`: x-coordinate of rotation axis vector.

- `y`: y-coordinate of rotation axis vector.

- `z`: z-coordinate of rotation axis vector.

- `angle`: Amount of rotation (e.g., 45deg, 0.5turn).

```css
.rotate-example:hover {
    transform: rotate(45deg); /* Rotates 45 degrees clockwise on hover */
}
.rotate-example-2 {
    width: 100px;
    height: 100px;
    background-color: lightcoral;
    transform: rotate(-30deg); /* Rotates 30 degrees counter-clockwise */
}

/* rotate3d() Examples */

/* Rotate 45 degrees around the Z axis */
.rotate-z {
    transform: rotate3d(0, 0, 1, 45deg);
}

/* Rotate 30 degrees around the X axis */
.rotate-x {
    transform: rotate3d(1, 0, 0, 30deg);
}

/* Rotate 60 degrees around the Y axis */
.rotate-y {
    transform: rotate3d(0, 1, 0, 60deg);
}

/* Rotate 45 degrees around a vector defined by x=1, y=1, z=0 */
.rotate-xy {
    transform: rotate3d(1, 1, 0, 45deg);
}

/* Rotate 90 degrees around a vector defined by x=1, y=1, z=1 */
.rotate-xyz {
    transform: rotate3d(1, 1, 1, 90deg);
}

/* Example with perspective to enhance 3D effect */
.perspective-rotate {
    perspective: 800px; /* Creates the 3D space */
    transform: rotate3d(1, 1, 0, 45deg);
}
```

### `translate`

- Moves an element in horizontal and/or vertical shift.

- Relative to its _normal_ position.

- Doesn't affect other elements' positions. (Like sliding a picture - other pics stay put.)

- `translate()` repositions an element _without_ affecting other elements' layout. It's like moving the sticker without disturbing the other stickers on the page. No pushing or shoving other elements out of the way.

```css
/* Translate along the x-axis (horizontal) by 50 pixels */
.translateX {
    transform: translate(50px, 0);
}

/* Translate along the y-axis (vertical) by 20 pixels */
.translateY {
    transform: translate(0, 20px);
}

/* Translate along both x and y axes */
.translateXY {
    transform: translate(25px, -10px); /* Positive x moves right, negative y moves up */
}

/* Translate using percentages (relative to the element's own dimensions) */
.translatePercent {
    transform: translate(-50%, -25%); /* Moves the element 50% left and 25% up */
}

/* Using translate3d for hardware acceleration (often smoother animations) */
.translate3D {
    transform: translate3d(10px, 20px, 0); /* The z-value is often 0 for 2D translations */
}

/* Combining translate with other transforms */
.rotate-and-translate {
  transform: rotate(45deg) translate(20px, 0); /* Rotates first, then translates */
}
```

#### `translateX`

- `translateX(tx)`: Moves the element `tx` units horizontally.

#### `translateY`

- `translateY(ty)`: Moves the element `ty` units vertically.

#### `translateZ`

- `translateZ(tz)`: Moves an element along the z-axis (towards or away from the viewer).

- **Important:** Needs `perspective` property on the element or parent to work. `perspective` creates the 3D space needed for `translateZ` to be visible.

### `skew`

- Distorts an element (tilts it).

- Axes: x, y, or both.

- Visual: Imagine pushing a box from the side so it leans.

- Similar to italics, but works on _any_ element, not just text.

```css
/* Skew along the x-axis by 20 degrees */
.skew-x {
    transform: skewX(20deg);
}

/* Skew along the y-axis by -10 degrees */
.skew-y {
    transform: skewY(-10deg);
}

/* Skew along both axes */
.skew-both {
    transform: skew(20deg, -10deg); /* x-axis 20deg, y-axis -10deg */
}

/* Skew with different units (degrees, radians, turns) */
.skew-radians {
    transform: skewX(0.349rad); /* Approximately 20 degrees */
}

.skew-turns {
    transform: skewX(0.0556turn); /* Approximately 20 degrees */
}
```

**Analogy:**

Imagine a rectangular door. `skewX()` is like pushing the top of the door to the left or right, while keeping the bottom hinge fixed. `skewY()` is like pushing the side of the door up or down, while keeping the opposite side fixed. `skew()` combines both of these actions. The angle you specify determines how much the door is "pushed" or tilted. A positive angle skews in one direction, while a negative angle skews in the opposite direction.

#### `skewX`

- `skewX(ax)`: Skews the element by `ax` degrees along the x-axis.

#### `skewY`

- `skewY(ay)`: Skews the element by `ay` degrees along the y-axis.

### `scale`

- Resizes an element (up, down, flip).

- Takes 1 or 2 values:

    - **1 Value:** Scales _both_ width & height equally.

        - `1` = original size
        - `> 1` = bigger
        - `< 1` = smaller

    - **2 Values:** Scales width & height _separately_.

        - 1st value: width (x-axis)
        - 2nd value: height (y-axis)

```css
.scaled-up {
    transform: scale(1.5); /* Scales both x and y by 1.5 (150%) */
}

.scaled-down {
    transform: scale(0.5); /* Scales both x and y by 0.5 (50%) */
}

.stretched {
    transform: scale(2, 0.5); /* Scales x by 2 and y by 0.5 */
}

.flipped-horizontal {
    transform: scale(-1, 1); /* Flips horizontally */
}

.flipped-vertical {
    transform: scale(1, -1); /* Flips vertically */
}

.flipped-both {
    transform: scale(-1, -1); /* Flips both horizontally and vertically */
}
```

#### `scaleX`

- `scaleX(sx)`: Scales the element by `sx` horizontally.

#### `scaleY`

- `scaleY(sy)`: Scales the element by `sy` vertically.

## Perspective

- Makes 3D stuff look 3D! Gives the illusion of depth.

- Sets how far away the "viewer" is. Think of it like your eye looking at a scene.

- Things closer look bigger, things further away look smaller. Just like real life!

- Without perspective, 3D transforms look flat and fake. Perspective makes them realistic.

- **Analogy:** Holding a postcard. Close up = big. Far away = small. Perspective in CSS is the same idea.

### `perspective-origin`

- Sets the origin for transform: perspective(). Basically, where the "eye" is.

- Affects how intense the 3D looks.

```css
.container {
    width: 300px;
    height: 200px;
    perspective: 800px; /* The "distance" of the viewer */
    perspective-origin: center; /* Where the viewer is positioned */
}

.box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    transform: rotateY(45deg) translateZ(50px); /* Rotated and pushed "forward" */
}

.no-perspective {
    width: 300px;
    height: 200px;
}

.box-no-perspective {
    width: 100px;
    height: 100px;
    background-color: lightcoral;
    transform: rotateY(45deg) translateZ(50px); /* Same transformation */
}

/* Example with different perspective-origin */
.container-left {
    perspective-origin: left;
    perspective: 800px;
    width: 300px;
    height: 200px;
}

.box-left {
    width: 100px;
    height: 100px;
    background-color: lightgreen;
    transform: rotateY(45deg) translateZ(50px);
}

/* Example with perspective applied to the element itself */
.box-perspective-self {
    width: 100px;
    height: 100px;
    background-color: lightyellow;
    transform-style: preserve-3d; /* Important for nested 3D elements */
    transform: perspective(800px) rotateY(45deg) translateZ(50px);
}
```

## Transform Style

- Deals with how nested transformed elements look in 3D space.

- Controls if kids inherit 3D perspective from parents.

| <center>Value</center> | <center>Description</center>                                                                                                           | <center>Default?</center> |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `flat`                 | Kids are flattened onto parent's plane. Even if parent has 3D transform, kids don't "get" the 3D. They act like the parent is just 2D. | <center>✔️</center>       |
| `preserve-3d`          | Kids keep their 3D positions and are part of parent's 3D space. Needed for real 3D effects.                                            |                           |

```css
.container {
    width: 200px;
    height: 200px;
    perspective: 800px; /* Creates the 3D perspective */
    background-color: lightgray;
    position: relative; /* Needed for positioning children */
}

.flat-example {
    transform-style: flat;
}

.preserve-3d-example {
    transform-style: preserve-3d;
}
```

## Backface Visibility

- Controls if the _back_ of an element is visible

- Only matters for 3D rotated elements

- Default: `visible`

- Available values: `visible`, `hidden`

- **Analogy:** Playing card - can see both front & back. `backface-visibility` lets you choose if you see the back.

```css
.card {
    width: 200px;
    height: 300px;
    position: relative;
    perspective: 1000px; /* Creates the 3D space */
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Initially hide both sides */
    transition: transform 0.5s ease; /* For smooth flipping */
}

.card-front {
    background-color: lightblue;
    transform: rotateY(0deg); /* Front is initially visible */
}

.card-back {
    background-color: lightcoral;
    transform: rotateY(180deg); /* Back is initially hidden */
}

.card:hover .card-front {
    transform: rotateY(-180deg); /* Rotate front out of view */
}

.card:hover .card-back {
    transform: rotateY(0deg); /* Rotate back into view */
}

/* Example with 'visible' - you'd rarely use this alone */
.visible-back {
    backface-visibility: visible;
}
```
