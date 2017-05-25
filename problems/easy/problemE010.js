/*
Create a function AlphabetSoup(str) to take a string parameter being passed to it and return
the string with the letters in alphabetical order (i.e., 'hello' becomes 'ehllo'). Assume
numbers and punctuation symbols will not be included in the string.
*/

/*
The coding for this problem is deceptively easy. One can simply use the built-in Javascript
sorting method, which, as a default, sorts entries by alphabetical order. However, it leaves
a lot of room for further investigation, particularly in the full use of the sort() method,
which can take a sorting function as a parameter.
*/

module.exports = {
	name: ['AlphabetSoup'],
	number: 10,
	level: 'easy',
	methods: ['split', 'sort', 'join'],
	concepts: ['chaining methods'],

	AlphabetSoup(str) {
		return str.split('').sort().join('');
	}
};
