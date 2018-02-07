/**
    Method      :   Array.prototype.slice()
    Description :   The slice() method returns a shallow copy of a portion of an array into a new array object
                    selected from begin to end (end not included). The original array will not be modified.
    Syntax      :   arr.slice([begin[, end]])
*/

const L = console.log.bind(console);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// 3rd to last element in array
L(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

// Only 3rd and 4th element in the array
L(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

// 2nd to 5th element in the array
L(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// Last two elements in the array
L(animals.slice(-2));
// ["duck", "elephant"]

// First 2 elements in the array
L(animals.slice(0, 2));
// ["ant", "bison"]
