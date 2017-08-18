/*
Using the JavaScript language, have the function ChangingSequence(arr) take the array
of numbers stored in arr and return the index at which the numbers stop increasing and
begin decreasing or stop decreasing and begin increasing. For example: if arr
is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point
in the array where the numbers were increasing and the next number begins a decreasing
sequence. The array will contain at least 3 numbers and it may contains only a single
sequence, increasing or decreasing. If there is only a single sequence in the array,
then your program should return -1. Indexing should begin with 0.
*/

/*
Note: The code below makes the assumption that there is a difference between the first
two numbers, so there is an increasing or decreasing sequence. Obviously, in the real
world validation should be in place to handle that not being the case.

The problem is a little vague on the input it might present. For example, it doesn't
state whether there might be multiple sequences; for example, up, then down, then up more.
The findIndex method works well for our purposes here, because it returns -1 if it finds
no matching index.
*/

const name = 'ChangingSequence';
const number = 30;
const level = 'easy';
const methods = [];
const concepts = ['while loop'];
let helpers;

const ChangingSequence = (arr) => {
	// first, determine if the initial sequence is increasing or decreasing
	const type = arr[1] - arr[0] > 0 ? 'increasing' : 'decreasing';
	const maxInd = arr.length - 1;

	if (type === 'increasing') {
		return arr.findIndex((val, ind) => (
			val > arr[ind + 1] && val < maxInd
	));
	}
	return arr.findIndex((val, ind) => (
		val < arr[ind + 1] && val < maxInd
	));
};

module.exports = {
	ChangingSequence
};
