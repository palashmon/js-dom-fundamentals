/**
    Method      :   Function.prototype.apply()
    Description :   The apply() method calls a function with a given this value,
                    and arguments provided as an array (or an array-like object).
    Syntax      :   func.apply(thisArg, [argsArray])
*/

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2
