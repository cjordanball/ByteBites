/*
Using the JavaScript language, have the function BitwiseOne(strArr) take the array
of strings stored in strArr, which will only contain two strings of equal length
that represent binary numbers, and return a final binary string that performed
the bitwise OR operation on both strings. A bitwise OR operation places a 0 in
the new string where there are zeroes in both binary strings, otherwise it
places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your
program should return the string "1101"
*/

/*
I can imagine that there are a number of novice programmers, and mabe even some who
have already gotten their feet wet in learning there programming flow and common
methods, for whom the reference to "bitwise" and "binary" may seem quite opaque.
However, this particular problem is very straightforward, and could be rephrased as,
"find all the positions in which two strings have a one and a zero". For a great
introduction as to why that might be a useful thing to know, I recommend "Code: The
Hidden Language of Computer Hardware and Software", by Charles Petzold.
 */


const name = 'BitwiseOne';
const number = 36;
const level = 'easy';
const methods = [];
const concepts = [];

const BitwiseOne = (strArr) => {
	const str1 = strArr[0];
	const str2 = strArr[1];
	let newString = '';
	const len = str1.length;

	for (let i = 0; i < len; i++) {
		if (str1[i] === '1' || str2[i] === '1') {
			newString += '1';
		} else {
			newString += '0';
		}
	}
	return newString;
};

module.exports = {
	BitwiseOne
};