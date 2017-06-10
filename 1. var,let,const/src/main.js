/*
MAIN IDEA
let & const are introduced in order to solve the
frustration created by js's hoisting
*/
function myfunc(bool) {
	if (bool) {
		var a = 1;

		console.log(a);
	} else {
		// in this case 'a' will be 'undefined'
		// cause of HOISTING...
		// We are inside the execution context of the function
		// (like 'var a' has been moved to top)
		console.log(a);
	}
}
myfunc(false);



// SOLUTION, use 'let' instead of var
function myfunc2(bool) {
	if (bool) {
		let a = 1;

		console.log(a);
	} else {
		// in this case JS will throw an exception
		console.log(a);
	}
}
// myfunc2(false);
myfunc2(true);

// CONST
// const is like 'let' but the variable cannot be reassigned
const names = ['thanasis', 'nterelis'];

// YOU CANNOT
names = 5;		// assignment to constant variable

// BUT YOU CAN
names.push('petros');
console.log(names);