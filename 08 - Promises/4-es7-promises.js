/**
    Promises
    Version: Using ES7
    Purpose: ES7 introduce async and await syntax.
             It makes the asynchronous syntax look prettier and easier to understand,
             without the .then and .catch.
*/

// Get bool value from cli
const myArgs = process.argv.slice(2);
const isMomHappy = myArgs.length ? myArgs[0] === '1' : false;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            brand: 'iPhone X5',
            color: 'Black'
        };

        // Add some delay to get a api call effect
        setTimeout(() => {
            resolve(phone);
        }, 2500);
    } else {
        const reason = new Error('Mom is not happy');
        setTimeout(() => {
            reject(reason);
        }, 2500);
    }
});

// 2nd promise
function showOff(phone) {
    const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone 🎉🎉`;
    return Promise.resolve(message);
}

// call our promise
async function askMom() {
    try {
        console.log('Before asking Mom');

        const phone = await willIGetNewPhone;
        const message = await showOff(phone);
        console.log(message);

        console.log('After asking mom');
    } catch (error) {
        console.log(error.message);
    }
}

askMom();
