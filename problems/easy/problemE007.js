/*
Create a function SimpleSymbols(str) to take the str parameter being passed and determine if
it is an acceptable sequence by either returning 'true' or 'false' (as a string). The str
parameter will be composed of + and = symbols with several letters between them
(e.g., ++d+===+c++==a) and for the string to be true each letter must be surrounded
by a + symbol. So the string in the example would result in false. The string will not
be empty and will have at least one letter.
*/

module.exports = {
	name: ['SimpleSymbols'],
	number: 7,
	level: 'easy',
	methods: ['replace()', 'toUpperCase()'],
	concepts: ['regular expressions'],


	SimpleSymbols(str) {
		// make an array of the regex descriptions that cannot exist in the input
		const testArray = [/^\w/, /\w$/, /[^+]\w]/, /\w[^+]/];
		// check to see if any of the conditions are violated
		return testArray.every(val => !val.test(str)) ? 'true' : 'false';
	}
};
