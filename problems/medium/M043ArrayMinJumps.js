/*
Have the function ArrayMinJumps(arr) take the array of integers stored in arr, where each
integer represents the maximum number of steps that can be made from that position, and
determine the least amount of jumps that can be made to reach the end of the array. For
example: if arr is [1, 5, 4, 6, 9, 3, 0, 0, 1, 3] then your program should output the
number 3 because you can reach the end of the array from the beginning via the following
steps: 1 -> 5 -> 9 -> END or 1 -> 5 -> 6 -> END. Both of these combinations produce a
series of 3 steps. And as you can see, you don't always have to take the maximum number
of jumps at a specific position, you can take less jumps even though the number is higher.

If it is not possible to reach the end of the array, return -1.
*/

const info = {
	name: 'ArrayMinJumps',
	number: 43,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const ArrayMinJumps = (arr) => {
	const newArr = Array.from(arr);
	const len = newArr.length;
	for (let i = len - 1; i >= 0; i--) {
		const toGo = len - (i + 1);
		const reach = newArr[i];
		if (toGo === 0) {
			newArr[i] = {
				ind: i,
				moves: 0
			};
		} else if (reach >= toGo) {
			newArr[i] = {
				ind: i,
				moves: 1
			};
		} else {
			const subArr = newArr.slice(i + 1);
			const subArrLen = subArr.length;
			const countHolder = [];
			for (let j = 0; j < subArrLen; j++) {
				if (typeof subArr[j] === 'object' && newArr[i] > j) {
					countHolder.push(subArr[j].moves);
				}
			}
			if (countHolder.length) {
				newArr[i] = {
					ind: i,
					moves: Math.min(...countHolder) + 1
				};
			}
		}
	}
	return typeof newArr[0].moves === 'undefined' ? -1 : newArr[0].moves;
};

module.exports = {
	ArrayMinJumps,
	info
};
