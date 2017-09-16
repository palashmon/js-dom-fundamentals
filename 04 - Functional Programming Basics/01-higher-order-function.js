/**
    Concept     :   Higher-order function
    Description :   A function that accepts another function as an argument
    Usability   :   Write code with less bugs & less time
    Source      :   https://www.youtube.com/watch?v=BMUiFMZr7vk&index=1&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
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
// Let's see, how we can do this using for loop like
const dogs = [];
for (let index = 0; index < animals.length; index++) {
    const animal = animals[index];
    if (animal.type === 'dog') {
        dogs.push(animal);
    }
}

console.log(dogs); // Outputs an array with three records
// In next example using filter we will see that we don't need to loop through each element inside array
// or push the valid matching elements based on our criteria
