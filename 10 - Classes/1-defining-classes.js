// Class declarations

{
    // One way to define a class is using a class declaration.
    // To declare a class, you use the class keyword with the name of the class

    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }
}

{
    // A class expression is another way to define a class
    const Rectangle = class {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    };
}
