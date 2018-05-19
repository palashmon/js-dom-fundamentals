/**
 * String.prototype.endsWith()
 * Determines whether a string ends with the characters of a specified string,
 * returning true or false as appropriate
 */
var str = 'To be, or not to be, that is the question.';

console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be')); // false
console.log(str.endsWith('to be', 19)); // true

/**
 * String.prototype.includes()
 * Determines whether one string may be found within another string,
 * returning true or false as appropriate.
 */
var str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be')); // true
console.log(str.includes('question')); // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1)); // false
console.log(str.includes('TO BE')); // false

/**
 * String.prototype.indexOf()
 * Returns the index within the calling String object of the first occurrence of the specified value,
 * starting the search at fromIndex. Returns -1 if the value is not found.
 */
var str = 'Brave new world';

console.log('Index of first w from start is ' + str.indexOf('w')); // logs 8
console.log('Index of "new" from start is ' + str.indexOf('new')); // logs 6
console.log('Index of "nonexistent" from start is ' + str.indexOf('nonexistent')); // logs -1

/**
 * String.prototype.lastIndexOf()
 * Returns the index within the calling String object of the last occurrence of the specified value,
 * searching backwards from fromIndex. Returns -1 if the value is not found.
 */
var anyString = 'Brave new world';

console.log('The index of the first w from the beginning is ' + anyString.indexOf('w')); // logs 8
console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w')); // logs 10
console.log('The index of "new" from the beginning is ' + anyString.indexOf('new')); // logs 6
console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new')); // logs 6
