# Day 5

## Kahoot
[Here](https://create.kahoot.it/details/45cb777e-bf20-4208-b12e-8b917febdb63)

## Agenda
- Survey!!
- Callbacks review - again!
- JS DOM
- Events

## Useful Docs
- [Javascript Events](https://www.w3schools.com/js/js_events.asp)
- [HTML script 'defer' attribute](https://www.w3schools.com/tags/att_script_defer.asp)
- [document.getElementById()](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
- [document.querySelector()](https://www.w3schools.com/jsref/met_document_queryselector.asp)
- [Math.random()](https://www.w3schools.com/jsref/jsref_random.asp)
- [Math.ceil()](https://www.w3schools.com/jsref/jsref_ceil.asp)

## Content
### Callback Functions
We've already dealt with them - a callback is just any function that gets passed as an argument to another, higher-order function to be called.

Here's a common pattern that we'll see in future: `Error-First Callbacks`.
- The higher-order function accepts a value and a callback function. 
- If the value is unacceptable, it hands an error + the value over to the callback. 
- If the value is acceptable, it hands `null` and the value over to the callback.

Example: 
```JS
function saySomething(someName, callbackFunction) {
    let errorText = null;

    if (typeof someName !== "string") {
        errorText = "Name must be a string";
    }

    callbackFunction(errorText, someName);
}

function hello(errorMessage, personsName) {
    if (errorMessage) {
        console.log(errorMessage);
        return
    }

    console.log(`Hello ${personsName}`);
}

function goodbye(errorMessage, personsName) {
    if (errorMessage) {
        console.log(errorMessage);
        return
    }

    console.log(`Goodbye ${personsName}`);
}

saySomething("Oliver", hello);
// >> "Hello Oliver"

saySomething([123, 456], goodbye);
// >> "Name must be a string"
```

### Event Handling And the DOM
Remember, an "event" is just something that happens to an HTML element. It can be as simple as "the element loaded on the page", but it can be more complex too - a button being clicked or a text field being modified.

We associate a javascript function with the event. Let's look at how that works:

- Clone down the starter code:
```Bash
git clone https://github.com/Oliver-CoderAcademy/dice_game.git
```
- Install packages:
```Bash
npm install
```

> Note that we are adding the script at the end of our `index.html` file! This is important, because we don't want our script to execute until the body has loaded. If the script executed too early, we wouldn't have any buttons to add event listeners to. Another solution is to use the `defer` attribute when we add our script tag - this is a better way IMO. It's relatively new too. Shiny!

```JS
// index.js

const button = document.getElementById("button");

function logEvent(event) {
    console.log(event.target, "clicked");
}

button.addEventListener("click", (event) => { logEvent(event) });

```

> The event object is actually pretty complex - remove that `.target` and check it out! It gets handed over to eventListener functions by default.

**KEY POINT** - get a load of that callback! Ask yourself: why do we need to hand through an anonymous callback here? Why not just say something like this?

```JS
// THIS WON'T WORK!
// Can you see why?
button.addEventListener("click", logEvent(event));
```

The reason is that we want to tell the button *what to do when it is clicked*. That means we need to hand it the **definition** of a function, not the result of a function execution. This is an extremely common pattern - we will frequently hand an anonymous callback to the DOM elements, which has the sole task of calling the real function we are interested in.

### Let's use it for something interesting now!

To use ES6 syntax for import/export, we need to tweak our package-lock so Jest will understand it:

```JSON
{
  "name": "dice-game",
  "version": "1.0.0",
  "description": "simple dice game in vanilla JS - used as intro to event handlers and DOM manipulation",
  "main": "index.js",
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Andrew-CC-Martin/dice-game.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Andrew-CC-Martin/dice-game/issues"
  },
  "homepage": "https://github.com/Andrew-CC-Martin/dice-game#readme",
  "devDependencies": {
    "jest": "^26.6.3"
  },
  "type": "module"
}
```

Let's set it up so that when the button is clicked, we "roll the die", and change the image on the page to be one of the six dice images in the `/images/` folder.

```JS
// src/utils.js

export function randomNumber() {
    return Math.ceil(Math.random()*6);
}

export function changeImgSrc(imageElement) {
    imageElement.src = `./images/${randomNumber()}.png`;
}
```

```JS
// index.js

import { changeImgSrc} from "./src/utils.js"

const button = document.getElementById("button");
const image = document.querySelector("img");

button.addEventListener("click", () => { changeImgSrc(image) });
```

> No need to change `index.html`, it should be good to go as-is.

We can use the DOM and events to change almost anything about our page! We can modify elements, css, content - you name it!