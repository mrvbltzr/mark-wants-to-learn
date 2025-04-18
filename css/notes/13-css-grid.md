
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>CSS-Grid</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--13-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## What is CSS Grid?

- Powerful for 2D layouts.

- Define rows and columns.

- Place elements within grid areas.

- Customizable grid system. Can be used for whole page OR sections.

```css
.container {
    display: grid;
    /* Three columns: 1 fraction, 2 fractions, 1 fraction */
    grid-template-columns: 1fr 2fr 1fr;
    /* Three rows: auto height, 100px, auto height */
    grid-template-rows: auto 100px auto;
    /* Space between grid items */
    gap: 10px;
}

.item1 {
    grid-column: 1 / 2; /* Spans from column line 1 to 2 */
    grid-row: 1 / 2;    /* Spans from row line 1 to 2 */
    background-color: lightblue;
}

.item2 {
    grid-column: 2 / 3; /* Spans from column line 2 to 3 */
    grid-row: 1 / 3;    /* Spans from row line 1 to 3 */
    background-color: lightcoral;
}

.item3 {
    grid-column: 3 / 4; /* Spans from column line 3 to 4 */
    grid-row: 1 / 2;    /* Spans from row line 1 to 2 */
    background-color: lightgreen;
}

.item4 {
    grid-column: 1 / 4; /* Spans all columns (1 to 4) */
    grid-row: 3 / 4;    /* Spans from row line 3 to 4 */
    background-color: lightyellow;
}
```

## Defining Column & Rows

### `grid-template-columns`

- Defines columns in a grid layout.

- Controls number & size of columns (vertical "walls").

- Specifies how many columns, how wide each should be.

- Imagine you're building a bookshelf. `grid-template-columns` is like deciding how many shelves (columns) you want and how wide each shelf should be. You can have shelves of equal width, different widths, or a mix of both. The `fr` unit is like saying "take up one share of the remaining horizontal space," while pixel values are like specifying the exact width of the shelf.

```css
/* Example 1: Three equal columns */
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Creates three columns, each taking up 1 fraction of the available space */
}

/* Example 2: Two columns, one fixed width, one flexible */
.grid-container {
    display: grid;
    grid-template-columns: 200px 1fr; /* Creates two columns: the first is 200 pixels wide, the second takes up the remaining space */
}

/* Example 3: Four columns with different widths */
.grid-container {
    display: grid;
    grid-template-columns: 100px 2fr 1fr auto; /* Creates four columns: 100px, twice the fraction, one fraction, and the rest as needed */
}
```

### `grid-template-rows`

- Controls the height of rows in a grid layout. Essentially, sets up the horizontal tracks.

- Defines how tall each row should be; browser handles space distribution.

- Think of it like drawing horizontal lines on the grid container. `grid-template-rows` determines the vertical space _between_ those lines (row height).

```css
/* Example 1: Three equal height rows */
.grid-container {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    /* Each row takes up 1 fraction of available space */
}

/* Example 2: Specific heights */
.grid-container {
    display: grid;
    grid-template-rows: 100px 200px auto;
    /* First row 100px, second 200px, third takes up remaining space */
}
```

## Positioning Child Elements in a Grid

### `grid-column-start`

- Specifies the starting line for a grid item's placement within the grid.

- Think of it as telling the item where to _begin_ occupying columns in the grid.

- It's like saying, "Hey item, begin occupying space from this specific vertical line onward."

- A positive integer refers to a specific grid line number, starting from 1.

- You can also use negative integers. `-1` refers to the very last grid line, `-2` the second to last, and so on. This is useful when you don't know the exact number of columns.

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Three equal columns */
    grid-gap: 10px;
}

.grid-item {
    grid-column-start: 2; /* Start at the second column line */
}

.grid-item-span {
    grid-column-start: 1;
    grid-column-end: 3; /* spans two columns */
}

