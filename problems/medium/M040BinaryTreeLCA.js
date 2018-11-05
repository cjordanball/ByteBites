/*
Have the function BinarySearchTreeLCA(strArr) take the array of strings stored in strArr,
which will contain 3 elements: the first element will be a binary search tree with all unique
values in a preorder traversal array, the second and third elements will be two different values,
and your goal is to find the lowest common ancestor of these two values. For example: if strArr
is ["[10, 5, 1, 7, 40, 50]", "1", "7"] then this tree looks like the following:

					10
			5				40
		1		7				50

For the input above, your program should return 5 because that is the value of the node that is
the LCA of the two nodes with values 1 and 7. You can assume the two nodes you are searching
for in the tree will exist somewhere in the tree.
*/

const info = {
	name: 'BinaryTreeLCA',
	number: 40,
	level: 'medium',
	methods: [],
	concepts: []
};

const BinaryTreeLCA = (strArr) => {
    // take the first item in the argument array and turn it into an array of integers
	const nodeArray = strArr[0]
        .replace(/[[]]/g, '')
        .split(/,\s/)
        .map(val => parseInt(val, 10));

    // take the other items in the argument array and convert into integers
	const num1 = parseInt(strArr[1], 10);
	const num2 = parseInt(strArr[2], 10);

	// find the positions of the given numbers in the number array
	const ind1 = nodeArray.findIndex(val => val === num1);
	const ind2 = nodeArray.findIndex(val => val === num2);

	// determine the farther of the two positions, we are not interested in elements past that
	const rightEdge = Math.max(ind1, ind2);

	// see if there are any items to the left of rightEdge that split the two given
	// numbers, that will be the answer
	const result = nodeArray.filter((val, ind) => (val >= Math.min(num1, num2) &&
	val <= Math.max(num1, num2) && ind <= rightEdge));

	// if not any, then return the item that is farthest to the left
	if (result.length === 0) return ind1 < ind2 ? strArr[1] : strArr[2];

    // if there is, then return it as a string
	return result[0];
};

module.exports = {
	BinaryTreeLCA,
	info
};
