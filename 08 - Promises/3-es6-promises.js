/**
    Promises
    Version: Using ES6
    Purpose: ES6 supports promises natively.
             In addition, with ES6 functions, we can further simplify the code
             with fat arrow => and use const and let
*/

// Get bool value from cli
const myArgs = process.argv.slice(2);
const isMomHappy = myArgs.length ? myArgs[0] === '1' : false;

// First promise
const willIGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            brand: 'iPhone X5',
            color: 'Black'
        };
        resolve(phone); // fulfilled
    } else {
        const reason = new Error('Mom is not happy');
        reject(reason); // reject
    }
});

// 2nd promise
const showOff = phone => {
    const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone 🎉🎉`;
    return Promise.resolve(message);
};

// call our promise
const askMom = () => {
    willIGetNewPhone
        .then(showOff) // chain it here
        .then(fulfilled => {
            console.log(fulfilled);
            // output: 'Hey friend, I have a new Black iPhone X5 phone.'
        })
        .catch(error => {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
};

askMom();
