# Ruby vs JavaScript - Day 1
 
 - Talk about assessment!! 
 - Talk about hackathon!!
 - Remember: managing workload is part of being professional. Do both.

```brew install node```

```sudo apt install nodejs```

## History of JS:

- Why does it exist?
- NOT related to Java
- ES6!! Big update in 2016. Lots of new features, lots of stuff now deprecated.

## Rule 1 - CONSTANT VIGILANCE
Javascript requires us to be a bit more disciplined than other languages - it will allow us to write code the wrong way, and try to interpret it for us anyway. The best way to avoid mistakes is to stay vigilant, and not depend on the interpreter to rescue our bad code.

## Reminder: Statements vs Expressions
A statement is a single command. It is a discrete chunk of code that can be executed to make something **happen**. Statements can can be long or short, and can span multiple lines. Any time you tell the interpreter to _do something_, you're executing a statement.

An expression is a piece of code that can be evaluated. It is a discrete chunk of code that can be executed to **produce a value**. Any time you tell the interpreter to _use the value_ of something, you're evaluating an expression.

The distinction is subtle! The same code can be either, depending on context. Ex:

```Ruby
# Ruby

b = 10
a = b   # Here, a = b is acting as a statement because it *does the job* of assigning a value to a

puts a 
# >> 10
```

```Ruby
# Ruby

b = 10
c = a = b   # Here, a = b is acting as an expression, because it *returns the value* 10
            # It isn't a complete statement; the statement is the whole line, `c = a = b`.

puts c
# >> 10
```

### Why does this matter?
Ruby lets us terminate a statement with a simple line break. Starting a new line signals the end of the statement, and the interpreter merrily executes it.

In Javascript, statements should be terminated with a semicolon: `;`

Strictly speaking, a statement without a semicolon at the end of it is a syntax error, however... The interpreter will help you out most of the time, and insert them where you've forgotten them. This means they're optional. Example:

```Ruby
# Ruby

puts "Hello world"
```
```Javascript
// Javascript

console.log("Hello world");
console.log("Hello world again!") // no semicolon, still works!
```

> Sometimes the interpreter will betray you! I try to always include them, to be as correct as possible, and to avoid tricky bugs.  CONSTANT VIGILANCE! 
>> Other developers say the opposite. It's up to you. Just be consistent!

You don't need a semicolon at the end of a code block:

```Javascript
// Javascript

for(let i=0; i<3; i++){ 
    console.log("hi!"); 
} // no semicolon here
```


## Variables

In Ruby we can declare a variable just be giving its name and a value. Ex:

```Ruby
# Ruby
name = "Oliver"
```

In Javascript we need to be a little more explicit. We declare a regular variable with `let`:

```Javascript
// Javascript

let name = "Oliver";
```

Once you've declared a variable once, trying to re-declare will cause a syntax error. Just assign it a new value. 

```Javascript
// Javascript

let name = "Oliver";

// let name = "Anteres" 
// ^^this throws an error!

name = "Antares"; // this is fine

```

Variables declared in this way have **block scope**. They can't be accessed outside of the block they exist in:

```Javascript
// Javascript

{
    let name = Oliver;
}

console.log(name); // ERROR!
```

This is **good**. Block scope is **safe**. It lets us keep our data safely corralled. 

Javascript will let you get away with omitting the `let` keyword, but with the upsetting consequence that it will secretly dump your variable into the *global* scope. This is dangerous! CONSTANT VIGILANCE! 

Global variables are the kind of thing you should use very infrequently, and **never by accident**. Always use `let` for declaration.

```Javascript
// Javascript
// DON'T DO THIS:

let name = "Oliver";

{
    name = "Antares";
}

console.log(name); 
// >> Anteres
// OH NO! my variable has exploded out of the block scope!
```

### The ancient curse of `var`

Way back in the day, before `let` came along, variables in Javascript were declared with `var`. `var` has much more annoying scoping rules and was a major source of bugs. You will often see tutorials online using `var`, which are left over from the bad old days. We strongly recommend you stick to `let` - your code will thank you!

## Constants

In Ruby we can create a constant by giving our variable a name that starts with a capital letter:

```Ruby
# Ruby

Name = "Oliver"
```

In Javascript we are a little more explicit again. We use `const`:

```Javascript
// Javascript

const name = "Oliver";
```

Attempting to reassign a value for a constant will throw an error:

```Javascript
// Javascript

const name = "Oliver";

name = "Antares"; // ERROR!
```

## Primitives

In Ruby, **everything** is an object. This makes coding a bit simpler sometimes, and is quite aesthetically pleasing. This means that every variable name in Ruby is 'refers' to some code object in memory. 

