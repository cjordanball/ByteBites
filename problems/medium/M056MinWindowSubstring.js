/*
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr,
which will contain only two strings, the first parameter being the string N and the second
parameter being a string K of some characters, and your goal is to determine the smallest
substring of N that contains all the characters in K. For example: if strArr is
["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e,
and d is "dae" located at the end of the string. So for this example your program should
return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that
contains all of the characters in K is "aabd" which is located at the beginning of the string.
Both parameters will be strings ranging in length from 2 to 50 characters and all of K's
characters will exist somewhere in the string N. Both strings will only contains lowercase
alphabetic characters.
*/

const info = {
	name: 'MinWindowSubstring',
	number: 56,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const helpers = {};

const MinWindowSubstring = (strArr) => {
	const [haystack, needle] = strArr;
	const needleCounter = helpers.createCountObject(needle.split(''));
	const letterArray = Object.keys(needleCounter);
	// start with the smallest possible substrings, then go up
	for (let i = needle.length, len = haystack.length; i <= len; i++) {
		for (let j = 0; j <= len - i; j++) {
			const mySlice = haystack.substr(j, i);
			const mainCounter = helpers.createCountObject(mySlice.split(''));
			const match = letterArray.every(val => needleCounter[val] <= mainCounter[val]);
			if (match) {
				return mySlice;
			}
		}
	}
	return 'Not in string';
};

Object.assign(helpers, {
	createCountObject(arr) {
		const countObject = {};
		arr.forEach((val) => {
			if (!countObject[val]) {
				countObject[val] = 1;
			} else {
				countObject[val]++;
			}
		});
		return countObject;
	}
});

module.exports = {
	MinWindowSubstring,
	info
};
