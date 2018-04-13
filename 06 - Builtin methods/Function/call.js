/**
    Method      :   Function.prototype.call()
    Description :   The call() method calls a function with a given this value
                    and arguments provided individually.
    Syntax      :   function.call(thisArg, arg1, arg2, ...)
*/

function Product(name, price) {
	this.name = name;
	this.price = price;
}

function Food(name, price) {
	Product.call(this, name, price);
	this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"