The downside is that this can be slower. Objects are complex, and can chew up memory. Javascript gains a bit of efficiency by having a second, smaller type of data - the *primitive*.

Primitives exist solely as a value. They can't be given properties, and they are immutable. If you want to convert a string to uppercase, you need to reassign it with the new value!

The primitive types are:

### string
```Javascript
// Javascript

let name = "Oliver";

// strings are immutable!
name[1] = "J";

console.log(name);
```

### number
```Javascript
// Javascript

let age = 33;
```

### boolean
```Javascript
// Javascript

let canDrive = true;
```

> A note on Boolean expressions: Javascript mostly has the same comparison operators that you're used to, but there's a catch. The **equality** `==` and **inequality** `!=` operators play things a little fast and loose. Javascript will try to coerce the expressions on either side of these operators into more suitable types if their types don't immediately match. This gives us some weirdness. For example: `"\t\r\n" == 0` returns `true`. In most cases I recommend using the **"strict"** versions of the equality and inequality operators instead: `===` and `!==`.

### null
```Javascript
// Javascript

let ageFirstSpeedingFine = null; // explicitly initialised to the null value - hasn't had a ticket yet
```

### undefined
```Javascript
let hatSize; // variable exists, but hasn't been given a value yet!

console.log(hatSize); // undefined
```

### bigint
### symbol
```
Let's not worry about these two for now.
```

**Everything else is a reference type - i.e., an object!**

## Objects

A Javascript `object` is quite similar to a `hash` in Ruby. 

```Javascript
// Javascript

const person = {
    name: "Oliver",
    age: 33,
    canDrive: true
};

// Remember, you can't reassign a constant. BUT if it is mutable you can mutate it!

person.name = "Antares";

// Javascript also gives us the glorious ability to assign a function to an object as a property. In this way, Javascript objects are a bit like class instances from Ruby. 

person.says = (function () {
   console.log("hi!");
});

person.says(); // >> hi!

// objects can be nested just like you'd expect:

person.inventory = {
    pocket: "keys",
    backpack: "laptop"
};

console.log(person);

// function properties can be accessed by dot notation:

console.log(person.name);

// we can also use a square bracket notation:

console.log(person["name"]);

```

> It should be noted that Javascript doesn't have class inheritance like Ruby does. It **claims** to have classes, and even introduced the `class` keyword in ~2015. However, Javascript actually only has `prototypes`! These are not the same as classes. A prototype is an object instance, and other objects can inherit from the prototype! This is happening under the hood even when you use the class keyword. We'll talk more about this later.

## Arrays 

Arrays in Javascript are a type of object. You can make them as a literal:

```Javascript
/// Javascript

const myArray = [4, 3, 2, 1];

// access them as usual:

console.log(myArray[0]); // >> 4

// they also have methods associated with them:

myArray.sort();

console.log(myArray); // >> [1, 2, 3, 4]

// and even autogenerated properties:

console.log(myArray.length); // >> 3
```

## Loops!

We have `while` loops:

```Javascript
// javascript

let count = 0;

while (count < 3) {
    console.log("hi");
    count += 1;
}
```

`do-while` loops:

```Javascript
// javascript

let count = 0;

do {
    console.log("hi");
    count += 1;
} while (count < 3);
```

`for` loops:

```Javascript
// javascript

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

`for-in` loops (for iterating through the properties of objects):


```Javascript
// javascript

const person = {fname:"Oliver", lname:"Lavers"};

let text = "";
for (let x in person) {
  text += person[x];
}
```

and `for-of` loops (for iterating through the values of iterables. use these to loop through arrays!):

```Javascript
// javascript

const ingredients = ["onions", "garlic", "celery", "balsamic vinegar"];

for (let element of ingredients) {
  console.log(element);
}
```

## "Falsy" and "Truthy" values

Almost every value in Javascript is `truthy`. The exceptions are:

- The explicit `false` boolean
- The various numbers that mean zero: `0`, `0.0`, `-0` and `0.0`, etc
- The empty string values: `""`, `''`, ``` `` ```
- The `null` value
- The `undefined` value
- `NaN`, which means "Not a Number"

## Switch/Case

Looks like this!

```Javascript
// javascript

switch(expression) {
  case x:
    // code block
    break; 
  case y:
    // code block
    break;
  default:
    // code block
}
```

Note those `break;` statements! If you don't include those, the interpreter will execute every case after the first match it finds!

# Challenge:
[Alphabet Encoder](https://www.codewars.com/kata/546f922b54af40e1e90001da)

> extra challenge: write a second function that will take a string of numbers separated by spaces, and encode them back into plaintext!