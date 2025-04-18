
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Flexbox</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--10-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## Flexbox (Flexible Box Layout)

- Powerful layout module for flexible and responsive designs.

- Excellent for item alignment and space distribution within a container.

- Arranging items in a "box" and controlling their behavior.

### Flex Container (Parent)

- display: flex / display: inline-flex

- flex-direction

- flex-wrap

- justify-content

- align-items

- align-content

- gap (shorthand for `row-gap` and `column-gap`)

### Flex Items (Children)

- order

- flex-grow

- flex-shrink

- flex-basis

- align-self

## Flex Container Display

The key difference is how the _flex container itself_ behaves:

### `display: flex`

- Container acts as a _block-level_ element.

- Takes full width, forces other elements above/below. Like a `<div>` or `<p>`.

- Use when the flex container should take the _full width_ and force other elements onto new lines (typical layout section).

- **Analogy:** Imagine you have a box. The box is big and heavy. You need a whole shelf for it. Nothing else can fit on the same shelf.

### `display: inline-flex`

- Container acts as an _inline-level_ element.

- Takes only the width of its content. Other elements can flow alongside it. Like `<span>` or `<a>`.

- Use when the flex container should fit _within a line_ of text or alongside other inline elements (navigation menu, icon group).

- **Analogy:** Imagine you have a box. The box is small and light. You can put it on a shelf with other items.

## Flex Wrap

- Controls whether flex items wrap onto multiple lines or stay on a single line.

- Crucial for responsive design (adapting to different screen sizes).

| <center>Value</center> | <center>Description</center>                                                                                                                                                          | <center>Analogy</center>                                                                                       | <center>When to Use</center>                                                                                                                                                                                                        | <center>Default?</center> |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `nowrap`               | Flex items will not wrap. They will try to fit onto a single line, even if it means overflowing the container. This can lead to items being clipped or distorted.                     | All boxes try to squeeze onto one line, even if they have to shrink or overflow.                               | Use when you specifically want items to stay on a single line, even if it causes overflow. Useful for controlling the exact width of the container. Be mindful of overflow issues and consider using overflow properties if needed. | <center>✔️</center>       |
| `wrap`                 | Flex items will wrap onto multiple lines if necessary. The lines will wrap from the main axis start towards the main axis end.                                                        | Boxes wrap onto new lines when they don't fit, starting from the left (or top, depending on `flex-direction`). | Use for most responsive layouts where you want items to wrap onto multiple lines when the screen size gets smaller. This is the most common and generally recommended value.                                                        |                           |
| `wrap-reverse`         | Flex items will wrap onto multiple lines if necessary, but the lines will wrap from the main axis end towards the main axis start. This reverses the order in which lines are placed. | Boxes wrap onto new lines, but the lines stack in reverse order.                                               | Use when you want items to wrap onto multiple lines, but you need the lines to be stacked in reverse order. This is less common but can be useful in specific layout scenarios.                                                     |                           |

```css
.container {
    display: flex;
    flex-wrap: wrap;
}

.item {
    width: 200px;
    height: 100px;
}
```

## Flex Direction

- Defines the direction flex items are placed in the container.

- Determines the main axis of the flexbox layout.

| <center>Value</center> | <center>Description</center>                                  | <center>Use Cases</center>                                              |
| ---------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `row`                  | Use for typical horizontal layouts.                           | Navigation menus, image galleries.                                      |
| `row-reverse`          | Use when you need to reverse the order of items horizontally. | Specific design requirements.                                           |
| `column`               | Use for vertical layouts.                                     | Sidebars, lists of items.                                               |
| `column-reverse`       | Use when you need to reverse the order of items vertically.   | Chat interfaces, situations where you want the newest items at the top. |

## Main vs. Cross Axis

In Flexbox, the concepts of the main axis and the cross axis are fundamental to understanding how items are positioned and aligned within a flex container.

### Main Axis

Primary direction of flex item placement. Determined by `flex-direction`.

- `row`/`row-reverse`: Main axis is **horizontal**.

- `column`/`column-reverse`: Main axis is **vertical**.

### Cross Axis

Perpendicular to the main axis. Used for alignment _across_ the main axis.

- Main axis horizontal: Cross axis is _vertical_.

- Main axis vertical: Cross axis is _horizontal_.

### Visualization

| <center>Value</center> | <center>Main</center> | <center>Cross</center> |
| ---------------------- | --------------------- | ---------------------- |
| `row`                  | <center>➡️</center>   | <center>⬇️</center>    |
| `row-reverse`          | <center>⬅️</center>   | <center>⬇️</center>    |
| `column`               | <center>⬇️</center>   | <center>➡️</center>    |
| `column-reverse`       | <center>⬆️</center>   | <center>➡️</center>    |

