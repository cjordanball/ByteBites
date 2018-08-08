/*
Create a function LetterCapitalize(str) to take the str parameter being passed and capitalize
the first letter of each word. Words will be separated by only one space.
*/

/*
On the assumption that the reader looking at this problem is not an experienced programmer,
you should not worry in the least if the solution presented below looks unintelligible. It
uses regular expressions, which can be terse in the extreme, but can operate like magic. To
learn more about them, I suggest
*/

const info = {
	name: 'LetterCapitalize',
	number: 6,
	level: 'easy',
	methods: ['replace()', 'toUpperCase()'],
	concepts: ['regular expressions']
};

const LetterCapitalize = str => str.replace(/\b\w/g, char => char.toUpperCase());

module.exports = {
	LetterCapitalize
};
