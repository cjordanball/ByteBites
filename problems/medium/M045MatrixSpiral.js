/*
Have the function MatrixSpiral(strArr) read the array of strings stored in strArr which
will represent a 2D N matrix, and your program should return the elements after printing
them in a clockwise, spiral order. You should return the newly formed list of elements as
a string with the numbers separated by commas. For example: if strArr is
["[1, 2, 3]", "[4, 5, 6]", "[7, 8, 9]"] then this looks like the following 2D matrix:

1 2 3
4 5 6
7 8 9

So your program should return the elements of this matrix in a clockwise, spiral order which is:
1,2,3,6,9,8,7,4,5
*/

const info = {
	name: 'MatrixSpiral',
	number: 45,
	level: 'medium',
	methods: [''],
	concepts: ['']
};
let helpers;
let len;
let height;
const holderArr = [];

const MatrixSpiral = (strArr) => {
	len = strArr[0].length;
	height = strArr.length;
	const copyArr = helpers.prep(Array.from(strArr));

	while (len > 0 && height > 0) {
		helpers.removeTop(copyArr);
		helpers.removeRight(copyArr);
		helpers.removeBottom(copyArr);
		helpers.removeLeft(copyArr);
	}
	return holderArr.join(',');
// 	return `len: ${len} and height: ${height}`;
};

helpers = {
	// prep takes the array as presented in the problem, and converts it to an array of
	// arrays, each representing a row and containing integers as the elements of the row
	// array.
	prep(arr) {
		return arr.map(row => row
			.replace(/[[\]]/g, ''))
			.map(val => val.split(/,\s/))
			.map(item => item
			.map(numStr => parseInt(numStr, 10)));
	},
	removeTop(arr) {
		if (height > 0 && len > 0) {
			height -= 1;
			holderArr.push(...arr.shift());
		}
	},
	removeRight(arr) {
		if (height > 0 && len > 0) {
			len -= 1;
			arr.forEach((row) => {
				holderArr.push(row.pop());
			});
		}
	},
	removeBottom(arr) {
		if (height > 0 && len > 0) {
			height -= 1;
			holderArr.push(...(arr.pop().reverse()));
		}
	},
	removeLeft(arr) {
		if (height > 0 && len > 0) {
			len -= 1;
			const holdingArray = [];
			arr.forEach((row) => {
				holdingArray.push(row.shift());
			});
			holderArr.push(...(holdingArray.reverse()));
		}
	}
};

module.exports = {
	MatrixSpiral,
	helpers,
	info
};
