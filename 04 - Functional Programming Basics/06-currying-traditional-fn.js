/**
    Concept     :   Currying
    Purpose     :   Currying Traditional Functions
    Description :   Currying is a way of constructing functions that allows partial application of a function's arguments
    Usability   :   It allows you to generate a library of small, easily configured functions that behave consistently,
                    are quick to use, and that can be understood when reading your code.
    Further Reading: https://lodash.com/docs/4.17.4#curry
*/

// Currying function that will take the name of an existing function
// that was written without all the nested returns
const myCurry = function(uncurried, ...parameters) {
    return function(...args) {
        return uncurried.apply(this, parameters.concat(args));
    };
};

// Our traditional function
const greeter = function(greeting, separator, emphasis, name) {
    console.log(greeting + separator + name + emphasis);
};

const greetHello = myCurry(greeter, 'Hello', ', ', '.');
greetHello('Heidi');

const greetGoodbye = myCurry(greeter, 'Goodbye', ', ');
greetGoodbye('.', 'Joe');

// Create some space
console.log('');

// Let see some other examples here
const getFullArray = function(a, b, c) {
    console.log([a, b, c]);
};

const curried1 = myCurry(getFullArray, 1, 2);
curried1(3);
// => [1, 2, 3]

const curried2 = myCurry(getFullArray);
curried2(4, 5, 6);
// => [4, 5, 6]
