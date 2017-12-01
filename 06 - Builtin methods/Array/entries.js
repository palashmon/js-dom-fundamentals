/**
    Method      :   Array.prototype.entries()
    Description :   The entries() method returns a new Array Iterator object
                    that contains the key/value pairs for each index in the array.
    Syntax      :   a.entries()
                    Return value: A new Array iterator object.
*/

{
    const a = ['a', 'b', 'c'];
    const iterator = a.entries();

    console.log(iterator.next().value); // [0, 'a']
    console.log(iterator.next().value); // [1, 'b']
    console.log(iterator.next().value); // [2, 'c']
}
{
    const a = ['a', 'b', 'c'];
    const iterator = a.entries();

    for (const i of iterator) {
        console.log(i);
    }
    // [0, 'a']
    // [1, 'b']
    // [2, 'c']
}
{
    // Convert integer into its character equivalent
    // 0 => a, 1 => b, etc.
    const a = Array.from({ length: 5 }, (v, i) => String.fromCharCode(97 + i));
    const iterator = a.entries();
    for (const i of iterator) {
        console.log(i);
    }
    // [0, 'a'];
    // [1, 'b'];
    // [2, 'c'];
    // [3, 'd'];
    // [4, 'e'];
}
