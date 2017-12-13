/**
    Method      :   Array.prototype.forEach()
    Description :   It executes a provided function once for each array element.
    Syntax      :   arr.forEach(callback[, thisArg])
*/

{
	// Copy items from one to another
	const items = ['item1', 'item2', 'item3'];
	const copy = [];

	items.forEach(function(item) {
		copy.push(item)
	});
}

{
	// Printing the contents of an array
	function logArrayElements(element, index, array) {
		console.log('a[' + index + '] = ' + element);
	}

	// Notice that index 2 is skipped since there is no item at
	// that position in the array.
	[2, 5, , 9].forEach(logArrayElements);
	// logs:
	// a[0] = 2
	// a[1] = 5
	// a[3] = 9
}

{
	// An object copy function
	function copy(obj) {
		const copy = Object.create(Object.getPrototypeOf(obj));
		const propNames = Object.getOwnPropertyNames(obj);

		propNames.forEach(function(name) {
			const desc = Object.getOwnPropertyDescriptor(obj, name);
			Object.defineProperty(copy, name, desc);
		});

		return copy;
	}

	const obj1 = { a: 1, b: 2 };
	const obj2 = copy(obj1); // obj2 looks like obj1 now

	console.log({ obj1, obj2 });

	// Modifying a value in copied object does not modify the first object
	// obj2.a = 3;
	// console.log({obj1, obj2});
}
