 /*
 Have the function LongestMatrixPath(strArr) take the array of strings stored in strArr,
 which will be an NxM matrix of positive single-digit integers, and find the longest
 increasing path composed of distinct integers. When moving through the matrix, you can
 only go up, down, left, and right. For example: if strArr is ["345", "326", "221"], then
 this looks like the following matrix:

 3 4 5
 3 2 6
 2 2 1

 For the input above, the longest increasing path goes from: 3 -> 4 -> 5 -> 6. Your program
 should return the number of connections in the longest path, so therefore for this input your
 program should return 3. There may not necessarily always be a longest path within the matrix.
 */

const info = {
	name: 'SeatingStudents',
	number: 54,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const helpers = {};
const LongestMatrixPath = (strArr) => {
	// const newArray = Array.from(strArr);
	const height = strArr.length;
	const width = strArr[0].length;
	// We will loop through each number, and return the biggest result
	// result will hold this number, and will be the return value.
	let returnVal = 0;
	const newArray = strArr.map(val => val.split(''));

	// loop over the entire grid, and find the length for each place, by
	// calling crawler
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			const val = helpers.crawler([[newArray[i][j], [i, j]]], newArray);
			returnVal = Math.max(returnVal, val);
		}
	}
	return returnVal;
};

Object.assign(helpers, {
	// adjacents takes a position on the grid and returns all adjacent positions
	adjacent(pos, arr) {
		const height = arr.length;
		const width = arr[0].length;
		const newPositions = [
			[pos[0], pos[1] + 1],
			[pos[0], pos[1] - 1],
			[pos[0] + 1, pos[1]],
			[pos[0] - 1, pos[1]]
		].filter(val => val[0] >= 0 && val[1] >= 0 && val[0] < height && val[1] < width);
		return newPositions;
	},
	// this is the main function where things get done.  We don't need to worry about
	// going backwards, since we must always increase.  So, we just see what the possible
	// next steps are and quit when there are no more.
	crawler(arr, newArray) {
		let counter = 0;
		while (arr.length) {
			const newArr = [];
			arr.forEach((val) => {
				const pos = val[1];
				let newPos = this.adjacent(pos, newArray).filter(val => {
					return newArray[pos[0]][pos[1]] < newArray[val[0]][val[1]];
				}).map(val => {
					return [newArray[val[0]][val[1]], val];
				});
				newArr.push(...newPos);
			});
			if (newArr.length) {
				counter++;
			}
			arr = newArr;
		}
		return counter;
	}
});

module.exports = {
	LongestMatrixPath,
	helpers,
	info
};
