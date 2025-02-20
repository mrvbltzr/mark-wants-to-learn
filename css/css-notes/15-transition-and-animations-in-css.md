
<div>
<div id="icon" align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZseHp6MDVnZTRheGNndnJ4eXlmYTI0ZHhidnY0b2R4MnU1enRlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/JWy2zBSXQ55W5Jh00D/giphy.gif" width="120"/>
</div>
<div id="title" align="center">
<a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">
<img src="https://img.shields.io/badge/CSS_--_The_Complete_Guide_2024_(incl._Flexbox,_Grid_&amp;_Sass)-white?logo=udemy&style=for-the-badge&color=D2CBCB" alt="CSS - The Complete Guide 2024 (incl. Flexbox, Grid &amp; Sass)" />
</a>
<h1>Transition &amp; Animations in CSS</h1>
</div>
</div>
<div align="center">
<img src="https://img.shields.io/badge/Finished-2025--02--17-white?labelColor=2A6041&color=B6EFD4" alt="Finished" />
<br />
<br />
</div>

## What's in my notes?

- [Transition](#transition)
- [Timing Functions](#timing-functions)
- [Animation](#animation)
	- [Multiple Keyframes](#multiple-keyframes)
- [Animation Event Listener](#animation-event-listener)

## Transition

- Smooth changes to CSS properties.

- Instead of _instant_ change, properties _animate_ over time.

- Like a dimmer switch for a light - gradual fade, not just on/off.

- Shorthand of `transition-*` properties.

- `transition: <property> <duration> <timing-function> <delay>`

| <center>Parameter</center> | <center>Description</center>                                                                                                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property                   | Specifies the CSS property (or properties) to which the transition effect should be applied. You can use `all` to transition all animatable properties. If not specified, the transition will apply to any property that changes.                                                           |
| duration                   | Defines the duration of the transition. Use seconds (`s`) or milliseconds (`ms`).                                                                                                                                                                                                           |
| timing-function            | Describes the speed curve of the transition. Common values include `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, or you can define your own `cubic-bezier` function. Think of it as how the light fades in - does it start quickly and then slow down, or is the change constant? |
| delay                      | Specifies the amount of time to wait before the transition starts.                                                                                                                                                                                                                          |

## Timing Functions

- Control the speed of transitions/animations.

- Basically, how the animated thing changes over time.

- Like a car accelerating: timing function = how smooth/abrupt the acceleration is.

```css
.element {
    transition: opacity 1s; /* Transition of opacity over 1 second */
}

.element:hover {
    opacity: 0; /* Opacity changes on hover */
    transition-timing-function: ease; /* Default timing function */
}

.element.linear {
    transition-timing-function: linear; /* Constant speed */
}

.element.ease-in {
    transition-timing-function: ease-in; /* Starts slow, speeds up */
}

.element.ease-out {
    transition-timing-function: ease-out; /* Starts fast, slows down */
}

.element.ease-in-out {
    transition-timing-function: ease-in-out; /* Slow start and end */
}

.element.cubic-bezier {
    transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67); /* Custom curve */
}
```

| <center>Value</center> | <center>Description</center>                                                              |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| `linear`               | Super boring. Same speed the whole time. Predictable, but not exciting.                   |
| `ease-in`              | Starts slow, then gets faster.                                                            |
| `ease-out`             | Starts fast, then slows down.                                                             |
| `ease-in-out`          | Slow start, fast middle, slow end.                                                        |
| `cubic-bezier`         | Totally custom. You control exactly how fast or slow it goes at any point. Super precise! |
## Animation

- Animations w/o JS! Dynamic visuals on webpages.

- Keyframes = styles @ diff. animation stages. Smooth transitions between them.

- Control timing, duration, repetitions, etc.

- Analogy: Flipbook! Each page = keyframe. Flipping = animation.

```css
/* Basic Animation */
.box {
    width: 100px;
    height: 100px;
    background-color: blue;
    animation: wiggle 200ms 1s 8 none;
}

@keyframes wiggle {
    from {
        transform: rotateZ(0);
    }
    to {
        transform: rotateZ(10deg);
    }
}
```

### Multiple Keyframes

- CSS allows us to create multiple keyframes.

```css
/* Basic Animation */
.box {
    width: 100px;
    height: 100px;
    background-color: blue;
    animation-name: changeColor 2s infinite ease-in-out;
}

@keyframes changeColor {
    0% {
        background-color: blue;
    }
    50% {
        background-color: red;
    }
    100% {
        background-color: blue;
    }
}
```

## Animation Event Listener

- JavaScript provides more control and flexibility, especially for complex animations or those that need to interact with user events.

```javascript
document.addEventListener('animationstart', (event) => {});
document.addEventListener('animationend', (event) => {});
document.addEventListener('animationiteration', (event) => {});
```
