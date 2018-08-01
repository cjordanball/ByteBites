/*
Using the JavaScript language, have the function PowerSetCount(arr) take the array of integers
stored in arr, and return the length of the power set (the number of all possible sets) that
can be generated.
*/

/*
This is not really a coding problem so much as it is a basic math question addressed in introductory
statistics, if we treat the problem literally and only return the proper number.  It will simply be
2 raised to the power equal to the number of items.  This is easily understood when we observe that
each item in the set has two possible states - it can either be in, or out, of each set in the Power
Set.  A more interesting problem would be to write out all the possible sets in the Power Set,
which could best be done by determining the total number of sets (i.e., this problem), then looping
from 0 to that number - 1, using base 2 numbers to represent each item's state of inclusion (if the
corresponding digit is 1) or exclusion (if the corresponding digit is 0)
*/

const info = {
	name: 'Power Set Count',
	number: 48,
	level: 'easy',
	methods: [],
	concepts: ['exponentiation operator']
};

function PowerSetCount(arr) {
	const len = arr.length;
	return 2 ** len;
}

module.exports = {
	PowerSetCount
};
