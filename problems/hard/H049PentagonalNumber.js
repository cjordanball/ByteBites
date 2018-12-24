/*
Have the function PentagonalNumber(num) read num which will be a positive integer and determine
how many dots exist in a pentagonal shape around a center dot on the Nth iteration. For example,
in the image below you can see that on the first iteration there is only a single dot, on the
second iteration there are 6 dots, on the third there are 16 dots, and on the fourth there are
31 dots.

Your program should return the number of dots that exist in the whole pentagon on the Nth iteration.
*/

const info = {
	name: 'PentagonalNumber',
	number: 49,
	level: 'hard',
	methods: [],
	concepts: []
};

const PentagonalNumber = num => num === 1 ? 1 : PentagonalNumber(num - 1) + (5 * (num - 1));

module.exports = {
	PentagonalNumber,
	info
};
