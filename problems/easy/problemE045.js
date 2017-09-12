/*
Using the JavaScript language, have the function NonrepeatingCharacter(str) take the
str parameter being passed, which will contain only alphabetic characters and spaces,
and return the first non-repeating character. For example: if str is "agettkgaeee"
then your program should return k. The string will always contain at least one
character and there will always be at least one non-repeating character.
*/

const name = 'NonrepeatingCharacter';
const number = 45;
const level = 'easy';
const methods = ['slice()', 'includes()'];
const concepts = ['string concatenation', 'while loops'];

const NonrepeatingCharacter = (str) => {
	const len = str.length;
	let startIndex = 0;
	while (true) {
		let needle = str[startIndex];
		let haystack = str.slice(0, startIndex) + str.slice(startIndex + 1);
		if (!haystack.includes(needle)) {
			return needle;
		}
		startIndex += 1;
	}
};

module.exports = {
	NonrepeatingCharacter
};