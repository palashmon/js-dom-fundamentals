/**
    Method      :   Array.prototype.find()
    Description :   The find() method returns the value of the first element in the array 
    				that satisfies the provided testing function. Otherwise `undefined` is returned.
    Syntax      :   arr.find(callback[, thisArg])
*/

{
	// Find an object in an array by one of its properties
	const inventory = [
	    {name: 'apples', quantity: 2},
	    {name: 'bananas', quantity: 0},
	    {name: 'cherries', quantity: 5}
	];

	const findCherries = fruit => fruit.name === 'cherries';

	console.log(inventory.find(findCherries)); 
	// { name: 'cherries', quantity: 5 }
}
{
	// Find a prime number in an array
	var isPrime = function (element, index, array) {
		var start = 2;
		while (start <= Math.sqrt(element)) {
			if (element % start++ < 1) {
				return false;
			}
		}
		return element > 1;
	}

	console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
	console.log([4, 5, 8, 12].find(isPrime)); // 5
}