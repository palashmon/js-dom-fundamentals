/**
    Method      :   Array.prototype.reduce()
    Description :   The reduce() method applies a function against an accumulator
                    and each element in the array (from left to right) to reduce it to a single value.
    Syntax      :   arr.reduce(callback[, initialValue])
*/

const L = console.log.bind(console);

{
	// Sum all the values of an array
	const total = [0, 1, 2, 3].reduce((acc, cur) => acc + cur, 0);
	L(total);
}

{
	// Flatten an array of arrays
	const flattened = [[0, 1], [2, 3], [4, 5]].reduce((acc, cur) => acc.concat(cur), []);
	L(flattened);
}

{
	// Counting instances of values in an object
	const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

	const countedNames = names.reduce((allNames, name) => {
		if (name in allNames) {
			allNames[name]++;
		} else {
			allNames[name] = 1;
		}
		return allNames;
	}, {});
	L(countedNames);
}

{
	// Running Promises in Sequence
	/**
	 * Runs promises from promise array in chained manner
	 *
	 * @param {array} arr - promise arr
	 * @return {Object} promise object
	 */
	function runPromiseInSequence(arr) {
		return arr.reduce((promiseChain, currentPromise) => {
			return promiseChain.then(chainedResult => {
				return currentPromise(chainedResult).then(res => res);
			});
		}, Promise.resolve());
	}

	// promise function 1
	function p1() {
		return new Promise((resolve, reject) => {
			resolve(5);
		});
	}

	// promise function 2
	function p2(a) {
		return new Promise((resolve, reject) => {
			resolve(a * 2);
		});
	}

	// promise function 3
	function p3(a) {
		return new Promise((resolve, reject) => {
			resolve(a * 3);
		});
	}

	const promiseArr = [p1, p2, p3];
	runPromiseInSequence(promiseArr).then(res => {
		L(res); // 30
	});
}
