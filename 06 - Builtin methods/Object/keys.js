/**
    Method      :   Object.keys()
    Description :   Returns an array of a given object's own enumerable properties.
    Syntax      :   Object.keys(obj)
*/

// simple array
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
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
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