.grid-item-negative {
    grid-column-start: -2; /* Start at the second line from the end */
}
```

### `grid-column-end`

- Specifies the ending line for a grid item's placement within the grid.

- It determines which vertical grid line the _end_ edge of the item will align with.

- Think of it as telling the grid item: "Stop stretching horizontally at this line."

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; /* Creates 4 equal columns */
    grid-gap: 10px;
}

.grid-item-1 {
    grid-column-start: 1; /* Start at the first line */
    grid-column-end: 3;   /* End at the third line (spans 2 columns) */
    /* Think of it as: "Stop stretching at the 3rd vertical grid line." */
}

.grid-item-2 {
    grid-column-start: 2; /* Start at the second line */
    grid-column-end: 4;   /* End at the fourth line (spans 2 columns) */
    /* Think of it as: "Stop stretching at the 4th vertical grid line." */
}

.grid-item-3 {
  grid-column-start: 1;
  grid-column-end: -1; /* spans to the very end of the grid */
  /* Think of it as: "Stretch all the way to the last vertical grid line." */
}
```

### `grid-row-start`

- Specifies the starting row line for a grid item's placement within the grid.

- It determines which row the item begins on.

- A positive integer specifies the row line number to start at. Row lines are numbered starting from 1.

- A negative integer specifies the row line number from the end, counting backward. `-1` refers to the very last row line, `-2` the second to last, and so on.

- If `grid-row-start` specifies a line that's outside the explicitly defined grid, it will cause implicit rows to be added to the grid to accommodate the placement.

```css
.grid-container {
    display: grid;
    grid-template-rows: 100px 200px 150px; /* Define row heights */
    grid-template-columns: 150px 200px; /* Define column widths */
}

.grid-item-1 {
    grid-row-start: 2; /* Start at the second row line */
    grid-column-start: 1; /* Start at the first column line */
}

.grid-item-2 {
    grid-row-start: 1; /* Start at the first row line */
    grid-column-start: 2; /* Start at the second column line */
}

.grid-item-3 {
    grid-row-start: 3; /* Start at the third row line */
    grid-column-start: 1; /* Start at the first column line */
}

/* Example with negative index */
.grid-item-5 {
    grid-row-start: -2; /* Start at the second row line from the end */
    grid-column-start: 1;
}
```

### `grid-row-end`

- Specifies the _ending_ line of a grid item's row placement.

- Specifically, it sets where the _bottom_ edge of the item sits.

- Default: `auto` if `grid-row-end` not defined. This usually makes the item span only one row.

```css
.grid-container {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr; /* Three rows */
    grid-template-columns: 1fr 1fr; /* Two columns */
}

.grid-item {
    grid-row-start: 1; /* Start at row line 1 */
    grid-row-end: 3;   /* End at row line 3 (spans two rows) */
    grid-column-start: 1;
    grid-column-end: 2;
}
```

## Auto Fill

- `auto` lets grid tracks (rows/columns) size _automatically_.

- Size depends on the _content_ inside the track.

- Useful when content size is _unknown_.

- Provides _flexible_ sizing.

```css
.grid-container {
    display: grid;
    grid-template-columns: auto 1fr; /* One auto-sized column, one fraction */
}
```

## Repeat and Min-Max Functions

### `repeat()`

- Syntax: `repeat(number of repetitions, track size(s))`

- Used in grid layouts.

- Defines repeating track patterns (columns or rows).

- Makes it easier to create grids with many similar/identical tracks. Avoids writing out the same track size many times.

```css
.grid-container {
    display: grid;
    
    /* Creates 3 columns, each 100px wide */
    grid-template-columns: repeat(3, 100px);
    
    /* Creates 2 rows, each 50px high */
    grid-template-rows: repeat(2, 50px);
}
```

### `minmax()`

- Defines a _size range_.

- Takes two values: minimum and maximum size

- Resulting size:

	- AT LEAST the minimum
    - AT MOST the maximum
    - IDEALLY, somewhere in between the min & max values.

- Useful for flexible sizing, _especially_ in grid layouts.

- The minimum value must be less than or equal to the maximum value.

- Can be used in various contexts where sizes are defined, not just grid.

- It provides flexibility, allowing elements to adapt to different screen sizes or content lengths.

- `fr` units, percentages, and other length units can be used within `minmax()`. `auto` is a special keyword that allows the size to expand or shrink based on content.

