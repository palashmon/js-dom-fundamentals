/**
    Method      :   Array.from()
    Description :   Creates a new Array instance from an array-like or iterable object.
    Syntax      :   Array.from(arrayLike[, mapFn[, thisArg]])
*/

{
    // console log shortcut
    const log = console.log.bind(console);

    // Array from a String
    let foo = Array.from('foo');
    log(foo); // ["f", "o", "o"]

    // Array from a Set
    const s = new Set(['foo', window]);
    foo = Array.from(s);
    log(foo); // ["foo", window]

    // Array from a Map
    const m = new Map([[1, 2], [2, 4], [4, 8]]);
    foo = Array.from(m);
    log(foo); // [[1, 2], [2, 4], [4, 8]]

    // Array from an Array-like object (arguments)
    function getArgs() {
        console.log(typeof arguments); // object
        return Array.from(arguments); // array
    }

    foo = getArgs(1, 2, 3);
    log(foo); // [1, 2, 3]

    // Using arrow functions and Array.from
    foo = Array.from([1, 2, 3], x => x + x);
    log(foo); // [2, 4, 6]

    // Empty array of length 2
    foo = Array.from({ length: 2 });
    log(foo); // [undefined, undefined]

    // Generate a sequence of numbers
    // Since the array is initialized with `undefined` on each position,
    // the value of `v` below will be `undefined`
    foo = Array.from({ length: 5 }, (v, i) => i + 1);
    log(foo); // [1, 2, 3, 4, 5]
}
