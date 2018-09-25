/*
Have the function SimpleMode(arr) take the array of numbers stored in arr and return the
number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4]
the output should be 4. If there is more than one mode return the one that appeared in the
array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is
no mode return -1. The array will not be empty.
*/

const info = {
	name: 'SimpleMode',
	number: 12,
	level: 'medium',
	methods: ['forEach()', 'toString()', 'Object.keys()', 'includes()', 'sort()', 'parseInt()'],
	concepts: ['array iteration', 'object property access', 'keeping count']
};


const SimpleMode = (arr) => {
	const countObj = {};
	arr.forEach((val) => {
		const valString = val.toString(10);
		if (!(Object.keys(countObj).includes(valString))) {
			countObj[valString] = 1;
		} else {
			countObj[valString] += 1;
		}
	});
	const props = Object.keys(countObj);
	props.sort((val1, val2) => countObj[val2] - countObj[val1]);
	return parseInt(props[0], 10);
};

module.exports = {
	SimpleMode,
	info
};