```css
/* Example 1: Basic usage */
.container {
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
    /* First column: 100px min, 200px max */
}

/* Example 2: Using 'fr' units */
.container {
    display: grid;
    grid-template-columns: minmax(100px, 1fr) 2fr;
    /* First column: 100px min, up to 1fr */
}

/* Example 3: Using percentages */
.container {
    display: grid;
    grid-template-columns: minmax(50%, 1fr) 1fr;
    /* First column: 50% min, up to 1fr */
}

/* Example 4: Combining with other length units */
.container {
    display: grid;
    grid-template-columns: minmax(200px, 300px) 100px;
    /* First column: 200px min, 300px max */
}

/* Example 5: Using 'auto' as max */
.container {
    display: grid;
    grid-template-columns: minmax(100px, auto) 1fr;
    /* First column: 100px min, expands as needed */
}

/* Example 6: Using 'auto' as min */
.container {
    display: grid;
    grid-template-columns: minmax(auto, 200px) 1fr;
    /* First column: shrinks as needed, up to 200px */
}

/* Example 7: Inside 'repeat' */
.container {
    display: grid;
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    /* Two columns, each 150px min, up to 1fr */
}
```

## Span

- Controls how many grid tracks an item takes up (columns or rows).

- Basically, makes an item stretch across multiple cells.

- It's like `colspan` and `rowspan` in HTML.

- `span <number>`: Spans _that many_ tracks. (e.g., `span 2` = spans two tracks).

- `span <track-name>`: Spans _up to_ a named grid line.

- **Analogy:** Imagine a seating arrangement in a theater. The rows and columns of seats form your grid.

	- Without `span`, each person occupies one seat (one grid cell).

	- Using `span`, you could have a group of friends who want to sit together. If they need three seats in a row, you could say "These friends will _span_ three seats starting from seat number 5". This is similar to `grid-column: 5 / span 3`.

	- Similarly, if a tall person needs extra legroom, they might want to _span_ two rows. This is like `grid-row: 2 / span 2`.

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
}

.grid-item-1 {
    grid-column: 1 / span 2; /* Spans two columns starting from column 1 */
    grid-row: 1;
    background-color: lightblue;
}

.grid-item-2 {
    grid-column: 3;
    grid-row: 1 / span 2; /* Spans two rows starting from row 1 */
    background-color: lightcoral;
}
```

## Named Lines

- Instead of just using numbers to refer to grid lines, we can give them _names_.

- This makes the code easier to read and understand.

- It's also easier to change things later since we're using descriptive names, not just numbers.

- Think of it like labeling rows and columns.

- If you use the same name (e.g., `hd-start`) for a vertical line (in `grid-template-columns`) and a horizontal line (in `grid-template-rows`), they are _different lines_ even though they have the same name. It's like two people having the same name.

```css
.grid-container {
    display: grid;
    grid-template-columns: [col-start] 1fr [content-start] 2fr [content-end] 1fr [col-end];
    grid-template-rows: [row-top] auto [main-start] 1fr [footer-start] auto [row-bottom];
    gap: 10px;
}

.item1 {
    grid-area: row-top / col-start / main-start / content-end; /* Using named lines */
    background-color: lightblue;
}

.item2 {
    grid-area: main-start / content-start / footer-start / col-end; /* Using named lines */
    background-color: lightcoral;
}

.item3 {
    grid-area: footer-start / col-start / row-bottom / col-end; /* Using named lines */
    background-color: lightgreen;
}

/* Equivalent using numerical indexes (less readable) */
.item1-numerical {
    grid-area: 1 / 1 / 2 / 3;
    background-color: lightblue;
}

.item2-numerical {
    grid-area: 2 / 2 / 3 / 4;
    background-color: lightcoral;
}

.item3-numerical {
    grid-area: 3 / 1 / 4 / 4;
    background-color: lightgreen;
}
```

## Column & Row Shorthand

When you use a named line in a `grid-column` property, the browser knows you are referring to the line defined in `grid-template-columns`. Similarly, when you use a named line in a `grid-row` property, the browser knows you are referring to the line defined in `grid-template-rows`.

### `grid-column`

- Shorthand for `grid-column-start` & `grid-column-end`.

```css
.item1 {
    /* Starts at line 2, ends before line 3. Occupies one column track. */
    grid-column: 2 / 3;
}

