/**
    Concept     :   Currying
    Description :   Currying is a way of constructing functions that allows partial application of a function's arguments
                    What this means is that you can pass all of the arguments a function is expecting
                    and get the result, or pass a subset of those arguments
                    and get a function back that’s waiting for the rest of the arguments. It really is that simple.
    Usability   :   It allows you to generate a library of small, easily configured functions that behave consistently,
                    are quick to use, and that can be understood when reading your code.
    Source      :   https://www.youtube.com/watch?v=iZLP4qOwY8I&index=6&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
                    https://www.sitepoint.com/currying-in-functional-javascript/
*/
// @ts-check
// Created a function 'add' which accepts two arguments.
const add = x => y => x + y;

// Created a function 'increment' which takes only one argument 1
const increment = add(1);

// We created another function, but this time by passing a different argument.
const incrementBy2 = add(2);

// At last, we called our pre loaded functions with the final argument.
console.log('Increment 3 by 1:', increment(3));
//= > Increment 3 by 1: 4

console.log('Increment 3 by 2:', incrementBy2(3));
//= > Increment 3 by 2: 5
