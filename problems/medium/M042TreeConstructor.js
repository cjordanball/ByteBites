/*
Have the function TreeConstructor(strArr) take the array of strings stored in strArr, which
will contain pairs of integers in the following format: (i1,i2), where i1 represents a child
node in a tree and the second integer i2 signifies that it is the parent of i1. For example:
if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:

			4
		2
	1		7

which you can see forms a proper binary tree. Your program should, in this case, return the
string true because a valid binary tree can be formed. If a proper binary tree cannot be formed
with the integer pairs, then return the string false. All of the integers within the tree will
be unique, which means there can only be one node in the tree with the given integer value.
*/

const info = {
	name: 'TreeConstructor',
	number: 42,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

// the following method throws out trees that fail any of three tests: i) is there only one top
// node, ii) does any node have more than 2 children, or iii) are any node values repeated.  If
// it passes all of these tests, then it should represent a binary tree.

const TreeConstructor = (strArr) => {
    // remove spaces from input (one of the tests had bad input)
	const workingArr = strArr.map(val => val.replace(/\s/g, ''));

	const regExChildPattern = /\((\d+),\d+\)/;
	const regExParentPattern = /\(\d+,(\d+)\)/;

	const children = workingArr.map(val => regExChildPattern.exec(val)[1]);
	const parents = workingArr.map(val => regExParentPattern.exec(val)[1]);

    // check to make sure all children are unique
	const childSet = new Set(children);
	if (children.length !== childSet.size) {
		return false;
	}
    // test whether any parent node has more than 2 children
	const parentObj = {};
	parents.forEach((val) => {
		if (!parentObj[val]) {
			parentObj[val] = 1;
		} else {
			parentObj[val]++;
		}
	});
	const keys = Object.keys(parentObj);
	if (keys.some(key => parentObj[key] > 2)) {
		return false;
	}
    // make certain there is one, and only one, top dog
	const uniqParents = Array.from(new Set(parents));

	const topDogs = uniqParents.filter(val => !children.includes(val));
	if (topDogs.length !== 1) {
		return false;
	}

	return true;
};

module.exports = {
	TreeConstructor,
	info
};
