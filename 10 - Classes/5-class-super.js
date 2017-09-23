/**
 * Super class calls with super
 * The super keyword is used to call functions on an object's parent.
 */

class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} roars.`);
    }
}

const l = new Lion('Lionell');
l.speak();
// Lionell makes a noise.
// Lionell roars.