## Align Items

- Controls flex item alignment along the _cross axis_.

- Aligns items _perpendicular_ to the main flow.

| <center>Value</center> | <center>Description</center>                                                                                                                                                                                                                                  | <center>Default?</center> |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `stretch`              | Items stretch to fill the container's height (if the flex-direction is row) or width (if the flex-direction is column). If the items already have a set height or width, they'll stretch to match the container. If not, they'll stretch as much as they can. | <center>✔️</center>       |
| `flex-start`           | Items line up at the start of the container's cross axis. Think of it as the top of the container if the items are in a row, or the left side if they're in a column.                                                                                         |                           |
| `flex-end`             | Items line up at the end of the container's cross axis. Think of it as the bottom of the container if the items are in a row, or the right side if they're in a column.                                                                                       |                           |
| `center`               | Items are aligned to the middle of the container along the cross axis.                                                                                                                                                                                        |                           |
| `baseline`             | Items are aligned along their text baselines. This is handy when you have text of different sizes within the items. Imagine an invisible line where the text sits—that's the baseline.                                                                        |                           |

```css
.container {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 200px;
}
```

## Justify Content

- Controls flex item alignment along the _main axis_.

- Determines space distribution between items along the flex flow direction.

- If `flex-direction` is `row` or `row-reverse`, the main axis is _horizontal_.

- If `flex-direction` is `column` or `column-reverse`, the main axis is _vertical_.

| <center>Value</center> | <center>Default?</center> | <center>Description</center>                                                                                                                                                    |
| ---------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `flex-start`           | <center>✔️</center>       | Flex items are aligned to the start of the main axis. For row, this is the left edge. For column, it's the top.                                                                 |
| `flex-end`             |                           | Flex items are aligned to the end of the main axis. For row, this is the right edge. For column, it's the bottom.                                                               |
| `center`               |                           | Flex items are aligned to the center of the main axis.                                                                                                                          |
| `space-between`        |                           | Flex items are distributed evenly along the main axis, with the first item aligned to the start and the last item aligned to the end. Space is distributed _between_ the items. |
| `space-around`         |                           | Flex items are distributed evenly along the main axis, with space _around_ each item. There will be space at both the beginning and the end of the line.                        |
| `space-evenly`         |                           | Flex items are distributed evenly along the main axis, with _equal_ space around them, including the space at the start and the end.                                            |

```css
.container {
    display: flex;
    justify-content: center;
    flex-direction: row;
}
```

## Align Content

- Controls alignment of _lines_ of flex items within the container (when multiple lines exist).

- Only effective when `flex-wrap` is `wrap` or `wrap-reverse` (not `nowrap`).

- Aligns _lines_ of flex items along the cross axis.  

- Does _not_ align individual items within a line (`align-items` handles that).

- Manages space _between_ lines. 

| <center>Value</center> | <center>Default?</center> | <center>Description</center>                                                                                                                                                  |
| ---------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stretch`              | <center>✔️</center>       | The lines of flex items are stretched to fill the entire cross axis of the container.                                                                                         |
| `flex-start`           |                           | The lines of flex items are aligned to the start of the cross axis.                                                                                                           |
| `flex-end`             |                           | The lines of flex items are aligned to the end of the cross axis.                                                                                                             |
| `center`               |                           | The lines of flex items are aligned to the center of the cross axis.                                                                                                          |
| `space-between`        |                           | The lines of flex items are distributed evenly along the cross axis, with the first line at the start and the last line at the end. Space is distributed _between_ the lines. |
| `space-around`         |                           | The lines of flex items are distributed evenly along the cross axis, with space _around_ each line. There will be space at both the beginning and the end of the container.   |
| `space-evenly`         |                           | The lines of flex items are distributed evenly along the cross axis, with _equal_ space around them, including the space at the start and the end.                            |

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    flex-direction: row;
    height: 300px;
}
```

## Flex Order

- Controls the visual order of flex items _within_ the container.

- Think of it as assigning a number to each flex item, determining its position within the container, regardless of its source order in the HTML.

- **Key Idea:** Decouples visual order from HTML source order. Like assigning numbers to people in line - they rearrange based on the numbers, _not_ their original position.

- **Default Ordering:** Items without a specified `order` value are assigned 0 and positioned according to their HTML source order _before_ any positively ordered items.

- **Negative Values:** `order` can be negative, placing items _before_ the default (0) ordered items.

- **Visual Only:** `order` _only_ affects the _visual_ layout. It does _not_ change the document's flow for assistive technologies. Maintain logical source order for accessibility.

