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
	name: 'TetrisMove',
	number: 52,
	level: 'hard',
	methods: [],
	concepts: []
};

const helpers = {};
const WildcardCharacters = (str) => {
    // separate the parts
	const strArr = str.split(' ');
    // format the string into an array of number strings
	const stringRep = helpers.adjustStringRep(strArr[0])
        .split('')
        .map(val => parseInt(val, 10));
	const len = stringRep.length;
    // split up the test string into an array
	const subjectArr = strArr[1].split('');

	const targetLength = stringRep
		.reduce((val1, val2) => val1 + val2, 0);

	if (targetLength !== subjectArr.length) {
		return 'false';
	}

	let counter = 0;
	for (let i = 0; i < len; i++) {
		const mySlice = subjectArr.slice(counter, counter + stringRep[i]);
		const allSame = mySlice.every(val => val === mySlice[0]);
		if (!allSame) {
			return 'false';
		}
		counter += stringRep[i];
	}
	return 'true';
};

Object.assign(helpers, {
    // take the string and convert the signs into the number of consecutive letters
	adjustStringRep(str) {
		return str
            .replace(/\+/g, '1')
            .replace(/\*(?!\{)/g, '3')
			.replace(/\*\{(\d+)\}/g, '$1');
	}
});

module.exports = {
	WildcardCharacters,
	helpers,
	info
}
