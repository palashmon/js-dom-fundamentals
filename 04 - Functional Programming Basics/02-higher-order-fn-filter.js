/**
    Concept     :   Higher-order function
    Description :   A function that accepts another function as an argument
    Usability   :   Write code with less bugs & less time
*/

// Use case Array.prototype.filter()
// The filter() method creates a new array with all elements
// that pass the test implemented by the provided function.
const animals = [
    { name: 'Waffles', type: 'dog', age: 12 },
    { name: 'Fluffy', type: 'cat', age: 14 },
    { name: 'Spunky', type: 'dog', age: 4 },
    { name: 'Hank', type: 'dog', age: 11 }
];

// Requirement get all the dogs from above array
// Let's see, how we can do this using higher-order function filter
const dogs = animals.filter(animal => animal.type === 'dog');

console.log(dogs); // Outputs an array with three records
// This is so less code
// We didn't have to loop through all array elements
// We didn't have to push the valid matching elements based on our criteria
// All was taken care by filter function
// More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
