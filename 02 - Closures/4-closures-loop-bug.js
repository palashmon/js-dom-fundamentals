// Because closures have access to the updated values of the outer function’s variables,
// they can also lead to bugs when the outer function’s variable changes with a for loop

const funcs = [];
for (let i = 0; i < 3; i++) {
    // let's create 3 functions
    funcs[i] = () => {
        // and store them in funcs
        console.log(`My value: ${i}`); // each should log its value.
    };
}
for (let j = 0; j < 3; j++) {
    funcs[j](); // and now let's run each one to see
}

/*
It outputs this:

My value: 3
My value: 3
My value: 3

When we might have thought the output like:

My value: 0
My value: 1
My value: 2

This happens since when we call the inner anonymous function,
it already has access to the outer function variable i, last updated value.
Which is 3, as we have also seen in `3-closures-store-references.js` code.

*/
