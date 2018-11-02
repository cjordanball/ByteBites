/*
Have the function SymmetricTree(strArr) take the array of strings stored in strArr, which
will represent a binary tree, and determine if the tree is symmetric (a mirror image of itself).
The array will be implemented similar to how a binary heap is implemented, except the tree may
not be complete and NULL nodes on any level of the tree will be represented with a #. For
example: if strArr is ["1", "2", "2", "3", "#", "#", "3"] then this tree looks like the following:

					1
			2				2
		3		#		#		3

For the input, your program should return the string true because the binary tree is symmetric.
*/

const info = {
	name: 'SymmetricTree',
	number: 39,
	level: 'medium',
	methods: [],
	concepts: []
};

const helpers = {};

const SymmetricTree = (strArr) => {
	let count = 0;
	while (strArr.length) {
		const length = 2 ** count;
		const newArray = strArr.splice(0, length);
		const revArray = Array.from(newArray).reverse();
		if (!helpers.isSameAs(newArray, revArray)) {
			return false;
		}
		count++;
	}
	return true;
};

Object.assign(helpers, {
	isSameAs(arr1, arr2) {
		if (arr1.length !== arr2.length) {
			return false;
		}
		return arr1.every((val, ind) => val === arr2[ind]);
	}
});

module.exports = {
	SymmetricTree,
	helpers,
	info
};
