# Day 3

## Kahoot:
[https://create.kahoot.it/details/7d43a032-548e-4073-bb4c-e90166802241](https://create.kahoot.it/details/7d43a032-548e-4073-bb4c-e90166802241)

## Agenda:
- JSON discussion
- Node/NPM/Yarn
- Test Driven Design

## Useful Docs:
- https://www.json.org/json-en.html
- https://www.w3schools.com/js/js_json_intro.asp
- https://docs.npmjs.com/about-npm
- https://jestjs.io/docs/getting-started

## JSON:
### History...
- We have JSON because people needed a human-readable text format for transmitting program data.
- If we wanted to, we could have APIs that accepted standard strings and returned standard strings, but that would involve a lot of custom-coded serialisation of objects... Not very efficient. 
- It makes more sense to have a universal standard for turning objects into strings and strings into objects.
- JSON was first used in 2001, and was formalised with ECMA-404 in 2006. It is pretty much a 1-to-1 string depiction of Javascript objects (hence: `JavaScript Object Notation`), but it is used in almost every language as a nifty format for info, including a lot of NoSQL databases.

### Format...
Let's create a JS object:

```JS
let pikachu = {
    name: "Pikachu",
    elements: ["Electric"],
    lvl: 14
};
```

We can print it to console, and see it rendered as a string:

```JS
console.log(pikachu);

//>> { name: 'Pikachu', elements: [ 'Electric' ], lvl: 14 }
```

But if we console.log it's type:

```JS 
console.log(typeof pikachu);

//>> object
```

That means if we want to send it over the network, we are a bit stuck: we don't have a transmission protocol for sending raw objects from memory. We do have one for strings, though, so lets turn it into a JSON string:

```JS
console.log(JSON.stringify(pikachu));
console.log(typeof JSON.stringify(pikachu));

//>> {"name":"Pikachu","elements":["Electric"],"lvl":14}
//>> string
```

Almost exactly the same, except that the property names are treated as strings. That's fine, we do the same thing when we access properties using square bracket notation. Ex: `pikachu["name"]`.

Let's say we receive a string and want to turn it into an object. We call this "parsing" - to parse just means "to resolve the meaning of". First we need the object as a JSON string:

```JS
let caterpieString = '{"name":"Caterpie","elements":["Grass", "Bug"],"lvl":8}';
```

Then we can convert to an object:

```JS
let caterpie = JSON.parse(caterpieString);

console.log(caterpie);
console.log(typeof caterpie);
//>> { name: 'Caterpie', elements: [ 'Grass', 'Bug' ], lvl: 8 }
//>> object

console.log(caterpie.elements);
//>> [ 'Grass', 'Bug' ]
```

Nice!

### Files...
Finally, we can store JSON as a file. This is particularly useful if you have static data you want to load, or as a quick-and-dirty long-term storage medium. For instance, if you dump the contents of a database, it'll often be convenient to dump it as JSON.

```Bash
touch pokemon.json
```

```JSON
[
    {"name":"Caterpie","elements":["Grass", "Bug"],"lvl":8},
    {"name":"Pikachu","elements":["Electric"],"lvl":14},
    {"name":"Charizard","elements":["Fire", "Flying"],"lvl":69}
]
```
> Need to drop that into Discord...

```JS
pokemans = require('./pokemon.json');

console.log(pokemans);
console.log(typeof pokemans);

//>> [
//>>    { name: 'Caterpie', elements: [ 'Grass', 'Bug' ], lvl: 8 },
//>>    { name: 'Pikachu', elements: [ 'Electric' ], lvl: 14 },
//>>    { name: 'Charizard', elements: [ 'Fire', 'Flying' ], lvl: 69 }
//>> ]

//>> object

for (let pokemon of pokemans) {
    console.log(`${pokeon.name} is level ${pokeon.lvl}`)
}

//>> Caterpie is level 8
//>> Pikachu is level 14
//>> Charizard is level 69
```

---
## Coffee break!
---

## Node Packages:
- Packages are the Javascript equivalent of Ruby's Gems: pre-built libraries of useful functions and objects.
- To install, we can use NPM or Yarn. (Yarn is Facebook's creation and came out in 2016. It is a little faster to install. I'm old and crusty and use NPM. It's a little simpler and easier IMO.)

We are going to be going over some testing content later today, so let's install the Javascript testing library now: `Jest`.

```Bash
npm i -g jest
```

> The `i` argument indicates that we are **installing** the module. The `-g` flag indicates that we are installing it **globally**. We will also install it locally in our individual projects, but this is handy because it lets us call on Jest from the command line.

To initialise the package manager in a project repo, we run 

```Bash
mkdir highestNumber

cd highestNumber

git init

npm init -y
```

> The `-y` flag indicates that we want to automatically respond "yes" to any questions NPM asks us during initialisation.

Now let's install Jest locally in this project as a dependency:

```Bash
npm i jest --save-dev
```

> The `--save-dev` flag indicates that we are installing Jest only for the development version of this code. If we install dependencies for the production version, it won't install Jest. That makes sense, since you don't need to run tests once you're in production.

This does two things: 
- creates `package-lock.json` (different to package.json. package-lock just handles dependencies and manages the versions of them strictly. package.json is used for more: ex, defining the test script, etc.)
- creates this giant `node_modules` folder. Need to gitignore that!!

```Bash
touch .gitignore
```

```.gitignore
node_modules/
```

That should fix that! Now let's define our problem and do some test-driven development!

`Define a function that will accept an array as its input, and return the largest number in that array, even if it is a negative number. If there are no numbers in the array, it should return null. The function should ignore non-numbers without throwing an error.`

- Needs to be a function
- Accepts an array
- Returns null if no numbers
- Returns largest number if there are numbers
- Handles negative numbers
- Ignores non-numbers.

```js 
function highestNumber(arr) {

}

module.exports = highestNumber;
```

> Blank function.

```Bash
touch highestNumber.test.js

jest --init
```

> The first command is creating a test file for us to write our tests in. The second one is initialising Jest in our project environment. Check out what it did to our package.json file!

```JS
const highestNumber = require("./index");

test('accepts an array', () => {
    expect(highestNumber([])).toBe(null);
});
```

> We create our first test!

```Bash 
npm run test

```

It fails...

Let's work through each of our tests in turn and get them to pass!!

> Use `Math.max()` and `filter()` at first. Then refactor to be more efficient with a loop. This demonstrates how handy it is to have tests!

>

```JS
const highestNumber = require("./index");

describe('highestNumber', () => {
    it('accepts an array', () => {
        expect(highestNumber([])).toBe(null);
    }); 
});
```

## Challenge:

The marketing team is spending way too much time typing in hashtags. Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hash symbol (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
For example `"hello world"`=> `"#HelloWorld"` `"Hi there flex track"` => `"#HiThereFlexTrack"` `""` => `false` `"Today we live in a society in which spurious realities are manufactured by the media, by governments, by big corporations, by religious groups, political groups... So I ask, in my writing, What is real? Because unceasingly we are bombarded with pseudo-realities manufactured by very sophisticated people using very sophisticated electronic mechanisms. I do not distrust their motives; I distrust their power. They have a lot of it. And it is an astonishing power: that of creating whole universes, universes of the mind. I ought to know. I do the same thing."` => `false`
