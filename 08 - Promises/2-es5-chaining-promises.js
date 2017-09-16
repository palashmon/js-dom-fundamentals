/**
    Chaining Promises
    Version: Using ES5
    Purpose: Let's say, you, the kid, promise your friend that you will show them the new phone
             when your mom buy you one.
*/

/* eslint-disable */
var myArgs = process.argv.slice(2);
var isMomHappy = myArgs.length ? myArgs[0] == '1' : false;

// First promise
var willIGetNewPhone = new Promise(function(resolve, reject) {
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

// 2nd promise
/*var showOff = function(phone) {
    return new Promise(function(resolve, reject) {
        var message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
        resolve(message);
    });
};
*/

// We can shorten this sample like using Promise.resolve instead
var showOff = function(phone) {
    var message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone 🎉🎉';
    return Promise.resolve(message);
};

// call our promise
var askMom = function() {
    willIGetNewPhone
        .then(showOff) // chain it here
        .then(function(fulfilled) {
            console.log(fulfilled);
            // output: 'Hey friend, I have a new Black iPhone X5 phone.'
        })
        .catch(function(error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
};

askMom();
