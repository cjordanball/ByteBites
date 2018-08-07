/*
Create a function, FirstReverse(str), that takes a string parameter ('str') being passed and
returns the string in reversed order.
*/

const name = 'FirstReverse';
const number = 1;
const level = 'easy';
const methods = [];
const concepts = ['for-loop', 'length of string', 'const', '+= operator', 'if statements', 'typeof'];

const FirstReverse = (str = '') => {
	if (typeof str !== 'string') {
		return 'The input must be a string.';
	}
	// set up a variable to hold the length of the string
	// this will not change, so we will set it as a const
	const len = str.length;

	// set up a variable to hold the new string, which will begin as an empty string
	let newstr = '';

	/*
	iterate through the original string, starting at the end, and build up the new string by
	adding each previous letter (Note: the 'x +=' operator is simply a shorthand
	for 'x = x +' )
	*/
	for (let i = 0; i < len; i++) {
		newstr += str[len - (i + 1)];
	}
	return newstr;
};

module.exports = {
	FirstReverse
};

