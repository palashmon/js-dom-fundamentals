/**
 * Sub classing with extends
 * The extends keyword is used in class declarations
 * or class expressions to create a class as a child of another class.
 */

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Animal('Dog');
dog.speak(); // Dog makes a noise.
const sneaker = new Dog('Sneaker');
sneaker.speak(); // Sneaker barks.
