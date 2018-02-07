/**
    Method      :   Array.prototype.some()
    Description :   The some() method tests whether at least one element in the array
                    passes the test implemented by the provided function.
    Syntax      :   arr.some(callback[, thisArg])
*/

const L = console.log.bind(console);

{
	// Tests whether any element in the array is bigger than 10.
	L([(2, 5, 8, 1, 4)].some(x => x > 10)); // false
	L([12, 5, 8, 1, 4].some(x => x > 10)); // true
}

{
	// Checking whether a value exists in an array
	const fruits = ['apple', 'banana', 'mango', 'guava'];

	function checkAvailability(arr, val) {
		return arr.some(arrVal => val === arrVal);
	}

	L(checkAvailability(fruits, 'test')); // false
	L(checkAvailability(fruits, 'banana')); // true
}
