/*
Have the function GCF(arr) take the array of numbers stored in arr which will always
contain only two positive integers, and return the greatest common factor of them. For example:
if arr is [45, 12] then your program should return 3. There will always be two elements in the
array and they will be positive integers.
*/

/*
My original solution was several lines fewer code, and much simpler, it just ran a loop from
1 up to the lower value number, checking if a number was a factor of both, and returning the
last positive response.  However, this could be wasteful, if we were dealing with very large
numbers.  So, the below method only evaluates up to the square root of the lower number,
takes those results to create an array of factors of the smaller value, then returns the
largest value of that group that divides evenly into the larger number.
*/

const info = {
	name: 'GCF',
	number: 75,
	level: 'easy',
	method: [],
	concept: []
};

function GCF(arr) {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const pivot = Math.floor(Math.sqrt(min));
	const factorArray = [];
	for (let i = 1; i <= pivot; i++) {
		if (min % i === 0) {
			factorArray.push(i);
		}
	}
	factorArray.forEach((val) => {
		factorArray.push(min / val);
	});
	return factorArray.sort((num1, num2) => num2 - num1)
		.find((val => max % val === 0));
}

module.exports = {
	GCF,
	info
};
