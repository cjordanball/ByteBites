/*
Have the function ClosestEnemy(arr) take the array of numbers stored in arr and from
the position in the array where a 1 is, return the number of spaces either left or right
you must move to reach an enemy which is represented by a 2. For example: if arr is
[0, 0, 1, 0, 0, 2, 0, 2] then your program should return 3 because the closest enemy (2)
is 3 spaces away from the 1. The array will contain any number of 0's and 2's, but only
a single 1. It may not contain any 2's at all as well, where in that case your program
should return a 0.
*/


const info = {
	name: 'ClosestEnemy',
	number: 61,
	level: 'easy',
	methods: ['includes()', 'findIndex()'],
	concepts: []
};


function ClosestEnemy(arr) {
	if (!arr.includes(2)) {
		return 0;
	}
	const loc1 = arr.findIndex(val => val === 1
	);

	for (let i = 1, len = arr.length; i < len; i++) {
		if (arr[loc1 + i] === 2 || arr[loc1 - i] === 2) {
			return i;
		}
	}
	return loc1;
}

module.exports = {
	ClosestEnemy
};
