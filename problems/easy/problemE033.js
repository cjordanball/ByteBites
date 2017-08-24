/*
Using the JavaScript language, have the function Superincreasing(arr) take the array
of numbers stored in arr and determine if the array forms a superincreasing sequence
where each element in the array is greater than the sum of all previous elements. The
array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54]
then your program should return the string "true" because it forms a superincreasing
sequence. If a superincreasing sequence isn't formed, then your program should return
the string "false".
*/

/*
This problem is a good example of the need to keep in mind the efficiency of a solution.
At first blush, one might simply look at each element (starting with the second) and add
up all the previous numbers, then move on to the next element. However, this means we
will be doing a lot of unnecessary calculation; instead, we should hold onto our sum at
each step, then add the next piece to it.
*/

const name = 'Superincreasing';
const number = 33;
const level = 'easy';
const methods = [];
const concepts = ['for-loop', 'efficiency', 'if-statement'];

const Superincreasing = (arr) => {
	let count = 0;
	let len = arr.length;
	if (len === 1) {
		return 'false';
	}
	for (let i = 1; i < len; i++ ) {
		count += arr[i - 1];
		if (count >= arr[i]) {
			return 'false';
		}
	}
	return 'true';
};

module.exports = {
	Superincreasing
};