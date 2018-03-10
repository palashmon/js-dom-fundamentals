/**
    Method      :   Object.values()
    Description :   Returns an array of a given object's own enumerable property values.
    Syntax      :   Object.values(obj)
*/

const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
const obj2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj2)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(anObj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
const myObj = Object.create(
	{},
	{
		getFoo: {
			value() {
				return this.foo;
			}
		}
	}
);
myObj.foo = 'bar';
console.log(Object.values(myObj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
