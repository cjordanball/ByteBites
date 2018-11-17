/*
Have the function MatrixPath(strArr) take the strArr parameter being passed which will be
a 2D matrix of 0 and 1's of some arbitrary size, and determine if a path of 1's exists
from the top-left of the matrix to the bottom-right of the matrix while moving only in the
directions: up, down, left, and right. If a path exists your program should return the
string true, otherwise your program should return the number of locations in the matrix
where if a single 0 is replaced with a 1, a path of 1's will be created successfully. If a
path does not exist and you cannot create a path by changing a single location in the
matrix from a 0 to a 1, then your program should return the string "not possible". For
example: if strArr is ["11100", "10011", "10101", "10011"] then this looks like the
following matrix:

1 1 1 0 0
1 0 0 1 1
1 0 1 0 1
1 0 0 1 1

For the input above, a path of 1's from the top-left to the bottom-right does not exist. But,
we can change a 0 to a 1 in 2 places in the matrix, namely at locations: [0,3] or [1,2]. So for
this input your program should return 2. The top-left and bottom-right of the input matrix will
always be 1's.
*/

const info = {
	name: 'MatrixPath',
	number: 53,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

let helpers;

const MatrixPath = (strArr) => {
	const width = strArr[0].length;
	const height = strArr.length;
	// create a deep copy of our array, just in case.
	let newArr = helpers.copyArray(strArr);
	// create starting point
	newArr[height - 1][width - 1] = 'T';
	// let stop = false;

	while (true) {
		const testArr = helpers.copyArray(newArr);
		for (let i = 0; i < height; i++) {
			for (let j = 0; j < width; j++) {
				if (testArr[i][j] === '1' && helpers.isAdjacent('T', testArr, [i, j])) {
					testArr[i][j] = 'T';
				} else if (testArr[i][j] === '0' && helpers.isAdjacent('T', testArr, [i, j])) {
					testArr[i][j] = 'F';
				}
			}
		}
		if (helpers.isEqualArray(testArr, newArr)) {
			newArr = testArr;
			break;
		}
		newArr = testArr;
	}

	if (newArr[0][0] === 'T') {
		return 'true';
	}

	newArr[0][0] = 'G';

	while (true) {
		const testArr = helpers.copyArray(newArr);
		for (let i = 0; i < height; i++) {
			for (let j = 0; j < width; j++) {
				if (testArr[i][j] === '1' && helpers.isAdjacent('G', testArr, [i, j])) {
					testArr[i][j] = 'G';
				} else if (testArr[i][j] === '0' && helpers.isAdjacent('G', testArr, [i, j])) {
					testArr[i][j] = 'F';
				}
			}
		}
		if (helpers.isEqualArray(testArr, newArr)) {
			newArr = testArr;
			break;
		}
		newArr = testArr;
	}
	let counter = 0;

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (newArr[i][j] === 'F' && helpers.isAdjacent('G', newArr, [i, j]) && helpers.isAdjacent('T', newArr, [i, j])) {
				counter++;
			}
		}
	}
	return counter || 'not possible';
};

helpers = {
	//	isAdjacent returns true if the array contains the designated char in a position
	//	adjacent to the designated position
	isAdjacent(char, arr, position) {
		const height = arr.length;
		const width = arr[0].length;
		return [
			[position[0] - 1, position[1]],
			[position[0], position[1] + 1],
			[position[0] + 1, position[1]],
			[position[0], position[1] - 1]
		].filter(val => (val[0] >= 0 && val[0] < height && val[1] >= 0 && val[1] < width))
			.some(val => arr[val[0]][val[1]] === char);
	},
	// copyArray makes a new copy of a 2-deep array
	copyArray(arr) {
		return Array.from(arr).map((val, ind) => Array.from(arr[ind]));
	},
	// isEqualArray checks to see if two 2-deep arrays have identical items
	isEqualArray(arr1, arr2) {
		const height = arr1.length;
		const width = arr1[0].length;
		for (let i = 0; i < height; i++) {
			for (let j = 0; j < width; j++) {
				if (arr1[i][j] !== arr2[i][j]) {
					return false;
				}
			}
		}
		return true;
	}
};

module.exports = {
	MatrixPath,
	helpers,
	info
};
