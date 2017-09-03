// Previous example closure related issue can we easily fixed,
// Once we have understood why it occurred in first place.

const funcs = [];

// Since there is no block scope in JavaScript - only function scope -
// by wrapping the function creation in a new function,
// we ensure that the value of "i" remains as you intended.
function createfunc(i) {
    // So, this inner function has only access to outer function createfunc i variable
    // and nothing else outside this function scope
    console.log(`createfunc[${i}]`);
    return () => {
        console.log(`My value: ${i}`);
    };
}

for (let i = 0; i < 3; i++) {
    funcs[i] = createfunc(i);
}

for (let j = 0; j < 3; j++) {
    funcs[j](); // and now let's run each one to see
}
