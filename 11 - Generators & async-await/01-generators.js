/**
 * Generators
 * The Generator object is returned by a generator function
 * and it conforms to both the iterable protocol and the iterator protocol
 */

const h = require('../helpers');

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
h.log(g); // "Generator { }"

// .next() returns a value yielded by the yield expression.
// value - any JavaScript value returned by the iterator
h.log(g.next()); // { value: 1, done: false }
h.log(g.next()); // { value: 2, done: false }
h.log(g.next()); // { value: 3, done: false }

// done property has the value true if the iterator is past the end of the iterated sequence
h.log(g.next()); // { value: undefined, done: true }
