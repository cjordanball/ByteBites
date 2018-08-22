/*
Have the function ClosestEnemyII(strArr) read the matrix of numbers stored in strArr which
will be a 2D matrix that contains only the integers 1, 0, or 2. Then from the position in
the matrix where a 1 is, return the number of spaces either left, right, down, or up you
must move to reach an enemy which is represented by a 2. You are able to wrap around one
side of the matrix to the other as well. For example: if strArr is
["0000", "1000", "0002", "0002"] then this looks like the following:

0 0 0 0
1 0 0 0
0 0 0 2
0 0 0 2

For this input your program should return 2 because the closest enemy (2) is 2 spaces away
from the 1 by moving left to wrap to the other side and then moving down once. The array will
contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as
well, where in that case your program should return a 0.
*/

const info = {
	name: 'ClosestEnemyII',
	number: 62,
	level: 'easy',
	methods: ['filter()', 'includes()', 'findIndex()', 'search()', 'min()'],
	concepts: []
};
let helpers;

function ClosestEnemyII(strArr) {
	// step one - return 0 if there is no 2 in the array
	const twosies = strArr.filter(val => val.includes('2'));
	if (!twosies.length) {
		return 0;
	}
	// step two - get the coordinates of the 1 (targetX, targetY)
	const targetY = strArr.findIndex(val => val.includes('1'));
	const targetX = strArr[targetY].search(/1/);
	// step three find the smallest path to a 2
	let res = strArr.length * strArr[0].length;

	for (let row = 0, len = strArr[0].length; row < len; row++) {
		for (let col = 0, height = strArr.length; col < height; col++) {
			if (strArr[row][col] === '2') {
				const xShift = helpers.rowDist(targetX, col, len);
				const yShift = helpers.rowDist(targetY, row, height);
				res = Math.min(res, xShift + yShift);
			}
		}
	}
	return res;
}

helpers = {
	rowDist(y, x, len) {
		return Math.min(Math.abs(x - y), Math.abs((y - x) + len));
	}
};

module.exports = {
	ClosestEnemyII,
	helpers
};
