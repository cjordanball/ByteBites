/*
Have the function CharacterRemoval(strArr) read the array of strings stored in strArr, which
will contain 2 elements: the first element will be a sequence of characters representing a
word, and the second element will be a long string of comma-separated words, in alphabetical
order, that represents a dictionary of some arbitrary length. For example: strArr can be:
["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"]. Your goal is to determine the
minimum number of characters, if any, can be removed from the word so that it matches one of
the words from the dictionary. In this case, your program should return 2 because once you
remove the characters "c" and "e" you are left with "world" and that exists within the
dictionary. If the word cannot be found no matter what characters are removed, return -1.
*/

const info = {
	name: 'CharacterRemoval',
	number: 66,
	level: 'medium',
	methods: ['fill()'],
	concepts: ['']
};
const helpers = {};

const CharacterRemoval = (strArr) => {
    // separate the components into the needle and the haystack
	const [needle, haystack] = strArr;
	const wordArray = haystack.split(',');
	// run a check on each dictionary word to see if it can go inside the target
	// then convert each word into its length
	const qualifiedWords = wordArray
		.filter(word => helpers.isWithin(word, needle))
		.map(wordVal => wordVal.length);
	return qualifiedWords.length ? needle.length - Math.max(...qualifiedWords) : -1;
};
Object.assign(helpers, {
	// isWithin is a method that determines if a given word (the needle) can be
	// located within another word (the haystack)
	isWithin(needle, haystack) {
		const testHaystack = haystack.split('');
		for (let i = 0, len = needle.length; i < len; i++) {
			const placement = testHaystack.findIndex(char => char === needle[i]);
			if (placement === -1) {
				return false;
			}
			testHaystack.fill('*', 0, placement + 1);
		}
		return true;
	}
});

module.exports = {
	CharacterRemoval,
	helpers,
	info
};