.item2 {
    /* Starts at line 1, ends before line 4. Occupies three column tracks. */
    grid-column: 1 / 4;
}

.item3 {
    /* Starts at line 2, spans two column tracks. Equivalent to 2 / 4 if there are at least 4 lines */
    grid-column: 2 / span 2;
}

.item4 {
    /* Spans two columns, ending at line 4. Equivalent to 2 / 4 if the item ends at line 4 */
    grid-column: span 2 / 4;
}

.item5 {
    /* Starts at the first line, ends at the last line. Occupies all columns. */
    grid-column: 1 / -1;
}
```

### `grid-row`

- Shorthand for `grid-row-start` & `grid-row-end`.

```css
.grid-item-1 {
    /* Starts at row line 1, ends before row line 2. Occupies one row. */
    grid-row: 1 / 2;
}

.grid-item-2 {
    /* Starts at row line 2, ends before row line 4. Occupies two rows. */
    grid-row: 2 / 4;
}

.grid-item-3 {
    /* Starts at row line 1, ends at the last row line. Spans all rows. */
    grid-row: 1 / -1;
}

.grid-item-4 {
    /* Shorthand for grid-row-start: 2; grid-row-end: auto; Usually occupies one row.*/
    grid-row: 2;
}
```

### `grid-area`

- Shorthand for `grid-row-start`, `grid-column-start`, `grid-row-end`, and `grid-column-end`.

```css
.item1 {
    grid-area: 1 / 1 / 2 / 3; /* row-start / col-start / row-end / col-end */
    background-color: lightblue;
}

.item2 {
    grid-area: 2 / 2 / 3 / 4;
    background-color: lightcoral;
}
```

## Gaps

### `column-gap`

- Space _between_ columns (like gutters in print).

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
}
```

### `row-gap`

- Space _between_ rows.

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 20px;
}
```

### `gap`

- Shorthand for `row-gap` & `column-gap`. Sets both at the same time.

- Controls spacing _between_ items.

- One value = applies to _both_ rows & columns.

```css
.container {
    display: grid;
    gap: 1rem; /* 1rem gap for both rows and columns */
}
```

## Automatically Generated Grid Areas

```css
grid-template-columns: [hd-start] repeat(4, [col-start] 25% [col-end]) [hd-end];
```

- **`[hd-start]`**: This names the starting grid line for the header area. Think of it as labeling a specific vertical line in your grid.

- **`repeat(4, [col-start] 25% [col-end])`**: This is the core of the column definition.

	- **`[col-start]`**: Names the starting line of each of the four columns.
    - **`25%`**: Sets the width of each column to 25% of the container's width.
    - **`[col-end]`**: Names the ending line of each of the four columns.

- **`[hd-end]`**: Names the ending grid line for the header area.

## Fit Content

- Sizes an element to fit its content.

- Useful when you want the element's width to match the content's width.

- Has a max-width limit.

- **Analogy:** Like a rubber band - stretches with content, but only so far.

```css
/* Basic example: Fit to content, no maximum */
.container {
    width: fit-content(); /* Adjusts width to content */
    border: 1px solid black;
    padding: 10px;
}

/* Example with a max-width */
.container-limited {
    width: fit-content(300px); /* Max width of 300px */
    border: 1px solid blue;
    padding: 10px;
}

/* Example with min and max */
.container-minmax {
    width: fit-content(min(400px, max(200px, auto))); /* Min 200px, Max 400px*/
    border: 1px solid red;
    padding: 10px;
}

/* Example with percentage max-width */
.container-percentage {
    width: fit-content(50%); /* Max width of 50% of the parent */
    border: 1px solid green;
    padding: 10px;
}

