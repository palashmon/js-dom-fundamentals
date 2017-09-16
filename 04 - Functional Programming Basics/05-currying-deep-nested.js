/**
    Concept     :   Currying
    Purpose     :   Modify our traditional function to use this approach for dealing with arguments
    Description :   Currying is a way of constructing functions that allows partial application of a function's arguments
    Usability   :   It allows you to generate a library of small, easily configured functions that behave consistently,
                    are quick to use, and that can be understood when reading your code.
*/

/*
// This is our traditional function
var greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};
*/

// Let us modify it to use this Currying approach
const greetDeeplyCurried = function(greeting) {
    return function(separator) {
        return function(emphasis) {
            return function(name) {
                console.log(greeting + separator + name + emphasis);
            };
        };
    };
};

const greetAwkwardly = greetDeeplyCurried('Hello')('...')('?');
greetAwkwardly('Heidi');

const sayHello = greetDeeplyCurried('Hello')(', ');
sayHello('.')('Heidi');

const askHello = sayHello('?');
askHello('Heidi');
