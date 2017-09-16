/**
    Understanding Promises
    Source:https://scotch.io/tutorials/javascript-promises-for-dummies
    Version: Using ES5
*/

/* eslint-disable */
// Get boolean value as command line argument. Value 1 for true and 0 for false
var myArgs = process.argv.slice(2);

// We have a boolean isMomHappy, to define if mom is happy
var isMomHappy = myArgs.length ? myArgs[0] == '1' : false;

// We have a promise willIGetNewPhone.
// The promise can be either resolved (if mom get you a new phone)
// or rejected(mom is not happy, she doesn't buy you one).
var willIGetNewPhone = new Promise(function(resolve, reject) {
    // when the result is successful, call resolve(your_success_value),
    // if the result fails, call reject(your_fail_value) in your promise.
    if (isMomHappy) {
        var phone = {
            brand: 'iPhone X5',
            color: 'Black'
        };
        resolve(phone); // fulfilled
    } else {
        var reason = new Error('Mom is not happy');
        reject(reason); // reject
    }
});

/**
 * Consuming Promises
 */
// call our promise
var askMom = function() {
    willIGetNewPhone
        .then(function(fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
            // output: { brand: 'iPhone X5', color: 'Black' }
        })
        .catch(function(error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
};

askMom();
