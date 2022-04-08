# Day 4

## Kahoot:
[https://create.kahoot.it/details/113e2410-c9e1-4207-af34-79cf617fb71f](https://create.kahoot.it/details/113e2410-c9e1-4207-af34-79cf617fb71f)

## Agenda:
- Exceptions discussion
    - Try
    - Catch
    - Throw
    - Finally
- TDD walkthrough (with exceptions!)
- Challenge time!

## Useful Docs:
- [JS Errors](https://www.w3schools.com/js/js_errors.asp)
- [Expect().toThrow() - Jest](https://jestjs.io/docs/expect#tothrowerror) (this whole page is useful for the expect function!)

## Content:

Today's content has no new setup/boilerplate to worry about: check out yesterday's lesson plan for how to initialise NPM and Jest for your project dir. :D

## Problem Statement:

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

### inputs
- An array an of numbers
- n - a number
### output
- An array of numbers
- Potentially, smaller than input
