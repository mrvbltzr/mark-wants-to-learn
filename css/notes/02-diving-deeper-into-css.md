
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Diving Deeper Into CSS</h1>
🎉 <img src="https://img.shields.io/badge/Finished-2025--02--07-white?labelColor=2A6041&color=B6EFD4" alt="Finished" /> 🎂
<br /><br />
</div>

## CSS Box Model

- Each HTML element is like a box.

- This box takes up space on the webpage.

- The CSS box model describes how much space.

**The box has different layers:**

1. **Content:** This is the actual content of the element, like text or an image. Its size is determined by the `width` and `height` properties.

2. **Padding:** This is the space _inside_ the element, between the content and the border. Think of it as the cushioning around the content. We control it with `padding`.

3. **Border:** This is the line that goes around the padding and content. It's controlled by the `border` property.

4. **Margin:** This is the space _outside_ the element, between the border and other elements. Think of it as the space between boxes. We control it with `margin`.

So, the total width of an element is calculated like this: `Total Width = Margin + Border + Padding + Content Width`. The same logic applies to the total height. Understanding the box model is crucial for controlling the layout and spacing of elements on our web pages.

<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/CSS-Box-Model.png" width="60%" />

## Margin Collapsing

- Vertical margins of adjacent elements combine.

- "Adjacent" usually means block-level elements stacked vertically.

- Margins _don't_ add up.

- Browser takes the _largest_ margin value.

- Can be useful, can be tricky! (Sometimes you need to work around it.)

<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*irihT0essp7Rs2cqtHxyQw.png" width="60%">

## Shorthand Properties

- Sets multiple related properties at once.

- Makes code shorter and more readable.

- Careful! Shorthand can override _all_ related properties, even if you don't explicitly set them all in the shorthand. So, be mindful of what you're not including.

Instead of:

```css
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;
```

We can write:

```css
margin: 10px 20px; /* Top/bottom 10px, left/right 20px */
/* or */
margin: 10px; /* All margins 10px */
```

## Height & Width

- Control element's _content area_ size. (Not padding, border, or margin.)

- Think of it as setting the dimensions of a box. We can give them specific values (like `100px` or `50%`) or let the browser figure it out (`auto`). They affect how much space our element takes up on the page.

```html
<style>
	.box1 {
		width: 200px;
		height: 100px;
		background-color: lightblue;
	}
	
	.box2 {
		width: 50%; /* 50% of its parent's width */
		height: auto; /* Height adjusts to content */
		background-color: lightcoral;
	}
	
	.container {
		width: 400px; /* Parent container for box2 */
	}
</style>

<body>
	<div class="box1">
		This box has a fixed width of 200px and height of 100px.
	</div>
	
	<div class="container">
		  <div class="box2">
			This box has a width of 50% of its parent container and a height that adjusts to its content.  Because the container is 400px wide, this box will be 200px wide.  If we add more text here, the height of this box will increase.
		  </div>
	</div>
</body>
```

## Box Sizing

- Changes how `width` and `height` are calculated.

- Think of it like this: You have a picture frame, and you want to put a picture inside. Box-sizing decides how you measure the frame.

