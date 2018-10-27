/*
Have the function DistinctList(arr) take the array of numbers stored in arr and determine
the total number of duplicate entries. For example if the input is [1, 2, 2, 2, 3] then
your program should output 2 because there are two duplicates of one of the elements.
*/

const info = {
	name: 'DistinctList',
	number: 32,
	level: 'medium',
	methods: [],
	concepts: ['Sets']
};

function DistinctList(arr) {
	const strippedArr = new Set(arr);
	return arr.length - strippedArr.size;
}

module.exports = {
	DistinctList,
	info
};
