/**
    Method      :   Array.prototype.includes()
    Description :   It determines whether an array includes a certain element, returning true or false as appropriate.
    Syntax      :   arr.includes(searchElement[, fromIndex])
*/

const L = console.log.bind(console);

{
	// Basic examples
	L([1, 2, 3].includes(2)); // true
	L([1, 2, 3].includes(4)); // false
	L([1, 2, 3].includes(3, 3)); // false
	L([1, 2, 3].includes(3, -1)); // true
	L([1, 2, NaN].includes(NaN)); // true
}

{
	// If fromIndex is greater than or equal to the length of the array, false is returned.
	// The array will not be searched.
	const arr = ['a', 'b', 'c'];

	L(arr.includes('c', 3)); //false
	L(arr.includes('c', 100)); // false

	// If the computed index is less than 0, the entire array will be searched.
	// array length is 3
	// fromIndex is -100
	// computed index is 3 + (-100) = -97
	L(arr.includes('a', -100)); // true
	L(arr.includes('b', -100)); // true
}