| <center>Box Sizing</center> | <center>Description (Picture Frame Analogy)</center>                                                                                                                    |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content-box`               | Measure only the picture. Frame adds to the total size. (Picture 100px + Frame 10px each side = Total 120px)                                                            |
| `border-box`                | Measure the entire framed picture. Picture size adjusts to fit the frame. (Total 120px, Picture might be 100px to fit within the frame). Easier for total size control. |

## Display

- Controls _how_ an element is displayed.

- Defines the type of "box" it generates.

- _Crucial_ for layout.

| <center>Display Value</center> | <center>Description</center>                                                                                                                        | <center>Analogy</center>                                                 | <center>Examples</center>        |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------- |
| `block`                        | The element takes up the full width available and forces a line break after it.                                                                     | Brick. Stacks vertically.                                                | `<div>`, `<p>`, `<h1>` to `<h6>` |
| `inline`                       | The element only takes up as much width as its content requires and does _not_ force a line break.                                                  | Letters in a word. Flow side by side.                                    | `<span>`, `<a>`, `<img>`         |
| `inline-block`                 | A combination of `inline` and `block`. The element flows like an `inline` element, but you can set its `width` and `height` like a `block` element. | Small sticky note. Sits next to other notes but can have a defined size. |                                  |
| `none`                         | The element is completely removed from the page layout. It's not visible, and it doesn't take up any space.                                         | Hiding an element completely.                                            |                                  |
| `flex`                         | Enables flexbox layout.                                                                                                                             |                                                                          |                                  |
| `grid`                         | Enables grid layout.                                                                                                                                |                                                                          |                                  |

There are other values, but these are the most frequently used. The `display` property is essential for controlling how elements behave within the flow of a web page.

## `display: none` vs. `visibility: hidden`

Both `display: none` and `visibility: hidden` make an element disappear from the page, but they do it in different ways:

| <center>Property</center> | <center>Description</center>                                                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `display: none;`          | Completely removes the element from the document flow. It takes up no space, and other elements flow around as if it weren't there. |
| `visibility: hidden;`     | Makes the element invisible, but it _still_ occupies space in the document flow.                                                    |

You can't see it, but other elements respect its dimensions and position. Think of it as making the element transparent—you can't see it, but it's still there, blocking things.  

## Text Decoration

- Adds (or removes) decorations to text.

- Like highlights or markings.

| <center>Value</center> | <center>Description</center>                   |
| ---------------------- | ---------------------------------------------- |
| `underline`            | Adds a line under the text.                    |
| `overline`             | Adds a line over the text.                     |
| `line-through`         | Adds a line through the text.                  |
| `none`                 | Removes any existing text decoration.          |
| `initial`              | Sets the property to its default value.        |
| `inherit`              | Inherits the property from its parent element. |

- Can also combine these values, for example, `text-decoration: underline overline;` would add both an underline and an overline.

- Can also set the `text-decoration-color`, `text-decoration-style` (solid, double, dotted, dashed, wavy), and `text-decoration-thickness` properties to further customize the decoration.

## Vertical Align

- Controls vertical alignment of inline/inline-block elements.

- Relative to parent's baseline.

- Think of it like aligning text/images on the same line.

| <center>Value</center>     | <center>Description</center>                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `baseline`                 | Aligns the element's baseline with the parent's baseline. This is the default.                                     |
| `top`                      | Aligns the top of the element with the tallest element on the line.                                                |
| `middle`                   | Aligns the middle of the element with the middle of the tallest element on the line.                               |
| `bottom`                   | Aligns the bottom of the element with the lowest element on the line.                                              |
| `text-top`                 | Aligns the top of the element with the top of the tallest text in the line.                                        |
| `text-bottom`              | Aligns the bottom of the element with the bottom of the tallest text in the line.                                  |
| `sub`                      | Aligns the element as a subscript.                                                                                 |
| `super`                    | Aligns the element as a superscript.                                                                               |
| Percentage or length value | Allows for fine-grained control, shifting the element up or down by the specified amount relative to the baseline. |

❗ It's important to remember that `vertical-align` only works on **inline**, **inline-block**, and **table-cell** elements. It doesn't affect block-level elements.

## Pseudo-classes

- Style elements based on _state_ or _position_. (Not just tag/class.)

- Special selectors for specific circumstances.

- Start with a colon `:`.

- Useful for dynamic styling.

| <center>Selector</center> | <center>Description</center>                                                                       |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| `:hover`                  | Styles an element when the mouse cursor is over it.                                                |
| `:active`                 | Styles an element while it's being activated (e.g., clicked).                                      |
| `:focus`                  | Styles an element when it has focus (e.g., a form input field that's been clicked).                |
| `:link`                   | Styles links that haven't been visited yet.                                                        |
| `:visited`                | Styles links that have already been visited.                                                       |
| `:nth-child(n)`           | Selects elements based on their position among their siblings.                                     |
| `:first-child`            | Selects the first child element of its parent.                                                     |
| `:last-child`             | Selects the last child element of its parent.                                                      |
| `:nth-of-type(n)`         | Selects elements of a specific type based on their position among their siblings of the same type. |
| `:first-of-type`          | Selects the first element of a specific type among its siblings.                                   |
| `:last-of-type`           | Selects the last element of a specific type among its siblings.                                    |

## Pseudo-elements

- Style _specific parts_ of an element. (Not the whole element.)

- Like creating new, virtual elements to style.

- Start with _two_ colons `::`.

- Often used for decorative effects, adding generated content, and styling specific portions of form elements.

Here are some common examples:

| <center>Pseudo-element</center> | <center>Description</center>                                                            |
| ------------------------------- | --------------------------------------------------------------------------------------- |
| `::before`                      | Creates a pseudo-element that is inserted _before_ the content of the selected element. |
| `::after`                       | Creates a pseudo-element that is inserted _after_ the content of the selected element.  |
| `::first-letter`                | Styles the first letter of the text content of an element.                              |
| `::first-line`                  | Styles the first line of the text content of an element.                                |
| `::selection`                   | Styles the portion of text that the user has selected (highlighted).                    |

## Rule Grouping

- Rule grouping in CSS lets you style many selectors at the same time.

- It makes your CSS shorter and easier to read.

- Basically, it's like putting together rules that have the same stuff in them.

```css
h1, h2, p {
    color: blue;
    font-size: 30px;
}
```
