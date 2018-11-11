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

const MatrixSpiral = (strArr) => {
	let dataObject = {
		len: strArr[0].length,
		height: strArr.length,
		copyArr: helpers.prep(Array.from(strArr)),
		holderArr: []
	};

	while (dataObject.len > 0 && dataObject.height > 0) {
		dataObject = helpers.removeTop(dataObject);
		dataObject = helpers.removeRight(dataObject);
		dataObject = helpers.removeBottom(dataObject);
		dataObject = helpers.removeLeft(dataObject);
	}
	return dataObject.holderArr.join(',');
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
	// removeTop takes our dataObject, removes the top of the matrix and places the
	// items into the holder Array.  Then it creates and returns a copy of the dataObject.
	removeTop(obj) {
		if (obj.height > 0 && obj.len > 0) {
			obj.height -= 1;
			obj.holderArr.push(...obj.copyArr.shift());
		}
		return Object.assign({}, obj);
	},
	// removeRight takes our dataObject, removes the items in the right column of the matrix
	// and places the items into the holder Array.  Then it creates and returns a copy of the
	// dataObject.
	removeRight(obj) {
		if (obj.height > 0 && obj.len > 0) {
			obj.len -= 1;
			obj.copyArr.forEach((row) => {
				obj.holderArr.push(row.pop());
			});
		}
		return Object.assign({}, obj);
	},
	// removeBottom takes our dataObject, removes the bottom of the matrix and places the
	// items, in reverse order into the holder Array.  Then it creates and returns a copy
	// of the dataObject.
	removeBottom(obj) {
		if (obj.height > 0 && obj.len > 0) {
			obj.height -= 1;
			obj.holderArr.push(...(obj.copyArr.pop().reverse()));
		}
		return Object.assign({}, obj);
	},
	// removeLeft takes our dataObject, removes the items in the right column of the
	// matrix and places the items into the holder Array, in reverse order.  Then it
	// creates and returns a copy of the dataObject.
	removeLeft(obj) {
		if (obj.height > 0 && obj.len > 0) {
			obj.len -= 1;
			const holdingArray = [];
			obj.copyArr.forEach((row) => {
				holdingArray.push(row.shift());
			});
			obj.holderArr.push(...(holdingArray.reverse()));
		}
		return Object.assign({}, obj);
	}
};

module.exports = {
	MatrixSpiral,
	helpers,
	info
};
