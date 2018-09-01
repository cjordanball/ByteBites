/*
Have the function SumMultiplier(arr) take the array of numbers stored in arr and return the string
true if any two numbers can be multiplied so that the answer is greater than double the sum of all
the elements in the array. If not, return the string false. For example: if arr is
[2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42 and doubling it is 84.
There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should
return the string true.
*/

const info = {
	name: 'SumMultiplier',
	number: 71,
	level: 'easy',
	method: [],
	concept: []
};

const SumMultiplier = (arr) => {
	// get the sum and double it
	const target = arr.reduce((val1, val2) => val1 + val2, 0) * 2;
	// once the array is sorted, the largest possible product of two array numbers will be
	// the product of the first two or the product of the last two (if negative)
	arr.sort((num1, num2) => num1 - num2);
	const len = arr.length;
	const checker = Math.max((arr[0] * arr[1]), (arr[len - 2] * arr[len - 1]));
	return checker > target;
};

module.exports = {
	SumMultiplier,
	info
};
