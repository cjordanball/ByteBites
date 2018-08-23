/*
Have the function LargestFour(arr) take the array of integers stored in arr, and find the
four largest elements and return their sum. For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6]
then the four largest elements in this array are 6, 6, 4, and 5 and the total sum of these
numbers is 21, so your program should return 21. If there are less than four numbers in the
array your program should return the sum of all the numbers in the array.
*/

const info = {
	name: 'LargestFour',
	number: 64,
	level: 'easy',
	methods: [],
	concepts: []
};


const LargestFour = arr => arr
	.sort((val1, val2) => val2 - val1)
	.splice(0, 4)
	.reduce((val1, val2) => val1 + val2, 0);

module.exports = {
	LargestFour,
	info
};
