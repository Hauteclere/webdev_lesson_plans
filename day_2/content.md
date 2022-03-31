# Day 2

## [Kahoot](https://create.kahoot.it/my-library/kahoots/bc360356-a449-4670-9e1b-c34a4ff8fe02) here, first. --> ~9.40am

## Content:

Looking at functions for the first time in JS, you could be forgiven that the main difference between them and Ruby's methods is their syntax. In fact, however, they have some major differences in terms of what they actually *are* under the hood. Let's take a look at some of those now.

## Javascript Functions are First Class Citizens
In Ruby, we're used to a pretty neat division between methods and objects. This is respected in the syntax, and if you ever want to treat a method like an object, you need to use tricks like invoking the Method class as a proxy.

In Javascript there is no such division. Functions are objects. We say that they are "first class objects" or "first class citizens" because they are treated just the same as the other objects in the language, and not relegated to a restricted set of behaviour or syntax arrangements.

This means that it's perfectly sensible to do this:

```JS
function sayHi() {
    console.log("hi!");
}

let myFunction = sayHi;
```

This saves the function to a variable, by referring to it by name. Why not; functions are objects, and objects can be assigned to varibales! Notice how we don't append the `()` to our function here - we aren't **invoking it**, we are just **referring to it**.

If a variable has a function as its value, you can invoke the function by calling the variable with `()`, like so:

```JS
myFunction();

// >> hi!
```

But it doesn't stop here: since we can pass a function as a value, we can pass it as an **argument** too!

```JS
function saySomething(name, greetingFunction) {
    console.log(greetingFunction() + " " + name + "!");
}

function sayHi() {
    return "Hi"
}

function sayGday() {
    return "Gday"
}

saySomething("Oliver", sayHi);
// >> Hi Oliver!
saySomething("Alex", sayGday);
// >> Gday Alex!
```

And of course, we can also use a function as a return value too:

```JS
// This function adds its arguments.
function addArgs(...args) {
    let result = 0;
    for (arg of args) {
        result+=arg;
    }
    return result;
}

// This function subtracts subsequent arguments from the first argument.
function subtractArgs(...args) {
    let result=args[0];
    for (arg of args.slice(1)) {
        result -= arg;
    }
    return result;
}

// This function returns another function, which performs the mathematical operation you specified!
function arithmetic(operation) {
    switch (operation) {
        case "add":
            return addArgs;
        case "subtract":
            return subtractArgs;
        default:
            throw "I don't know that how to do that"
    }
}

// We ask our arithmetic function to output two different mathematical operations as functions
let operation1 = arithmetic("add");
let operation2 = arithmetic("subtract");

// Then we execute them!
console.log(operation1(4, 2, 1));
// >> 7

console.log(operation2(4, 2, 1));
// >> 1
```

Gang, this is SO powerful.

## Javascript Functions Can Be Anonymous

If we can pass a function as a value, then we can have the value in isolation - it doesn't need a name!

```JS
let sayHi = function () {
    console.log("Hi!");
}

sayHi();
// >> Hi!
```

Here we created an anonymous function and immediately assigned it to a variable, but we could have just as easily passed it as an argument or returned it as a value.

This lets us use the arrow function syntax from ES6:

```JS
let sayHi = () => {
    console.log("Hi!");
}
```

This is slightly neater and shorter.

## Javascript Functions Have Explicit Returns

You've probably noticed by now. In Ruby, the output of the last statement in a function will be what it returns. In Javascript you have to be more explicit than that. If you don't explicitly return something then the `undefined` value will be what is returned.

## Javascript Functions are Hoisted (When They're Explicitly Declared With a Function Signature)

```JS
// This works because of hoisting!

functionA();


function functionA() {
    console.log("Function A");
};
```

```JS
// This doesnt:

functionB();

const functionB = () => {
    console.log("FunctionB");
}
```

## Scope

- The `let` and `const` keywords give variables **block scope** when called inside a block.
- The `var` keyword gives **function scope** when called inside a function. *This can be a source of bugs!*
- Calling `let`, `const` or `var` outside of a block or function, or declaring a variable with no keyword at all, gives **global scope**. *This can be a MAJOR source of bugs!*

## Challenge: [here](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/) 
