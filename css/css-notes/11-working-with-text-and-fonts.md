
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Working with Text and Fonts</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--09-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Generic & Font Families](#generic--font-families)
	- [Generic Families](#generic-families)
	- [Font Families](#font-families)
- [Import](#import)
- [Font Faces](#font-faces)
- [Font Formats](#font-formats)
- [Letter Spacing](#letter-spacing)
	- [Consideration](#consideration)
- [White Space](#white-space)
- [Line Height](#line-height)
- [Text Decoration](#text-decoration)
	- [Individual Properties](#individual-properties)
- [Text Shadow](#text-shadow)
- [Font Shorthand](#font-shorthand)
	- [Consideration](#consideration)
	- [Drawbacks](#drawbacks)
- [Font Display](#font-display)

## Generic & Font Families

### Generic Families

- If the specific font is unavailable, the browser selects _any_ font from that category.

- Font _categories_ (e.g., "serif," "sans-serif," "monospace," "cursive," "fantasy").

| <center>Family</center> | <center>Example</center> | <center>Description</center>                                             |
| ----------------------- | ------------------------ | ------------------------------------------------------------------------ |
| `serif`                 | Times New Roman          | Fonts with small decorative strokes (serifs) at the ends of the letters. |
| `sans-serif`            | Arial, Helvetica         | Fonts *without* serifs.                                                  |
| `monospace`             | Courier New              | Fonts where all characters have the same width. Good for code.           |
| `cursive`               | Brush Script, Mistral    | Fonts that resemble handwriting.                                         |
| `fantasy`               | Papyrus                  | Decorative or playful fonts. Use sparingly!                              |

### Font Families

- Browser attempts to find _exactly_ that font on the user's system.

- The _actual_ font names (e.g., "Arial," "Times New Roman," "Roboto").

## Import

- Imports styles from other stylesheets into the current stylesheet.

- Embeds another CSS file within the main CSS file.

- Organizes CSS into multiple files for easier management.

- Breaks down styles into logical modules (header, footer, forms, etc.).

- Imports these modules into the main stylesheet.

- **Performance Considerations:** Be aware of potential performance issues.

- **Alternatives:** `<link src="">` tags.

```css
@import url("path/to/stylesheet.css");
/* or */
@import "path/to/stylesheet.css"; /* url() is optional */
```

**With Media Queries:**

This will only import `mobile.css` on screens smaller than 600px and `desktop.css` on screens larger than 768px:

```css
@import url("mobile.css") (max-width: 600px);
@import url("desktop.css") (min-width: 768px);
```

## Font Faces

- Embed custom fonts on your website.

- Use any font, even if not installed on the user's computer.

- Expands font choices beyond system fonts.

```css
@font-face {
	font-family: "MyCustomFont"; /* The name you'll use */
	src: url("my-font.woff2") format("woff2"), /* Modern browsers */
	   url("my-font.woff") format("woff"),     /* Older browsers */
	   url("my-font.ttf") format("truetype");  /* Older browsers */
	font-weight: normal; /* Optional: Set font weight */
	font-style: normal;  /* Optional: Set font style */
}

body {
	font-family: "MyCustomFont", sans-serif; /* Use your custom font */
}
```

## Font Formats

- Different file types for storing font data.

- Varying browser/OS support necessitates multiple formats in `@font-face` declarations for cross-browser compatibility.

- Ensure custom font compatibility across browsers.

- Older browsers: TTF/OTF support.

- Newer browsers: WOFF2 preferred.

- Multiple formats provide browser choice for successful font loading.

| <center>Font Format</center> | <center>Description</center>                                            |
| ---------------------------- | ----------------------------------------------------------------------- |
| WOFF2                        | Modern, recommended. Best compression, fast loading. Widely supported.  |
| WOFF                         | Older, widely supported. Good compression, fallback for older browsers. |
| TTF                          | Widely used, long-standing. Not as web-optimized.                       |
| OTF                          | TTF extension, more features. Not as web-optimized.                     |
| EOT                          | Obsolete, mostly for older Internet Explorer.                           |

## Letter Spacing

- Controls space between individual letters/characters. Adjusts kerning.

- Affects all letters within the element.

- **Positive:** Increases space.

- **Negative:** Decreases space (use with caution, can impact readability).

```css
h1 {
    letter-spacing: 0.05em; /* Slightly increase letter spacing for headings */
}

p {
    letter-spacing: 0.02em; /* Slightly increase letter spacing for paragraphs */
}

.highlighted-text {
    letter-spacing: -0.05em; /* Decrease letter spacing for a compact look */
}
```

### Consideration

- Readability is key.
- Font choice matters.
- Context is important.

## White Space

- Controls how whitespace (spaces, tabs, newlines) is handled within an element.

- Determines whitespace collapsing and text wrapping behavior.

- Often used with `overflow` (handling overflowing text) and `word-wrap`/`overflow-wrap` (word breaking).

- Crucial for text layout and presentation control.

- Key point: Tabs, spaces, and newlines are handled differently by the various `white-space` options.

```css
pre {
    white-space: pre; /* Preserve whitespace for code */
}

.nowrap {
    white-space: nowrap; /* Prevent text from wrapping */
}

.pre-wrap-text {
    white-space: pre-wrap; /* Preserve newlines and allow wrapping */
}
```

| <center>Value</center> | <center>Whitespace Collapsed</center> | <center>Newlines Preserved</center> | <center>Text Wrapping</center> | <center>Note</center>                  |
| ---------------------- | ------------------------------------- | ----------------------------------- | ------------------------------ | -------------------------------------- |
| `normal`               | <center>✔️</center>                   | <center>❌</center>                  | <center>✔️</center>            | Default                                |
| `nowrap`               | <center>✔️</center>                   | <center>❌</center>                  | <center>❌</center>             |                                        |
| `pre`                  | <center>❌</center>                    | <center>✔️</center>                 | <center>❌</center>             |                                        |
| `pre-wrap`             | <center>❌</center>                    | <center>✔️</center>                 | <center>✔️</center>            |                                        |
| `pre-line`             | <center>✔️</center>                   | <center>✔️</center>                 | <center>✔️</center>            | Collapses whitespace (except newlines) |
| `break-spaces`         | <center>❌</center>                    | <center>✔️</center>                 | <center>✔️</center>            |                                        |

## Line Height

- Controls the spacing between lines of text.

- Represents the total height of each line (text + space above/below).

- Also known as "leading" in typography.

- Sets the vertical distance between text baselines.

- Larger values create more space; smaller values create less space.

- `em` or unitless values are generally recommended for scalability across different font sizes.

```css
p {
    font-size: 16px;
    line-height: 1.5; /* Good for readability */
}

h1 {
    font-size: 2em;
    line-height: 1.2; /* Slightly tighter for headings */
}
```

## Text Decoration

- Shorthand property for styling text decoration lines.

- Controls underlines, overlines, line-throughs, and decoration removal

- Can combine multiple properties. (e.g., `underline overline`).

| <center>Value</center> | <center>Description</center>                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| `underline`            | Adds an underline to the text.                                                                   |
| `overline`             | Adds an overline to the text.                                                                    |
| `line-through`         | Adds a line through the text.                                                                    |
| `none`                 | Removes any existing text decorations<br>(useful for removing the default underline from links). |

```css
.message { text-decoration: underline overline; }
```

### Individual Properties

| <center>Property</center>   | <center>Description</center> | <center>Values</center>                                          |
| --------------------------- | ---------------------------- | ---------------------------------------------------------------- |
| `text-decoration-line`      | Type of line.                | `underline`, `overline`, `line-through`, `none`                  |
| `text-decoration-color`     | Decoration line color.       | Any valid color value (e.g., `red`, `#FF0000`, `rgb(255, 0, 0)`) |
| `text-decoration-style`     | Line style.                  | `solid`, `double`, `dotted`, `dashed`, `wavy`                    |
| `text-decoration-thickness` | Line thickness.              | Length (e.g., `2px`, `0.1em`) or percentage                      |

## Text Shadow

- Adds shadow effect to text content.

- Used for emphasis, depth, or decoration and can control color, offset, and blur.

- Multiple shadow definitions possible (comma-separated).

- **Performance:** Too many/large blur radii can impact performance. Use sparingly.

- **Readability:** Don't overdo it. Subtlety is key.

| <center>Property</center> | <center>Description</center> | <center>Details</center>          |
| ------------------------- | ---------------------------- | --------------------------------- |
| `offset-x`                | Horizontal offset            | Positive = right, negative = left |
| `offset-y`                | Vertical offset              | Positive = down, negative = up    |
| `blur-radius`             | Blur amount                  | Larger = more blur, 0 = sharp     |
| `color`                   | Shadow color.                |                                   |

```css
h1 {
    text-shadow: 2px 2px 4px #333; /* Dark gray shadow */
}

p {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Semi-transparent black shadow */
}

.glow {
    text-shadow: 0 0 10px #f00; /* Red glow effect */
}
```

## Font Shorthand

- Combines multiple font properties into a single declaration.

- Condenses CSS, leading to smaller file sizes.

| <center>Property (in order)</center> | <center>Description</center> | <center>Example</center>      |
| ------------------------------------ | ---------------------------- | ----------------------------- |
| `font-style`                         | Style of the font.           | `italic`, `normal`            |
| `font-variant`                       | Variant of the font.         | `small-caps`, `normal`        |
| `font-weight`                        | Weight of the font.          | `bold`, `normal`, `100`-`900` |
| `font-size`                          | Size of the font.            | `16px`, `1.2em`               |
| `line-height`                        | Height of the line.          | `1.5`, `20px`                 |
| `font-family`                        | Family of the font.          | `"Arial"`, `sans-serif`       |

```css
/* font: font-style font-variant font-weight font-size/line-height font-family; */
p {
    font: italic small-caps bold 16px/1.5 "Times New Roman", serif;
}

/* This is equivalent to:
p {
  font-style: italic;
  font-variant: small-caps;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
  font-family: "Times New Roman", serif;
} */
```

### Consideration

- **Order:** Properties _must_ be in the specified order.

- **Required:** `font-size` and `font-family` are _required_. Others are optional.

- **Implicit Values:** Omitting a property sets it to its _default_ value. This can cause unexpected resets! (e.g., setting only `font-size` and `font-family` resets all others).

- **`font-size` and `line-height`:** If `font-size` is specified, `line-height` _must_ also be specified (value or `normal`). Separate with a slash (`/`).

- **System Font:** Use `system` keyword for user's default system font.

### Drawbacks

- Requires a thorough understanding of font properties to avoid unintended style resets.

- Can make it more difficult to modify individual font properties later.

## Font Display

- Controls web font loading and display.

- Manages the balance between fast text display and avoiding FOUT/FOIT.

	- **FOIT (Flash of Invisible Text):** A brief period where the text is invisible while the browser waits for the font to load.  

	- **FOUT (Flash of Unstyled Text):** A brief period where the text is displayed with a fallback font before the custom font loads, causing a "flash" when the styles change.

- **Performance:** Loading custom fonts can impact website performance. `font-display` helps you manage this impact.

| <center>Value</center> | <center>Initial Display</center> | <center>Font Swap Behavior</center> | <center>FOIT</center> | <center>FOUT</center> | <center>Use Cases & Recommendations</center>                                        |
| ---------------------- | -------------------------------- | ----------------------------------- | --------------------- | --------------------- | ----------------------------------------------------------------------------------- |
| `auto`                 | Browser default                  | Varies                              | <center>✔️/❌</center> | <center>✔️/❌</center> | General use; browser-dependent.                                                     |
| `block`                | Invisible                        | Immediate                           | <center>✔️</center>   | <center>❌</center>    | **Critical text (e.g., headings).** Prioritize avoiding FOUT, even with brief FOIT. |
| `swap`                 | Fallback                         | Immediate                           | <center>❌</center>    | <center>✔️</center>   | **Important text.** Prioritize initial visibility, even with FOUT.                  |
| `fallback`             | Fallback                         | Conditional (short)                 | <center>❌</center>    | <center>✔️</center>   | **Less critical text.** Balance FOUT and performance.                               |
| `optional`             | Fallback                         | No swap (optional)                  | <center>❌</center>    | <center>✔️</center>   | **Decorative/non-critical fonts.** Acceptable if the font never loads.              |

```css
@font-face {
    font-family: "MySpecialFont";
    src: url("my-font.woff2") format("woff2");
    font-display: swap; /* THIS IS WHERE FONT-DISPLAY GOES */
}
```

The best value depends on your needs and the font's importance:

- **`block`:** Critical text (headings). Avoid FOUT, even with a short delay.

- **`swap`:** Important text. Prioritize initial visibility, even with FOUT.

- **`fallback`:** Less critical text. Balances FOUT and performance.

- **`optional`:** Decorative/non-critical fonts. Okay if the font never loads.
