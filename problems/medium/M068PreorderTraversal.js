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
	return fullArray;
};

Object.assign(helpers, {
	holderArray: [],
	createFullArray(arr) {
		return arr.length;
	},
	createString(arr) {
		const preppedArr = helpers.setSubArrays(arr);
		console.log('pA: ', preppedArr);
		if (preppedArr[0][0] === '#') {
			return;
		}
		if (arr.length === 1) {
			helpers.holderArray.push(...(preppedArr[0]));
		} else {
			helpers.holderArray.push(preppedArr.splice(0, 1));
			const sides = helpers.splitArrays(preppedArr);
			console.log('sides: ', sides[0]);
			console.log('sides2: ', sides[1]);
			helpers.createString(sides[0]);
			helpers.createString(sides[1]);
		}
		return helpers.holderArray;
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
	}
});

module.exports = {
	PreorderTraversal,
	helpers,
	info
};
