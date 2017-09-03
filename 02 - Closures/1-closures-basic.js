// A Basic Example of Closures in JavaScript
// In JavaScript, closures are the primary mechanism used to enable data privacy.

function showName(firstName, lastName) {
    const nameIntro = 'My name is';

    // A closure is an inner function that has access to the outer (enclosing) function’s variables
    // this inner function has access to the outer function's variables, including the parameter
    function makeFullName() {
        return `${nameIntro} ${firstName} ${lastName}`;
    }
    return makeFullName();
}

showName('Palash', 'Mondal'); // My name is Palash Mondal
