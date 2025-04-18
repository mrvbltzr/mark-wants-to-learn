
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Writing Future-Proof CSS Code</h1>
<img src="https://img.shields.io/badge/Finished-2025--02--19-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br /><br />
</div>

## CSS Variables

- Reusable values in CSS – like programming variables.

- Changing the variable's value updates _everywhere_ it's used. Saves time & effort!

- Must be declared inside the `:root`.

- **Declaration:** `--variable-name: value;` (e.g., `--main-color: blue;`)

- **Usage:** Use `var(--variable-name, <fallback_value>)` where you need the value.

```css
:root {
    --primary-color: #2962FF; /* A nice shade of blue */
    --secondary-color: #FFAB40; /* A golden yellow */
    --spacing-unit: 16px;
}

body {
    background-color: #f0f0f0; /* Light gray background */
    color: var(--primary-color); /* Use the primary blue for text */
    margin: 0;
    padding: 0;
}

h1 {
    color: var(--secondary-color); /* Use the secondary yellow for headings */
    margin-bottom: calc(2 * var(--spacing-unit)); /* Spacing using a calculation */
}

.container {
    padding: var(--spacing-unit);
    border: 2px solid var(--primary-color); /* Blue border */
}

button {
    background-color: var(--primary-color);
    color: white;
    padding: calc(0.5 * var(--spacing-unit)) var(--spacing-unit);
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #1A46C4; /* A slightly darker shade of the primary blue */
}

/* Example of overriding a variable within a specific context */
.alert {
    --primary-color: #D50000; /* Red for alerts */
    color: var(--primary-color);
}

.alert button {
    background-color: var(--primary-color); /* Red button in alerts */
}

/* Example of using a variable multiple times in a calculation */
.box {
    width: calc(4 * var(--spacing-unit));
    height: calc(4 * var(--spacing-unit));
    background-color: #FFFFFF;
    border: 1px solid var(--primary-color);
    margin: calc(2 * var(--spacing-unit));
}
```

## Vendor Prefix

- **CSS vendor prefixes:** Browser's way to test new CSS features before they're official. Like a beta version.

- **Why prefixes?** Let's devs use new stuff early & give feedback to browser makers. Makes improvement easier.

- **Prefixes get dropped:** Once a feature is standard (official), no more prefix needed.

- **Analogy: New dish at a restaurant** A "Spicy Surprise Noodle" marked "(Experimental)" is like a prefixed CSS property. They might change it or remove it later. If it's good, it becomes a regular menu item (standard CSS).

| <center>Prefix</center> | <center>Description</center>                                                            | <center>Browser</center>        |
| ----------------------- | --------------------------------------------------------------------------------------- | ------------------------------- |
| `-webkit-`              | Used by browsers based on the WebKit engine (like older versions of Chrome and Safari). | Chrome, Safari (older versions) |
| `-moz-`                 | Used by Firefox.                                                                        | Firefox                         |
| `-o-`                   | Used by older versions of Opera.                                                        | Opera (older versions)          |

```css
.blurred-background {
    -webkit-backdrop-filter: blur(5px); /* For Safari and older Chrome */
    -moz-backdrop-filter: blur(5px);    /* For Firefox (now no longer needed) */
    -o-backdrop-filter: blur(5px);      /* For older Opera (no longer needed) */
    backdrop-filter: blur(5px);         /* The standard, unprefixed version */
}
```

## Support Query

- Conditional styling based on browser capabilities. Basically, check if the browser can handle a specific CSS feature _before_ applying styles.

- Like asking the browser: "Can you do this?" If yes, use these styles; if no, use different/default styles.

- **Example:** Vegan butter cake analogy. Check if browser supports vegan butter (new CSS feature). If yes, use vegan recipe (styles inside `@supports`). If no, use regular butter recipe (styles outside `@supports` or in a separate rule).

