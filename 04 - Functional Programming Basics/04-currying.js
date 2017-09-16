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

// Simple greet function
const greet = function(greeting, name) {
    console.log(`${greeting}, ${name}`);
};
greet('Hello', 'Ben'); // "Hello, Ben"

// Our First Curry
const greetCurried = function(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}`);
    };
};

// We get the function as a return value after passing 1st argument
// and then pass 2nd name argument to that function
const greetHello = greetCurried('Hello');
greetHello('Heidi'); // "Hello, Heidi"
greetHello('Eddie'); // "Hello, Eddie"

// We can also call the original curried function directly
// just by passing each of the parameters in a separate set of parentheses, one right after the other
greetCurried('Hi there')('Howard'); // "Hi there, Howard"
