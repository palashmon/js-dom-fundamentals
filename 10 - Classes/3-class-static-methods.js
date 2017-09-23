/**
 * Static methods
 *
 * The static keyword defines a static method for a class.
 * Static methods are called without instantiating their class
 * and cannot be called through a class instance.
 * Static methods are often used to create utility functions for an application.
 */

class Point {
    /**
     * 2 sets of coordinates in the x y-plane of the 2 dimensional Cartesian coordinate system
     * @param {integer} x accepts positive or negative integers and decimals
     * @param {integer} y accepts positive or negative integers and decimals
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Calculate distance based on Pythagorean theorem
     * Src: https://en.wikipedia.org/wiki/Pythagorean_theorem
     * @param {point} point1 point (X1, Y1) in 2 dimensional plane
     * @param {point} point2 point (X2, Y2) in 2 dimensional plane
     */
    static distance(point1, point2) {
        const dx = point1.x - point2.x;
        const dy = point1.y - point2.y;

        // Returns the square root of the sum of squares of its arguments
        return Math.hypot(dx, dy);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
// Output
// 7.0710678118654755

// returns 1 when points are 1 unit away
p1 = new Point(0, 0);
p2 = new Point(1, 0);
console.log();
console.log(Point.distance(p1, p2));
// Output
// 1

// non-parallel points
p1 = new Point(-1, 0);
p2 = new Point(2, 2);
console.log();
console.log(Point.distance(p1, p2));
// Output
// 3.6055512754639896

// returns 0 when points are the same
p1 = new Point(4, 6);
p2 = new Point(4, 6);
console.log();
console.log(Point.distance(p1, p2));
