/*
Create a function LetterCountI(str) to take the str parameter being passed and return the first
word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!"
should return "greatest" because it has 2 e's (and 2 t's) and it comes before ever which also
has 2 e's. If there are no words with repeating letters return -1. Words will be separated by
spaces.
 */

const name = 'LetterCountI';
const number = 18;
const level = 'easy';
const methods = ['split()', 'sort()', 'forEach()', 'Object.keys()', 'includes()', 'map()', 'Math.max()'];
const concepts = ['ternary expressions', 'spread operator'];
let helpers;

const LetterCountI = (str) => {
	const sentenceArray = str.split(' ');

	sentenceArray.sort((word1, word2) => helpers.scoring(word2) - helpers.scoring(word1));

	return helpers.scoring(sentenceArray[0]) === 1 ? -1 : sentenceArray[0];
};

helpers = {
	scoring(str) {
		const scoringObject = {};
		const strArray = str.split('');
		strArray.forEach((val) => {
			if (Object.keys(scoringObject).includes(val)) {
				scoringObject[val] += 1;
			} else {
				scoringObject[val] = 1;
			}
		});
		const objKeys = Object.keys(scoringObject);
		const objValues = objKeys.map(val => scoringObject[val]);

		return Math.max(...objValues);
	}
};

module.exports = {
	LetterCountI,
	helpers
};

