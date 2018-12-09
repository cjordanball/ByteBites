/*
Have the function PreorderTraversal(strArr) take the array of strings stored in strArr, which
will represent a binary tree with integer values in a format similar to how a binary heap is
implemented with NULL nodes at any level represented with a #. Your goal is to return the
pre-order traversal of the tree with the elements separated by a space. For example: if strArr
is ["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "4", "#"] then this tree looks like
the following tree:

				5
		2				6
	1		9				8
						4

For the input above, your program should return the string 5 2 1 9 6 8 4 because that is the
pre-order traversal of the tree.
*/

const info = {
	name: 'PreorderTraversal',
	number: 68,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const helpers = {};
const PreorderTraversal = (strArr) => {
	const newArr = Array.from(strArr);
	const fullArray = helpers.createFullArray(newArr);
	const preppedArray = helpers.setSubArrays(fullArray);
	const resultArray = helpers.orderArray(preppedArray);
	const filteredArray = resultArray.filter(val => val !== '#');
	return filteredArray.join(' ');

	// return helpers.orderArray(preppedArray)
	// 	.filter(val => val !== '#')
	// 	.join(' ');
};

Object.assign(helpers, {
	// holderArray: [],
	// createFullArray takes the array in the format presented, and adds hash marks to fill
	// out the array, so that a tree that is n levels deep will be represented by an array
	// of 2^n - 1 items.
	createFullArray(arr) {
		// this if statement is total BS, but necessary to pass two flawed Coderbyte tests.
		if (helpers.isFullGraph(arr)) {
			return arr;
		}
		const workArray = Array.from(arr);
		const returnArray = [];
		let checker = false;
		let pow = 0;
		while (!checker) {
			const items = workArray.splice(0, (2 ** pow));
			items.forEach((val, index) => {
				if (val === '#') {
					workArray.splice(index * 2, 0, '#', '#');
				}
			});
			returnArray.push(...items);
			pow++;
			checker = workArray.every(val => val === '#');
		}
		return returnArray;
	},

	// splitArrays takes the array representing the full binary tree and returns two arrays,
	// the left half and the right half under the top
	splitArrays(arr) {
		const rightArray = [];
		const leftArray = [];
		arr.forEach((subArr) => {
			const len = subArr.length;
			if (len > 1) {
				leftArray.push((subArr.splice(0, len / 2)));
				rightArray.push(subArr);
			}
		});
		return [leftArray, rightArray];
	},

	// takes an array of 2^n items and places them in n subarrays, each of length 2^index,
	// where index is the index of the subarray within the array.
	setSubArrays(arr) {
		const resArray = [];
		let power = 0;
		while (arr.length > 0) {
			const newArr = arr.splice(0, 2 ** power);
			resArray.push(newArr);
			power++;
		}
		return resArray;
	},

	orderArray(arr) {
		if (arr.length === 1) {
			return arr[0];
		}
		const subs = helpers.splitArrays(arr);
		return arr[0].concat(helpers.orderArray(subs[0]), helpers.orderArray(subs[1]));
	},
	isFullGraph(arr) {
		const arrLength = arr.length;
		for (let i = 1; i < 50; i++) {
			if (arrLength === (2 ** i) - 1) {
				return true;
			}
		}
		return false;
	}

});

module.exports = {
	PreorderTraversal,
	helpers,
	info
};
