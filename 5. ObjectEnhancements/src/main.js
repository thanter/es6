

function getPerson() {
	let name = 'thanasis';
	let age = 28;

	// es5
	// return {
	// 	name: name,
	// 	age: age,
	// 	greet: function() {
	// 		return "hello, " + this.name;
	// 	}
	// }

	// es6
	return {
		name,
		age,
		greet() {
			return `hello, ${this.name}`;
		}
	}
}

console.log(getPerson());
console.log(getPerson().greet());