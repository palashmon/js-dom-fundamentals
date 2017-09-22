/**
    Concept     :   Functor
    Description :   A functor is simply something that can be mapped over like array, promises, streams, etc.
                    In OOP-speak, we'd call it a 'Mappable' instead.
    Usability   :   Functors are great higher-order abstractions that allow us to create a variety
                    of generic functions that will work for any data type.
    Source      :   https://www.youtube.com/watch?v=YLIH8TKbAh4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=9
*/

{
    // Create a function to
    // 1. Add 1 to a integer value
    // 2. Add 1 to each integer item in an array, [3,4] ==> [5,6]
    // 3. Increment each character in a array, ['ABC'] ==> ['BCD']
    function plus1(value) {
        if (Array.isArray(value)) {
            return value.map(v => v + 1);
        } else if (typeof value === 'string') {
            const chars = value.split('');
            return chars.map(c => String.fromCharCode(c.charCodeAt(0) + 1)).join('');
        } else {
            return value + 1;
        }
    }

    // View the data in console
    console.log(plus1(4)); // 5
    console.log(plus1([3, 4])); // [ 4,5 ]
    console.log(plus1('ABC')); // BCD
}

{
    // Let us create string functor and minimize the plus1 code to just do the main logic
    // @param {function} callback - A callback to run whose signature is (plus1)
    function stringFunctor(value, callback) {
        const chars = value.split('');

        // We are passing the c.charCodeAt(0) to the callback so that
        // we can implement any arithmetic logic as needed later
        return chars.map(c => String.fromCharCode(callback(c.charCodeAt(0)))).join('');
    }

    function plus1(value) {
        return value + 1;
    }
    function minus1(value) {
        return value - 1;
    }

    console.log();
    console.log(plus1(4)); // 5
    console.log([3, 4].map(plus1)); // [ 4,5 ]
    console.log([3, 4].map(minus1)); // [ 2,3 ]
    console.log(stringFunctor('BCD', plus1)); // CDE
    console.log(stringFunctor('BCD', minus1)); // ABC
}
