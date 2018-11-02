/*
Have the function BitmapHoles(strArr) take the array of strings stored in strArr, which will
be a 2D matrix of 0 and 1's, and determine how many holes, or contiguous regions of 0's, exist
in the matrix. A contiguous region is one where there is a connected group of 0's going in
one or more of four directions: up, down, left, or right. For example: if strArr is ["10111",
"10101", "11101", "11111"], then this looks like the following matrix:

1 0 1 1 1
1 0 1 0 1
1 1 1 0 1
1 1 1 1 1

For the input above, your program should return 2 because there are two separate contiguous
regions of 0's, which create "holes" in the matrix. You can assume the input will not be empty.
*/

const info = {
	name: 'BitmapHoles',
	number: 38,
	level: 'medium',
	methods: [],
	concepts: []
};
let helpers;
let dataArray;
const BitmapHoles = (strArr) => {
	dataArray = strArr.map(row => row.split(''));
	dataArray.forEach((row, rowNum) => {
		row.forEach((val, colNum) => {
			if (val !== '1') {
				dataArray[rowNum][colNum] = 'H';
				helpers.crawler([[rowNum, colNum]]);
			}
		});
	});
	return dataArray.reduce((row1, row2) => row1.concat(row2))
		.filter(val => val === 'H').length;
};

helpers = {
	crawler(pointsArray) {
		const newArray = [];
		pointsArray.forEach((point) => {
			if (point[0] > 0 && dataArray[point[0] - 1][point[1]] === '0') {
				dataArray[point[0] - 1][point[1]] = '1';
				newArray.push([point[0] - 1, point[1]]);
			}

			if (point[0] < dataArray.length - 1 && dataArray[point[0] + 1][point[1]] === '0') {
				dataArray[point[0] + 1][point[1]] = '1';
				newArray.push([point[0] + 1, point[1]]);
			}

			if (point[1] > 0 && dataArray[point[0]][point[1] - 1] === '0') {
				dataArray[point[0]][point[1] - 1] = '1';
				newArray.push([point[0], point[1] - 1]);
			}

			if (point[1] < dataArray[0].length - 1 && dataArray[point[0]][point[1] + 1] === '0') {
				dataArray[point[0]][point[1] + 1] = '1';
				newArray.push([point[0], point[1] + 1]);
			}
		});

		if (newArray.length === 0) {
			return;
		}
		this.crawler(newArray);
	}
};

module.exports = {
	BitmapHoles,
	helpers,
	info
};