```css
/* Default styles (like the regular butter recipe) */
.cake {
    background-color: #f0f0f0;
    padding: 20px;
}

/* Check if the browser supports a specific feature (like vegan butter) */
@supports (appearance: none) or (-webkit-appearance: none) or (-moz-appearance: none) {
    /* Styles to apply if the feature is supported (vegan butter recipe) */
    .cake {
        background-color: #e0ffe0; /* A lighter green */
        border: 2px solid #008000;
    }

    /* Target a specific element within the .cake only if appearance: none is supported */
    .cake input[type="text"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: 1px solid #ccc;
        padding: 5px;
    }
}

/* You can also check for the absence of a feature: */
@supports not (display: grid) {
    .cake {
        display: block; /* Fallback for older browsers */
    }
}


/* Multiple feature check example */
@supports (display: flex) and (backdrop-filter: blur(5px)) {
  .modern-box {
    display: flex;
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.5);
  }
}

/*  Checking for prefixed properties */
@supports (-webkit-backdrop-filter: blur(5px)) or (backdrop-filter: blur(5px)) {
    .modern-box {
        backdrop-filter: blur(5px); /* Standard property */
        -webkit-backdrop-filter: blur(5px); /* WebKit prefix */
    }
}
```

## Polyfills

- JavaScript code that lets old browsers use new CSS features.

- Acts like a translator - converts new CSS into a format older browsers can handle.

- Allows using modern CSS in older browsers (fills the gaps in browser support).

## Eliminating Cross-Browser Inconsistencies

- Web dev is hard because browsers differ. Need to support many.

- Problem: Browser inconsistencies – default styles (font size, family, margins, padding, box-sizing) vary widely. This isn't _always_ bad, but can lead to inconsistent webpage looks.

    - Solution: Reset libraries (like `normalize.css`). These are CSS files added early in HTML to overwrite default browser styles. Example: setting `box-sizing: border-box` for all elements. Can also do this manually (e.g., using `* { box-sizing: border-box; }` in your CSS).

    - Trade-off: Reset libraries add to page size (download time). Might be better to only reset _necessary_ styles (like `box-sizing`) instead of everything a library resets – saves on download size. Only reset things your project actually uses. Avoid unnecessary downloads.

## How to Name CSS Classes?

- **Avoid cross-browser issues:** Focus on consistent class naming.

- **Class selectors are key:** Reusable styles; descriptive names improve CSS readability.

- **Kebab case is crucial:** Use lowercase letters & hyphens (e.g., `my-class-name`). CSS is case-insensitive; snake case (`my_class_name`) causes problems.

- **Name by feature, not style:** `page-title` is good; `title-blue` is bad (color might change).

- **BEM (Block Element Modifier):** A naming convention for large projects to prevent class name conflicts.

    - **Structure:** `.block__element--modifier`
    - **Example:** `.menu__item--big` (menu is the block, item is the element, big is the modifier).
    - **Another Example:** `.button--success` (button is the block, no specific element, success is the modifier).
    - Even though modifiers seem to violate the "name by feature, not style" rule, the entire class name still describes the feature.

- **BEM in practice:** Improves code readability and reduces naming collisions. It might look complex at first, but helps in large projects. Example from source code: `.main-header`, `.toggle-button__bars`, `.brand`, `.main-nav__item--call-to-action`

## Vanilla CSS vs Frameworks

- **Vanilla CSS:**

    - **Pros:** Full control, minimal code, easy to understand, highly optimized potential.

    - **Cons:** Time-consuming, high responsibility for browser compatibility and code quality, requires CSS expertise.

- **Component Frameworks (e.g., Bootstrap):**

    - **Pros:** Fast development, pre-built components, generally follows best practices, requires less CSS expertise.

    - **Cons:** Limited control over styling, potential for unused code (bloat), websites may look similar, requires understanding of framework's structure for customization.

- **Utility Frameworks (e.g., Tailwind CSS):**

    - **Pros:** Faster development than vanilla CSS, built-in utility classes, follows best practices, more control than component frameworks, less likely to result in visually identical websites.

    - **Cons:** Requires more CSS knowledge than component frameworks, still potential for unused code, doesn't provide pre-built components, requires more coding than component frameworks.
