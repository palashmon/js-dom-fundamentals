/**
    Method      :   Array.prototype.every()
    Description :   The every() method tests whether all elements in the array
                    pass the test implemented by the provided function.
    Syntax      :   arr.every(callback[, thisArg])
*/

{
    // Testing size of all array elements
    // The following example tests whether all elements in the array are bigger than 10.
    function isBigEnough(element) {
        return element >= 10;
    }
    const result1 = [12, 5, 8, 130, 44].every(isBigEnough);
    const result2 = [12, 54, 18, 130, 44].every(isBigEnough);

    console.log(result1); // false
    console.log(result2); // true
}
{
    // Arrow functions provide a shorter syntax for the same test.
    const result1 = [12, 5, 8, 130, 44].every(x => x >= 10);
    const result2 = [12, 54, 18, 130, 44].every(x => x >= 10);

    console.log(result1); // false
    console.log(result2); // true
}