/* Example with multiple arguments - the largest is used as the max value*/
.container-multiple {
    width: fit-content(200px, 350px, 100px); /* Max width of 350px */
    border: 1px solid orange;
    padding: 10px;
}
```

## Justify Self

- Used _inside_ a grid container.

- Aligns _one_ grid item horizontally.

- Like `justify-items`, but `justify-self` is for _one item_ only, not all.

- **Works _only_ on grid items. No flex or block elements.**

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Three equal columns */
    grid-gap: 10px;
}

.grid-item {
    padding: 20px;
    background-color: lightgray;
}

.item-start {
    justify-self: start; /* Aligns item to the start of its grid area */
}

.item-center {
    justify-self: center; /* Aligns item to the center of its grid area */
}

.item-end {
    justify-self: end; /* Aligns item to the end of its grid area */
}

.item-stretch {
    justify-self: stretch; /* Stretches item to fill its grid area (default) */
}
```

## Grid Auto

### `grid-auto-rows`

- Deals with _implicit_ rows in a grid.

- Implicit rows = rows created _automatically_ when you place items _outside_ the rows you _explicitly_ defined.

- Sets the height of _all_ these auto-created rows.

- If you don't define rows explicitly, `grid-auto-rows` fills in the gaps.

- You can set a single value (e.g., `50px`), a range (`minmax(50px, auto)`), or multiple values (e.g., `20px 50px` for alternating row heights).

**Think of it like this:** you have a cookie cutter (your grid container) and you're cutting out cookies (grid items). You've defined the shape of some cookies (explicit rows), but you also have some dough scraps left over. `grid-auto-rows` determines how thick those leftover, automatically-made cookies (implicit rows) will be.

```css
.grid-container {
    display: grid;
    grid-template-columns: 100px 100px; /* Two columns */
    grid-auto-rows: 50px; /* Implicit rows will be 50px tall */
}

.grid-item-1 {
    grid-column: 1 / 3; /* Spans both columns */
    /* No explicit row placement, so it goes in the first implicit row */
}

.grid-item-2 {
    grid-column: 1;
    grid-row: 2; /* Explicitly placed in the second row */
}

.grid-item-3 {
    grid-column: 2;
    /* No explicit row placement, will go in the next available implicit row */
}

/* Example 2: Different track sizes */
.grid-container-2 {
    display: grid;
    grid-template-columns: 100px 100px;
    grid-auto-rows: minmax(50px, auto); /* Implicit rows will be at least 50px, but can grow */
}

.grid-item-4 {
    grid-column: 1;
    /* Implicit row, will be at least 50px tall */
}

.grid-item-5 {
    grid-column: 2;
    /* Implicit row, will be at least 50px tall */
}

/* Example 3: Multiple track sizes */
.grid-container-3 {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-auto-rows: 20px 50px; /* Alternating 20px and 50px height */
}

.grid-item-6 { /* Goes into the first implicit row (20px) */ }
.grid-item-7 { /* Goes into the second implicit row (50px) */ }
.grid-item-8 { /* Goes into the third implicit row (20px) */ }
.grid-item-9 { /* Goes into the fourth implicit row (50px) */ }

/* Example 4: Using fr units */
.grid-container-4 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr; /* Implicit rows will each take up 1 fraction of the available space */
}
```

### `grid-auto-columns`

- Deals with _implicit_ columns.

- Implicit columns = extra columns the grid makes automatically. Happens when you have more items than defined columns.

- `grid-auto-columns` sets the size of these extra columns. So, if you don't say how big all your columns should be, this property fills in the blanks.

**Think of it like this:** Imagine you have a bookshelf with two explicitly defined shelves (using `grid-template-columns`). `grid-auto-columns` is like saying "If someone puts a book _outside_ of those two shelves, make the space for that book this wide."

- If you set `grid-auto-columns: 5cm`, any extra book placed outside the defined shelves will have 5cm of space.

- If you set `grid-auto-columns: auto`, the space will adjust to fit the book's width.

- If you set `grid-auto-columns: minmax(3cm, 7cm)`, the space will be at least 3cm wide, but will expand up to 7cm if the book is larger.

