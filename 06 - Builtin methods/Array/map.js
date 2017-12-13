/**
    Method      :   Array.prototype.map()
    Description :   It creates a new array with the results of calling a provided function 
    				on every element in the calling array.
    Syntax      :   const new_array = arr.map(callback[, fromIndex])
*/

const L = console.log.bind(console);

{
	// Mapping an array of numbers to an array of square roots
	const numbers = [1, 4, 9];
	const roots = numbers.map(Math.sqrt);
	L({ roots, numbers });
	// roots is now [1, 2, 3]
	// numbers is still [1, 4, 9]
}

{
	// Using map to reformat objects in an array
	const kconstray = [{ key: 1, value: 10 },
		{ key: 2, value: 20 },
		{ key: 3, value: 30 }
	];

	const reformattedArray = kconstray.map(function(obj) {
		const rObj = {};
		rObj[obj.key] = obj.value;
		return rObj;
	});

	L(reformattedArray);
	// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 
}

{
	// Mapping an array of numbers using a function containing an argument
	const numbers = [1, 4, 9];
	const doubles = numbers.map(function(num) {
		return num * 2;
	});

	L(doubles);
	// doubles is now [2, 8, 18]
}

{
	// Using map generically querySelectorAll
	const elems = document.querySelectorAll('select option:checked');
	const values = Array.prototype.map.call(elems, function(obj) {
		return obj.value;
	});

	L(values);
}

{
	// Easier way would be using Array.from() method.
	const elems = Array.from(document.querySelectorAll('.highlight-span'));
	const values = elems.map(function(obj) {
		return obj.textContent;
	});

	L(values);
}
