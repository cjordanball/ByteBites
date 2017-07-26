/*
Create a function LetterChanges(str) to take the string parameter being passed and modify it using
the following algorithm. Replace every letter in the string with the letter following it in the
alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e,
i, o, u) and finally return this modified string. If a letter is capitalized in the original string
do not capitalize it in the output string unless it is a vowel.
*/

/*
In this problem, I explicitly divide the total problem into three very small problems, each solved
with its own discreet "helper method." Then, I return the result of calling the functions in a
sequence, with the output of the nth method becoming the parameter of the (n-1)th method. Note that
this approach allows me to write tests, then solve the problem backward, testing the smallest part
first, then working out to the ultimate goal.
*/

const name = 'LetterChanges';
const number = 4;
const level = 'easy';
const method = ['trim()', 'toLowerCase()', 'test()', 'fromCharCode()', 'charCodeAt()', 'replace()', 'toUpperCase()'];
const concepts = ['of operator', 'modulo operator', 'regular expressions', 'replace() with callback'];
let helpers;

const LetterChanges = (str) => {
	return helpers.capitalizer(helpers.shifter(helpers.prepare(str)));
};

helpers = {
	// prepare() takes a string, whacks off any front and trailing whitespace, and puts everything
	// in lowercase.
	prepare(str) {
		return str.trim().toLowerCase();
	},

	// shifter() checks each char in the string and, if it is a letter, shifts it by
	// one value (a -> b, b -> c, etc.).  The modulo function is used to shift z to a.
	shifter(str) {
		let newString = '';
		for (let char of str) {
			newString += /[a-z]/.test(char) ? String.fromCharCode(((char.charCodeAt(0) - 18) % 26) + 97) : char;
		}
		return newString;
	},

	// capitalizer() takes a string, returns the string with all vowels capitalized
	capitalizer(str) {
		return str.replace(/[aeiou]/g, char => char.toUpperCase());
	}
};

module.exports = {
	LetterChanges,
	helpers
};
