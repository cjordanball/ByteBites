/*
Have the function LetterCount(str) take the str parameter being passed and return the first
word with the greatest number of repeated letters. For example: "Today, is the greatest day
ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever
which also has 2 e's. If there are no words with repeating letters return -1. Words will be
separated by spaces.
*/

const info = {
	name: 'LetterCount',
	number: 10,
	level: 'medium',
	methods: [],
	concepts: []
};
let helpers;

const LetterCount = (str) => {
	let modStr = str.replace(/[^a-zA-z]/g, ' ');
	modStr = modStr.toLowerCase();
	const wordArray = modStr.split(' ');

	const wordInfo = wordArray.map(val => ({
		word: val,
		count: helpers.getMaxCount(val)
	})).sort((val1, val2) => val2.count - val1.count);
	return wordInfo[0].count === 1 ? -1 : wordInfo[0].word;
};

helpers = {
	getNumberOfOccurrences(word, letter) {
		const wordLength = word.length;
		let count = 0;
		for (let i = 0; i < wordLength; i++) {
			if (word[i] === letter) {
				count++;
			}
		}
		return count;
	},
	getMaxCount(word) {
		const wordLength = word.length;
		let countHolder = 0;
		for (let i = 0; i < wordLength; i++) {
			const count = this.getNumberOfOccurrences(word, word[i]);
			if (countHolder < count) {
				countHolder = count;
			}
		}
		return countHolder;
	}
};

module.exports = {
	LetterCount,
	helpers,
	info
};
