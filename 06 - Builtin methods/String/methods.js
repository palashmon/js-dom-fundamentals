/**
 * String.prototype.endsWith()
 * Determines whether a string ends with the characters of a specified string,
 * returning true or false as appropriate
 */
var str = 'To be, or not to be, that is the question.';

console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be')); // false
console.log(str.endsWith('to be', 19)); // true
