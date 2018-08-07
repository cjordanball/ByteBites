/*
Have the function ThreeSum(arr) take the array of integers stored in arr, and determine
if any three distinct numbers (excluding the first element) in the array can sum up to the
first element in the array. For example: if arr is [8, 2, 1, 4, 10, 5, -1, -1] then there
are actually three sets of triplets that sum to the number 8: [2, 1, 5], [4, 5, -1] and
[10, -1, -1]. Your program should return the string true if 3 distinct elements sum to the
first element, otherwise your program should return the string false. The input array will
always contain at least 4 elements.
*/

const info = {
	name: 'Three Sum',
	number: 53,
	level: 'easy',
	methods: [],
	concepts: ['for loop']
};

function ThreeSum(arr) {
	const target = arr.shift();
	const len = arr.length;
	for (let i = 0; i < len - 2; i++) {
		for (let j = i + 1; j < len - 1; j++) {
			for (let k = i + 2; k < len; k++) {
				if (arr[i] + arr[j] + arr[k] === target) {
					return 'true';
				}
			}
		}
	}
	return 'false';
}

module.exports = {
	ThreeSum
};
