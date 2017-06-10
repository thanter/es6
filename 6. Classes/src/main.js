// FUNCTION CONSTRUCTORS ES5
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.getDetails = function() {
// 	return this.name + ", is " + this.age;
// }

// var me = new Person('thanasis', 28);
// console.log(me.getDetails());

// ES 6 with classes

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	static create(...args) {
		return new Person(...args);
	}

	getDetails() {
		return this.name + ", is " + this.age;
	}

	changeName(newName) {
		this.name = newName;
		return this;
	}
}


var me = new Person('thanasis', 28);
console.log(me.getDetails());

console.log(me.changeName('Petros').getDetails());

// USING A STATIC METHOD (belongs to the class, not the object)
var another = Person.create("Panos", 22);
console.log(another.getDetails());


