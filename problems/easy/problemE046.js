/*
Using the JavaScript language, have the function TwoSum(arr) take the array of integers stored in
arr, and determine if any two numbers (excluding the first element) in the array can sum up to the
first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are
actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all
pairs, with the numbers separated by a comma, in the order the first number appears in the array.
Pairs should be separated by a space. So for the example above, your program would return:
5,2 -4,11

If there are no two numbers that sum to the first element in the array, return -1
*/

/*
Careful: Note that the numbers do not have to be consecutive. The obvious solution is thus
to go through each number in the array, adding it with each of the other numbers, to see
if they add up to the desired number. However, this loop within a loop adds an undesirable
amount of time complexity to the computation (specifically, n * (n + 1) / 2, or n^2 in
computer science asymptotic counting).

In the solution below, we reduce this by creating an object with the numbers (or strings based
thereon) used as keys. It takes one time through the array to make the object, then one more
time through, with each lookup to the objecty being done in constant time. So, at the worst,
it will take two times through the array. In the small arrays in our tests, this is trivial,
millionths of seconds. But, if our array were a million items long, the difference would be
between two million operations or half a trillion operations.
*/

const name = 'TwoSum';
const number = 46;
const level = 'easy';
const methods = ['toString()', 'push()', 'join'];
const concepts = ['ternary operator', 'object properties', 'for loop'];

const TwoSum = (arr) => {
	const len = arr.length;
	const holdObj = {};
	const holdArr = [];

	for (let i = 1; i < len; i++) {
		const numString = arr[i].toString();
		holdObj[numString] = 'true';
	}

	for (let i = 1; i < len - 1; i++) {
		const diff = (arr[0] - arr[i]).toString();
		const numString = arr[i].toString();
		if (holdObj[diff]) {
			holdObj[numString] = false;
			holdObj[diff] = false;
			holdArr.push(`${numString},${diff}`);
		}
	}
	return holdArr.length ? holdArr.join(' ') : -1;
};

module.exports = {
	TwoSum
};