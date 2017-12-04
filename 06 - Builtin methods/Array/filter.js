/**
    Method      :   Array.prototype.filter()
    Description :   The filter() method creates a new array with all elements 
    				that pass the test implemented by the provided function.
    Syntax      :   var newArray = arr.filter(callback[, thisArg])
*/

{
	// Filtering out all small values
	function isBigEnough(value) {
	  	return value >= 10;
	}

	var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
	console.log(result1);
	// [12, 130, 44]
}
{
	// Filtering invalid entries from JSON
	const arr = [
		{ id: 15 },
		{ id: -1 },
		{ id: 0 },
		{ id: 3 },
		{ id: 12.2 },
		{ },
		{ id: null },
		{ id: NaN },
		{ id: 'undefined' }
	];

	let invalidEntries = 0;

	function isNumber(obj) {
	  return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
	}

	function filterByID(item) {
	  if (isNumber(item.id)) {
	  	return true;
	  } 
	  invalidEntries++;
	  return false; 
	}

	const arrByID = arr.filter(filterByID);

	console.log('Filtered Array\n', arrByID); 
	// Filtered Array
	// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

	console.log('Number of Invalid Entries = ', invalidEntries); 
	// Number of Invalid Entries = 4
}
{
	// Searching in array
	const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

	/**
	* Array filters items based on search criteria (query)
	*/
	function filterItems(query) {
		return fruits.filter(el => el.toLowerCase().includes(query.toLowerCase()))
	}

	console.log(filterItems('ap')); // ['apple', 'grapes']
	console.log(filterItems('an')); // ['banana', 'mango', 'orange']
}