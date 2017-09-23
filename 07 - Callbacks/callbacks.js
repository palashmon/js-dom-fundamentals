/**
    Concept     :   Callbacks
    Description :   A callback function, also known as a higher-order function,
                    is a function that is passed to another function as a parameter,
                    and the callback function is called (or executed) inside the caller function.
                    function call itself repeatedly until it arrives at a result.
    Usability   :   Because functions are first-class objects, we can pass a function as an argument
                    in another function and later execute that passed-in function
                    or even return it to be executed later. This is the essence of using callback functions
*/

// Using Parameters and Callbacks
// generic reportOrders that shows your orders to the function
function reportOrders(minionOrders) {
    if (typeof minionOrders === 'string') {
        console.log(minionOrders);
    } else if (typeof minionOrders === 'object') {
        for (const item in minionOrders) {
            console.log(`${item}: ${minionOrders[item]}`);
        }
    }
}

// A function that takes two parameters, the last one a callback function
function speakOrders(orders, callback) {
    callback(orders);
}

// When we call the speakOrders function, we pass reportOrders as a parameter
// So reportOrders will be the function that will called back (or executed) inside the speakOrders function
const minions = { name: 'Minion007', speciality: 'Scribe' };
speakOrders(minions, reportOrders);
