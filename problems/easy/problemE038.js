/*
Using the JavaScript language, have the function WaveSorting(arr) take the array of positive
integers stored in arr and return the string true if the numbers can be arranged in a wave
pattern: a1 > a2 < a3 > a4 < a5 > ..., otherwise return the string false. For example, if arr
is: [0, 1, 2, 4, 1, 4], then a possible wave ordering of the numbers is: [2, 0, 4, 1, 4, 1].
So for this input your program should return the string true. The input array will always
contain at least 2 elements. More examples are given below as sample test cases.
*/

/*
This problem seems a little strange, and really is not so much a coding challenge as a
logic challenge. Scribble a few different sets of numbers down on a piece of paper and
work through it, and it becomes clear that the solution, if one exists, can be obtained
by starting with the lowest number, then the highest number, then the lowest remaining,
then the highest remaining, etc., and that there will be a solution every time unless
there are just too many of the same number, and "too many" will be more than half. Once
we see that, coding the solution is trivial; however, the solution below uses one
really neat new thing from the ES6 standard, the "spread operator". This consists of
three dots immediately before an array name, and its value is not the array, but the
items in the array. See how it works in the Math.max() method.
 */

const name = 'WaveSorting';
const number = 38;
const level = 'easy';
const methods = ['max()', 'forEach()', 'toString()', 'keys()', 'map()', 'max()'];
const concepts = ['spread operator'];
let helpers;

const WaveSorting = (arr) => {
	const len = arr.length;
	const countObj = helpers.frequencyTracker(arr);
	const keyArray = Object.keys(countObj);
	const countArray = keyArray.map(val => countObj[val]);
	const maxCount = Math.max(...countArray);
	return maxCount <= len / 2;
};

helpers = {
	// countObj takes an array of items, and returns an object of key/value pairs, the
	// each key being a value in the array (as a string) and each value being the number
	// of times that value appears in the array.

	frequencyTracker(arr) {
		const countObj = {};
		arr.forEach((val) => {
			const valString = val.toString();
			if (!countObj[valString]) {
				countObj[valString] = 1;
			} else {
				countObj[valString] += 1;
			}
	});
		return countObj;
	}
}

module.exports = {
	WaveSorting,
	helpers
};