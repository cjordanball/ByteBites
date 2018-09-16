/*
Using the JavaScript language, have the function NonrepeatingCharacter(str) take the
str parameter being passed, which will contain only alphabetic characters and spaces,
and return the first non-repeating character. For example: if str is "agettkgaeee"
then your program should return k. The string will always contain at least one
character and there will always be at least one non-repeating character.
*/

const info = {
	name: 'NonrepeatingCharacter',
	number: 45,
	level: 'easy',
	methods: ['slice()', 'includes()'],
	concepts: ['string concatenation', 'while loops']
};

const NonrepeatingCharacter = (str) => {
	let startIndex = 0;
	let goAgain;
	while (!goAgain) {
		const needle = str[startIndex];
		const haystack = str.slice(0, startIndex) + str.slice(startIndex + 1);
		if (!haystack.includes(needle)) {
			goAgain = needle;
		} else {
			startIndex += 1;
		}
	}
	return goAgain;
};

module.exports = {
	NonrepeatingCharacter,
	info
};