```css
.grid-container {
    display: grid;
    grid-template-columns: 100px 100px; /* Explicit columns */
    grid-auto-columns: 50px; /* Implicit columns will be 50px wide */
    grid-auto-rows: 50px; /* Implicit rows as well for demo */
}

.grid-container > div {
    background-color: lightgray;
    border: 1px solid gray;
}

.grid-container > div:nth-child(3) {
    grid-column: 3; /* Places item in the 3rd column, creating an implicit column */
}

.grid-container-minmax {
    display: grid;
    grid-template-columns: 100px;
    grid-auto-columns: minmax(50px, 150px);
    grid-auto-rows: 50px; /* Implicit rows as well for demo */
}

.grid-container-minmax > div {
    background-color: lightblue;
    border: 1px solid blue;
}

.grid-container-minmax > div:nth-child(2) {
    grid-column: 2; /* Places item in the 2nd column, creating an implicit column */
}

.grid-container-auto {
    display: grid;
    grid-template-columns: 100px;
    grid-auto-columns: auto;
    grid-auto-rows: 50px; /* Implicit rows as well for demo */
}

.grid-container-auto > div {
    background-color: lightgreen;
    border: 1px solid green;
}

.grid-container-auto > div:nth-child(2) {
    grid-column: 2; /* Places item in the 2nd column, creating an implicit column */
}
```

### `grid-auto-flow`

- Deals with _implicitly_ placed items (stuff _not_ specifically located with `grid-area`, `grid-row`, `grid-column`).

- Controls how these items flow into the grid.

- Think newspaper layout:

	- Columns = grid tracks
    - Articles = grid items

- `grid-auto-flow` decides:

	- Fill columns first, _then_ rows (like reading a page) OR
    - Fill rows first, _then_ columns (like reading a narrow column).

Imagine a warehouse with shelves (grid tracks).

- **`row`:** You fill each shelf (row) completely with boxes (grid items) before moving to the next shelf.

- **`column`:** You fill each vertical stack (column) of shelves before moving to the next stack.

- **`dense`:** You try to fit boxes wherever there's space, even if it means putting smaller boxes in gaps between larger ones, regardless of the order they arrived. You prioritize maximizing space utilization. `row dense` and `column dense` work similarly, but they constrain the dense packing to rows or columns, respectively.

```css
.grid-container {
    display: grid;
    grid-template-columns: 100px 100px 100px; /* 3 columns */
    grid-template-rows: 50px 50px; /* 2 rows */
    grid-auto-flow: row; /* Default: fills rows first */
}

.grid-item {
    background-color: lightgray;
    border: 1px solid gray;
}

/* Example 1: grid-auto-flow: row; (default) */
.grid-container.row-flow {
    grid-auto-flow: row;
}

/* Example 2: grid-auto-flow: column; */
.grid-container.column-flow {
    grid-auto-flow: column;
}

/* Example 3: grid-auto-flow: dense; */
.grid-container.dense-flow {
    grid-auto-flow: dense;
}

/* Example 4: grid-auto-flow: row dense; */
.grid-container.row-dense-flow {
  grid-auto-flow: row dense;
}

/* Example 5: grid-auto-flow: column dense; */
.grid-container.column-dense-flow {
  grid-auto-flow: column dense;
}
```

## Implicit and Explicit Grid

### Explicit Grid

- You define _everything_ upfront.
- Number of rows/columns (tracks), sizes, and gaps are all set by you.
- Like drawing a grid with a ruler – precise and planned.

### Implicit Grid

- Grid grows as needed.
- You place items, and the grid figures out the rows/columns.
- Like throwing darts – the "sections" appear where the darts land, even if they weren't there visually before.

```css
.container {
    display: grid;
    /* Explicitly define 2 columns and 2 rows */
    grid-template-columns: 100px 200px;
    grid-template-rows: 50px 100px;
    gap: 10px; /* Gap between grid items */
}

.item1 {
    grid-column: 1; /* Explicitly place item1 in the first column */
    grid-row: 1;    /* Explicitly place item1 in the first row */
}

.item2 {
    grid-column: 2; /* Explicitly place item2 in the second column */
    grid-row: 1;    /* Explicitly place item2 in the first row */
}

.item3 {
    grid-column: 1; /* Explicitly place item3 in the first column */
    grid-row: 2;    /* Explicitly place item3 in the second row */
}

.item4 {
    grid-column: 2; /* Explicitly place item4 in the second column */
    grid-row: 2;    /* Explicitly place item4 in the second row */
}

.item5 {
    grid-column: 1; /* Explicitly place item5 in the first column */
    grid-row: 3;    /* Implicitly creates a third row */
}

.item6 {
    grid-column: 2; /* Explicitly place item6 in the second column */
    grid-row: 4;    /* Implicitly creates a fourth row */
}

/* Example of setting implicit row height */
.container {
    grid-auto-rows: minmax(50px, auto); /* Implicit rows will be at least 50px tall */
}
```

