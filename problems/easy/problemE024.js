/*
Create a function SwapCase(str) to take a string parameter str and swap the case of each character.
For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay
the way they are.
*/

/*
There are several ways to approach this problem. The following is quite straightforward, traversing
the string and then examing the ASCII code of the character to see if it is an uppercase or
lowercase letter.
 */

const name = 'SwapCase';
const number = 24;
const level = 'easy';
const methods = ['charCodeAt()', 'toLowerCase()', 'toUpperCase()'];
const concepts = ['for loop', 'if - else if - else', 'character codes'];

const SwapCase = (str) => {
	let newStr = '';
	const len = str.length;
	for (let i = 0; i < len; i++) {
		const code = str.charCodeAt(i);
		if (code <= 90) {
			newStr += str[i].toLowerCase();
		} else if (code >= 97) {
			newStr += str[i].toUpperCase();
		} else {
			newStr += str[i];
		}
	}

	return newStr;
};


module.exports = {
	SwapCase
};
