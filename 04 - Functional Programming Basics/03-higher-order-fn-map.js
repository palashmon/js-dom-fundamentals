/**
    Concept     :   Higher-order function - map()
    Description :   The map() method creates a new array with the results of calling
                    a provided function on every element in the calling array
    Usability   :   Write code with less bugs & less time
    Source      :   https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2
*/

// Use case Array.prototype.map()
// Returns a new array with each element being the result of the callback function

const animals = [
    { name: 'Waffles', type: 'dog', age: 12 },
    { name: 'Fluffy', type: 'cat', age: 14 },
    { name: 'Spunky', type: 'dog', age: 4 },
    { name: 'Hank', type: 'dog', age: 11 }
];

// Requirement get all the animal names from above array into a new array
// Let's see, how we can do this using for loop
/*
const animalNames = [];
for (let index = 0; index < animals.length; index++) {
    const animal = animals[index];
    animalNames.push(animal.name);
}
*/

// Let's see, how we can do this using higher-order function map
const animalNames = animals.map(animal => animal.name);
// Minimal code, less bugs, less production time

console.log(animalNames);
// Output
// [ 'Waffles', 'Fluffy', 'Spunky', 'Hank' ]
