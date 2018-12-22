/*
Have the function WildcardCharacters(str) read str which will contain two strings separated by
a space. The first string will consist of the following sets of characters: +, *, and {N}
which is optional. The plus (+) character represents a single alphabetic character, the
asterisk (*) represents a sequence of the same character of length 3 unless it is followed by
{N} which represents how many characters should appear in the sequence where N will be at
least 1. Your goal is to determine if the second string exactly matches the pattern of the
first string in the input.

For example: if str is "++*{5} gheeeee" then the second string in this case does match the
pattern, so your program should return the string true. If the second string does not match
the pattern your program should return the string false.
*/

const info = {
	name: 'WildcardCharacters',
	number: 52,
	level: 'hard',
	methods: [],
	concepts: []
};


const WildcardCharacters = (str) => {
    // separate the parts
	let pattern = str.split(' ')[0];
	const haystack = str.split(' ')[1];
	pattern = `^${pattern}$`;
	const length = pattern.match(/\*/g) ? pattern.match(/\*/g).length : 0;
	const alphaSearch = '[a-zA-Z]';
	const rep = '\\^';
	let newPatternString = pattern.replace(/\+/g, alphaSearch)
		.replace(/\*(?!\{)/g, '*{3}')
		.replace(/\*\{(\d+)\}/g, (match, cap1) => {
			const repValue = parseInt(cap1, 10) - 1;
			return repValue ? `(${alphaSearch})${rep.repeat(repValue)}` : alphaSearch;
		});
	const fixPattern = /(\\\^)+/;
	let count = 1;
	do {
		newPatternString = newPatternString.replace(fixPattern, (...args) => args[0].replace(/\^/g, count.toString()));
		count++;
	} while (count <= length);
	const newPattern = new RegExp(newPatternString);
	return newPattern.test(haystack).toString();
};

module.exports = {
	WildcardCharacters,
	info
};
