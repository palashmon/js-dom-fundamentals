function showName(firstName) {
    const nameIntro = 'My name is';

    function makeFullName(lastName) {
        console.trace(nameIntro);
        return `${nameIntro} ${firstName} ${lastName}`;
    }
    return makeFullName;
}

const myName = showName('Palash'); // At this juncture, the showName() outer function has returned.
console.log(typeof myName === 'function');

// The closure (makeFullName) is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameter
myName('Mondal'); // My name is Palash Mondal
