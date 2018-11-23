/*
Have the function MatchingCharacters(str) take the str parameter being passed and determine
the largest number of unique characters that exists between a pair of matching letters anywhere
in the string. For example: if str is "ahyjakh" then there are only two pairs of matching
letters, the two a's and the two h's. Between the pair of a's there are 3 unique characters:
h, y, and j. Between the h's there are 4 unique characters: y, j, a, and k. So for this example
your program should return 4.

Another example: if str is "ghececgkaem" then your program should return 5 because the most
unique characters exists within the farthest pair of e characters. The input string may not
contain any character pairs, and in that case your program should just return 0. The input
will only consist of lowercase alphabetic characters.
*/

const info = {
	name: 'HistogramArea',
	number: 58,
	level: 'medium',
	methods: ['lastIndexOf()', 'slice()', 'max()', 'split()', '(set).size'],
	concepts: ['sets']
};

const helpers = {};

const MatchingCharacters = (str) => {
	let maxResult = 0;
	const len = str.length;
	for (let i = 0; i < len - 1; i++) {
		const end = str.lastIndexOf(str[i]);
		const mySlice = str.slice(i + 1, end);
		if (mySlice) {
			maxResult = Math.max(maxResult, helpers.countUniq(mySlice));
		}
	}
	return maxResult;
};

Object.assign(helpers, {
	countUniq(str) {
		const mySet = new Set(str.split(''));
		return mySet.size;
	}
});


module.exports = {
	MatchingCharacters,
	info
};
