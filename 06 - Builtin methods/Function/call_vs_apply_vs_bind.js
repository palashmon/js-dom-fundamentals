/**
    Difference between Function.prototype.call() and Function.prototype.apply()
    vs Function.prototype.bind()
*/

/**
 * call attaches `this` into function and executes the function immediately
 */
var person = {
	name: 'William',
	hello: function(thing) {
		console.log(this.name + ' says hello ' + thing);
	}
};

person.hello('world'); // output: "William says hello world"
person.hello.call({ name: 'Ethan' }, 'world'); // output: "Ethan says hello world"

/**
 * bind attaches `this` into function and it needs to be invoked separately
 */
var person = {
	name: 'William',
	hello: function(thing) {
		console.log(this.name + ' says hello ' + thing);
	}
};

person.hello('world'); // output: "William says hello world"
var helloFunc = person.hello.bind({ name: 'Ethan' });
helloFunc('world'); // output: Ethan says hello world"

/**
 * apply is similar to call except that it takes an array-like object
 * instead of listing the arguments out one at a time
 */
var person = {
	name: 'William',
	hello: function(...args) {
		// console.log(args);
		console.log(this.name + ' says hello ' + args[1]);
	}
};
function personContainer() {
	person.hello.apply(person, arguments);
}
function personContainer2() {
	person.hello.apply({ name: 'Ethan' }, arguments);
}
personContainer('world', 'mars'); // output: "William says hello mars"
personContainer2('world', 'mars'); // output: "Ethan says hello mars"