This of it as city grids:

- **Explicit Grid:** The _planned_ streets, the ones on the original map. Think nice, organized blocks.

- **Implicit Grid:** The _unplanned_ streets that pop up as the city grows. These aren't in the initial plan, they just happen. They create new blocks, but these blocks might be different sizes than the original ones.

- `grid-auto-rows` & `grid-auto-columns`: These are like the "zoning rules" for the implicit grid. They set the _smallest_ size allowed for those new, unplanned blocks (rows and columns).

## Auto Fill

- `auto-fill` = makes flexible & responsive grids. It automatically adds as many columns/rows as it can.

- `grid-template-columns` & `grid-template-rows` can use `auto-fill`.

- `auto-fill` creates _implicit_ tracks. These are tracks that the grid system generates automatically.

- Key idea: you set a _minimum_ or _maximum_ size for each column/row. `auto-fill` then figures out how many can fit in the available space.

- Analogy: Packing a suitcase. You have limited space. Each item needs a minimum amount of space. `auto-fill` is like someone who figures out the most efficient way to pack, creating the right "compartments" (grid tracks) as needed.

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* Example 1 */
    gap: 10px;
}

.grid-container-2 {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Example 2 */
    gap: 10px;
}

.grid-container-3 {
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px); /* Example 3 */
    gap: 10px;
}
```

## Auto Fit

- `auto-fit` = repeat tracks as much as possible, _and_ expand them to fill any leftover space.

- Super useful for responsive layouts! Dynamically changes column (or row) sizes.

- Key difference from `auto-fill`: `auto-fit` expands even empty tracks, `auto-fill` doesn't.

- Columns adjust with screen size:

	- Wider screen = more columns
    - Narrower screen = fewer columns
    - Columns _always_ fill the available width.

- **Analogy:** Imagine you have a row of seats in a theater. `auto-fit` is like having flexible seats. You want each person to have at least 100px of space (minmax(100px, 1fr)). `auto-fit` will:

	1. Fit as many seats as possible in the row, ensuring each person has at least 100px.

	2. _Crucially_, if there's any extra space left over after fitting the seats, it will distribute that extra space evenly among the seats, making them wider.

	- If you used `auto-fill` instead, the seats would not expand to fill the available space. They would stay at their minimum width.

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Key part */
    grid-gap: 20px;
}

.grid-item {
    background-color: lightblue;
    padding: 20px;
    text-align: center;
}
```

## Dense

- `dense` keyword in `grid-auto-flow` controls how grid items are placed when there are empty cells.

- **Goal:** Pack items tightly, fill gaps.

- Puts items in any available space, _even if it's out of order_.

- **Analogy:** Packing a suitcase - dense = shove everything in, sparse = neatly organize.

- **Use cases:** Maximize space, less important visual order (e.g., image galleries, product lists).

- **Caution:** Can mess up visual order, so be careful with accessibility/SEO if source order matters.

```css
/* Sparse packing (default) */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row; /* or column */
    grid-gap: 10px;
}

.grid-item {
    /* ... styling ... */
}

/* Dense packing */
.grid-container-dense {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row dense; /* or column dense */
    grid-gap: 10px;
}

.grid-item {
    /* ... styling ... */
}
```

## Grid vs. Flexbox

### Grid

- Two-dimensional positioning.

- Think of it as a grid system.

- Good for overall _page structure_.

### Flexbox

- One-dimensional positioning.

- Think of it as arranging items in a single line.

- Good for arranging _content_ within a container.

## Links

- https://css-tricks.com/snippets/css/complete-guide-grid/
