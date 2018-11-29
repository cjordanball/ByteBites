/*
Have the function LargestRowColumn(strArr) read the strArr parameter being passed which will
be a 2D matrix of some arbitrary size filled with positive integers. Your goal is to determine
the largest number that can be found by adding up three digits in the matrix that are within
the same path, where being on the same path means starting from one of the elements and then
moving either up, down, left, or right onto the next element without reusing elements. One
caveat though, and that is when you calculate the sum of three digits, you should split the
sum into two digits and treat the new digits as a row/column position in the matrix. So your
goal is actually to find the sum of three digits that sums to the largest position in the
matrix without going out of the bounds. For example: if strArr is ["345", "326", "221"] then
this looks like the following matrix:

3 4 5
3 2 6
2 2 1

The solution to this problem is to sum the bolded elements, 4 + 2 + 6, which equals 12. Then
you take the solution, 12, and split it into two digits: 1 and 2 which represents row 1,
column 2 in the matrix. This is the largest position you can get in the matrix by adding up 3
digits so your program should return 12. If you for example added up 4 + 5 + 6 in the matrix
you would get 15 which is larger than 12, but row 1, column 5 is out of bounds. It's also not
possible with the current matrix to sum to any of the following numbers: 20, 21, 22. If you
find a sum that is only a single digit, you can treat that as row 0, column N where N is
your sum.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

const info = {
	name: 'LargestRowColumn',
	number: 63,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const helpers = {};

const LargestRowColumn = (strArr) => {
	const height = strArr.length;
	const width = strArr[0].length;

	// modify the strArr to an array of row arrays
	helpers.reviseArr(strArr);

	let allSums = [];

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			allSums.push(...helpers.createSums([i, j]));
		}
	}

	allSums = helpers.uniqArr(allSums).sort((val1, val2) => val1 - val2);

	// create an array of sums, converted into array positions
	const convertedSums = helpers.convertSums(allSums);

	// remove all points that don't exist on the grid
	const qualifyingSums = convertedSums.filter(val => parseInt(val[0], 10) < height
		&& parseInt(val[1], 10) < width);

	return parseInt(qualifyingSums.pop().join(''), 10);
};

Object.assign(helpers, {
	arr: [],
	// returns an array stripped of all duplicate elements
	uniqArr(arr) {
		const mySet = new Set(arr);
		return Array.from(mySet);
	},
	// convert arr into an array of arrays containing integers
	reviseArr(arr) {
		const newArr = [];
		arr.forEach((val) => {
			newArr.push(val.split('').map(val2 => parseInt(val2, 10)));
		});
		this.arr = newArr;
		return this.arr;
	},
	// given a point, return a sorted array of values obtained by
	// adding numbers at adjacent points
	createSums(point) {
		const nextPoints = this.getPoints(point);
		const holder = [];
		nextPoints.forEach((val) => {
			const termPoints = this.getPoints(val).filter(val2 => (val2[0] !== point[0]
				|| val2[1] !== point[1]));
			termPoints.forEach((val3) => {
				holder.push(this.arr[point[0]][point[1]]
					+ this.arr[val[0]][val[1]] + this.arr[val3[0]][val3[1]]);
			});
		});
		return this.uniqArr(holder).sort((val1, val2) => val1 - val2);
	},
	convertSums(sums) {
		return sums.map((val) => {
			const str = val.toString();
			return str.length === 1 ? `0 + ${str}` : str;
		}).map(val => [val[0], val[1]]);
	},
	// input a point, and get all valid adjacent points
	getPoints(point) {
		return [
			[point[0] + 1, point[1]],
			[point[0] - 1, point[1]],
			[point[0], point[1] + 1],
			[point[0], point[1] - 1]
		].filter(val => val[0] >= 0 && val[0] < this.arr.length && val[1] >= 0
			&& val[1] < this.arr[0].length);
	}
});

module.exports = {
	LargestRowColumn,
	helpers,
	info
};
