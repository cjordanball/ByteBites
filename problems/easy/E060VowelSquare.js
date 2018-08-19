/*
Have the function VowelSquare(strArr) take the strArr parameter being passed which will be
a 2D matrix of some arbitrary size filled with letters from the alphabet, and determine if
a 2x2 square composed entirely of vowels exists in the matrix. For example: strArr is
["abcd", "eikr", "oufj"] then this matrix looks like the following:

a b c d
e i k r
o u f j

Within this matrix there is a 2x2 square of vowels starting in the second row and first column,
namely, ei, ou. If a 2x2 square of vowels is found your program should return the top-left
position (row-column) of the square, so for this example your program should return 1-0. If
no 2x2 square of vowels exists, then return the string not found. If there are multiple squares
of vowels, return the one that is at the most top-left position in the whole matrix. The input
matrix will at least be of size 2x2.
*/

const info = {
	name: 'VowelSquare',
	number: 60,
	level: 'easy',
	methods: [],
	concepts: []
};

let helpers;

const VowelSquare = (strArr) => {
	const newStrArr = strArr.map(val => val.toLowerCase().replace(/[aeiou]/g, '!'));
	for (let r = 0, len = newStrArr.length; r < len - 1; r++) {
		for (let c = 0, innerLen = newStrArr[0].length; c < innerLen - 1; c++) {
			if (helpers.checkPoint(newStrArr, [r, c])) {
				return `${r}-${c}`;
			}
		}
	}
	return 'not found';
};

helpers = {
	checkPoint(arr, point) {
		return (
			arr[point[0]][point[1]] === '!' &&
			arr[point[0] + 1][point[1]] === '!' &&
			arr[point[0]][point[1] + 1] === '!' &&
			arr[point[0] + 1][point[1] + 1] === '!'
		);
	}
};

module.exports = {
	VowelSquare,
	helpers
};
