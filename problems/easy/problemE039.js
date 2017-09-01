/*
Using the JavaScript language, have the function ArrayMatching(strArr) read the array of strings
stored in strArr which will contain only two elements, both of which will represent an array of
positive integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements
in the input represent two integer arrays, and your goal for this challenge is to add the elements
in corresponding locations from both arrays. For the example input, your program should do the
following additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your
program should finally return this resulting array in a string format with each element separated by
a hyphen: 6-4-13-17.
*/

const name = 'ArrayMatching';
const number = 39;
const level = 'easy';
const methods = [];
const concepts = [];

const ArrayMatching = (arr) => {
	let resString = '';
	const newArr = arr.map(val => JSON.parse(val));
	const len = Math.max(newArr[0].length, newArr[1].length);

	for (let i = 0; i < len; i++) {
		if (newArr[0][i] && newArr[1][i]) {
			resString += (`${(newArr[0][i] + newArr[1][i]).toString()}-`);
		} else if (newArr[0][i] || newArr[1][i]) {
			resString += `${(newArr[0][i] || newArr[1][i]).toString()}-`;
		}
	}
	return resString.slice(0, -1);
};

module.exports = {
	ArrayMatching
};