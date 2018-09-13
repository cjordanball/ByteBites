/*
Using the JavaScript language, have the function Wildcards(str) read str which will contain
two strings separated by a space. The first string will consist of the following sets of
characters: +, *, $, and {N} which is optional. The plus (+) character represents a single
alphabetic character, the ($) character represents a number between 1-9, and the asterisk (*)
represents a sequence of the same character of length 3 unless it is followed by {N} which
represents how many characters should appear in the sequence where N will be at least 1. Your
goal is to determine if the second string exactly matches the pattern of the first string in
the input.

For example: if str is "++*{5} jtggggg" then the second string in this case does match the
pattern, so your program should return the string true. If the second string does not match
the pattern your program should return the string false.
*/

const info = {
	name: 'Wildcards',
	number: 54,
	level: 'hard',
	methods: ['replace()', 'split()', 'filter()', 'includes()', 'map()', 'parseInt()', 'reduce()', 'forEach()', 'push()', 'splice()', 'join()', 'test()', 'repeat()'],
	concepts: ['regular expressions', 'chaining methods']
};

const Wildcards = (str) => {
	const [testString, targetString] = str.split(' ');
	const lenAlt = testString
		.replace(/([$+])/g, ',$1,')
		.replace(/\*(?!\{)/g, ',3,')
		.replace(/\*\{(\d+)\}/g, ',$1,')
		.split(',')
		.filter(val => ![',', ' ', ''].includes(val))
		.map(val => parseInt(val, 10) ? parseInt(val, 10) : val);
	const strLength = lenAlt.reduce((val1, val2) => typeof val2 === 'number' ? val2 + val1 : val1 + 1, 0);

	if (strLength !== targetString.length) {
		return 'false';
	}
	let counter = 0;
	const startArray = [];
	lenAlt.forEach((val) => {
		startArray.push(counter);
		counter += typeof val === 'number' ? val : 1;
	});
	const targetArray = targetString.split('');
	const newTargetArray = [];
	lenAlt.forEach((val) => {
		const len = typeof val === 'number' ? val : 1;
		newTargetArray.push(targetArray.splice(0, len).join(''));
	});
	let res = '';
	lenAlt.forEach((val, ind) => {
		const proto = newTargetArray[ind][0];
		if (val === '+' && !(/^[a-zA-Z]$/.test(newTargetArray[ind]))) {
			res = 'false';
		} else if (val === '$' && !(/^[1-9]$/.test(newTargetArray[ind]))) {
			res = 'false';
		} else if (typeof val === 'number' && !(newTargetArray[ind] === proto.repeat(val))) {
			res = 'false';
		} else {
			res = 'true';
		}
	});

	return res;
};

module.exports = {
	Wildcards,
	info
};
