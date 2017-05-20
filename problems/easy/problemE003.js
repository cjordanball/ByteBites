/*
Create a function,  LongestWord(sen), which takes a string parameter, 'sen' and returns the
longest word in the string. If there are two or more words that are the same length, return
the first word from the string with that length. Ignore punctuation and assume sen will not
be empty.
*/

module.exports = {
	name: ['LongestWord'],
	number: 3,
	level: 'easy',
	methods: ['trim()', 'replace()', 'split()', 'sort()', 'pop()'],
	concepts: ['chaining methods', 'regular expressions', 'const', 'sorting'],

	LongestWord(sen) {
		// just to be safe, remove whitespace preceding of following
		// also, remove any punctuation marks (will leave hyphens alone)
		const modifiedSen = sen.trim().replace(/[^\w\s-]/g, '');

		// split the sentence by its spaces
		const wordArray = modifiedSen.split(' ');

		// sort the words in the wordArray by length. Note that we can do this, even though
		// wordArray is a const and will be rearranged. The const part is the pointer to
		// the Array object.

		wordArray.sort((val1, val2) => {
			return (val1.length - val2.length);
		});

		return wordArray.pop();
	},
};
