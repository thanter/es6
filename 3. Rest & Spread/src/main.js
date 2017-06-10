// The REST operator
// when calling the function i can pass an arbitrary number or arguments
// using the spread operator i will have a variable (array-like) with all the arguments
function sum(...numbers) {
	return numbers.reduce(
		(prev, current) => prev + current
	);
}


console.log(sum(1,2,3,4));		// 10


// The SPREAD operator is kinda the opposite thing
function sum2(x, y) {
	return x, y;
}

// it will spread the array to separate function arguments
let numbers = [1, 5];
console.log(sum2(...numbers));		// 5