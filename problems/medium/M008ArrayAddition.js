/*
Have the function ArrayAddition(arr) take the array of numbers stored in arr and return
the string true if any combination of numbers in the array (excluding the largest number)
can be added up to equal the largest number in the array, otherwise return the string
false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true
because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same
elements, and may contain negative numbers.
*/

const info = {
	name: 'Array Addition',
	number: 8,
	level: 'medium',
	methods: [],
	concepts: []
};

let helpers;

const ArrayAddition = (arr) => {
	const setupArray = helpers.arrayPrep(arr);
	const addArr = setupArray[0];
	const target = setupArray[1];
	const len = addArr.length;
	const permNum = 2 ** len;

	for (let i = 0; i <= permNum; i++) {
		const permStr = (i + permNum).toString(2).slice(1);
		const strlen = permStr.length;
		let counter = 0;
		for (let j = 0; j < strlen; j++) {
			if (permStr[j] === '1') {
				counter += addArr[j];
			}
		}
		if (counter === target) {
			return true;
		}
	}
	return false;
};

helpers = {
	arrayPrep(arr) {
		arr.sort((a, b) => a - b);
		const target = arr.pop();
		return [arr, target];
	}
};

module.exports = {
	ArrayAddition,
	helpers,
	info
};
