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