- **Flex-Direction Dependent:** `order`'s effect is tied to `flex-direction`. `row` means order controls left-to-right positioning; `column` controls top-to-bottom.

```css
.container {
    display: flex; /* Other flex container properties... */
}

.item1 { order: 3; /* Placed last */ }
.item2 { order: 1; /* Placed first */ }
.item3 { order: 2; /* Placed second */ }
.item4 { order: -1; /* Placed before all other items */ }
```

## Align Self

- Controls a _single_ flex item's alignment along the cross axis.

- Overrides the parent container's `align-items` property.

- **Think of it as:** `align-items` is like the parent telling all the children how to line up. `align-self` is like one specific child saying, "Actually, I'd prefer to stand over _here_."

| <center>Value</center> | <center>Description</center>                                                      | <center>Default?</center> |
| ---------------------- | --------------------------------------------------------------------------------- | ------------------------- |
| `auto`                 | The item inherits the `align-items` value from its parent.                        | <center>✔️</center>       |
| `flex-start`           | Aligns the item to the start of the cross axis.                                   |                           |
| `flex-end`             | Aligns the item to the end of the cross axis.                                     |                           |
| `center`               | Aligns the item to the center of the cross axis.                                  |                           |
| `stretch`              | Stretches the item to fill the cross axis (if the cross size is not constrained). |                           |
| `baseline`             | Aligns the item along its baseline.                                               |                           |

## Flex Grow

- Deals with how much a flex item expands to fill available space in its container.

- Like giving each item a "portion" of the extra space.

- Higher `flex-grow` value = bigger portion of space.

```css
.container {
    display: flex;
    width: 300px; /* Container has a fixed width */
}

.item {
    height: 50px; /* All items have the same height */
    background-color: lightblue;
}

.item-1 { flex-grow: 1; /* Item 1 gets 1 share of the extra space */ }
.item-2 { flex-grow: 2; /* Item 2 gets 2 shares of the extra space */ }
.item-3 { flex-grow: 1; /* Item 3 gets 1 share of the extra space */ }
```

## Flex Shrink

- Controls how much a flex item shrinks when space is tight.

- Basically, how "willing" an item is to squeeze in.

- Items shrink based on their shrink factor. Like a weighted average.

- Only kicks in when the container is full.

- **Shrink Factor:** `flex-shrink` * `flex-basis` (or width) = how much an item shrinks. _Bigger number = more shrinking._

- **Think of it as:** balloons in a box. If the box gets smaller, the balloons shrink.

	- `flex-shrink: 1` -> Shrinks at normal rate.
	- `flex-shrink: 2` -> Shrinks TWICE as fast as `flex-shrink: 1`.
	- It deflates/shrinks more quickly. So, higher flex-shrink = shrinks faster when space gets tight.

```css
.container {
    display: flex;
    width: 300px;
}

.item {
    flex-basis: 100px;
    background-color: lightblue;
    padding: 10px;
    border: 1px solid black;
}

.item-shrink-1 { flex-shrink: 1; /* Default value */ }
.item-shrink-2 { flex-shrink: 2; /* Shrinks twice as fast as .item-shrink-1 */ }
.item-shrink-0 { flex-shrink: 0; /* Won't shrink at all */ }
```

## Flex Basis

- Defines the _initial_ size of a flex item.

- Acts as the "base" width/height.

- Horizontal container: `flex-basis` controls width.

- Vertical container: `flex-basis` controls height.

- Size _before_ `flex-grow` or `flex-shrink` are applied.

- `flex-basis` is the _main_ way to set the starting size of a flex item. It's generally better than `width` or `height` because it's more adaptable and works more smoothly with other flex properties.

- The _main axis_ decides whether `flex-basis` controls the width _or_ the height.

- `flex-basis` is useful for making responsive layouts. Combine it with media queries and other flex properties for this.

- **Analogy:** Imagine you're arranging books on a shelf. `flex-basis` is like deciding the initial width of each book before you start adjusting things to fill the shelf completely.

```css
/* Horizontal Flex Container */
.container { display: flex; }

.item1 { flex-basis: 100px; /* Item 1 starts with a width of 100px */ }
.item2 { flex-basis: 200px; /* Item 2 starts with a width of 200px */ }
.item3 { flex-basis: auto; /* Item 3's size is determined by its content */ }

/* Vertical Flex Container */
.container-vertical {
    display: flex;
    flex-direction: column; /* Stack items vertically */
}

.item1-vertical { flex-basis: 50px; /* Item 1 starts with a height of 50px */ }
.item2-vertical { flex-basis: 150px; /* Item 2 starts with a height of 150px */ }
```
