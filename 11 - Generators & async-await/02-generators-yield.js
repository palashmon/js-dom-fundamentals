/**
 * Generators
 * The yield keyword is used to pause and resume a generator function (function *)
 */

// A simple inventors array of objects
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 }
];

// Loop over each inventor
function* loop(arr) {
    for (const item of arr) {
        yield item;
    }
}

// Store the generator will all yields in one variable
const inventorGen = loop(inventors);
for (const item of inventors) {
    console.log(inventorGen.next().value);
}

// Outputs
/*
    { first: 'Albert', last: 'Einstein', year: 1879 }
    { first: 'Isaac', last: 'Newton', year: 1643 }
    { first: 'Galileo', last: 'Galilei', year: 1564 }
    { first: 'Marie', last: 'Curie', year: 1867 }
    { first: 'Johannes', last: 'Kepler', year: 1571 }
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 }
    { first: 'Max', last: 'Planck', year: 1858 }
*/
