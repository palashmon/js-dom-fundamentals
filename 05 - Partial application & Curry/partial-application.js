/**
    Concept     :   Partial Application of Functions
    Description :   Providing function with fewer arguments than it expects is called Partial Application of functions.
    Usability   :   Binding a function to fewer arguments helps us in generating other functions
                    to make our code less repetitive and more definitive
    Source      :   https://hackernoon.com/partial-application-of-functions-dbe7d9b80760
*/

// An example of Partial Application of functions using bind()
// @ts-check

// Created a function 'add' which accepts two arguments.
const add = (a, b) => a + b;

// We pre loaded it with a single argument and created a function 'increment' which takes only one argument.
const increment = add.bind(null, 1);

// We created another function by the same process of Partial Application,
// this time by applying a different argument.
const incrementBy2 = add.bind(null, 2);

// At last, we called our pre loaded functions with the final argument.
console.log('Increment 3 by 2:', incrementBy2(3));
//= > Increment 3 by 2: 5

console.log('Increment 3 by 1:', increment(3));
//= > Increment 3 by 1: 4
