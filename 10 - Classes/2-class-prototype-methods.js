// Prototype methods

class Rectangle {
    /**
     * The constructor method is a special method for creating and initializing an object created with a class.
     * There can only be one special method with the name "constructor" in a class.
     * @param {integer} height
     * @param {integer} width
     */
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    /**
     * The get syntax binds an object property to a function that will be called when that property is looked up.
     */
    get area() {
        return this.calcArea();
    }

    /**
     * Starting with ECMAScript 2015, a shorter syntax for method definitions on objects initializers is introduced.
     * It is a shorthand for a function assigned to the method's name.
     *
     * var obj = {
            property( parameters… ) {},
            *generator( parameters… ) {},
            async property( parameters… ) {},
            async* generator( parameters… ) {},

            // with computed keys:
            [property]( parameters… ) {},
            *[generator]( parameters… ) {},
            async [property]( parameters… ) {},

            // compare getter/setter syntax:
            get property() {},
            set property(value) {}
        };
     */
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
console.log(`Area of rectangle is ${square.area}`);
// Outputs
// Area of rectangle is 100
