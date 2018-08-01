/*
Using the JavaScript language, have the function BitwiseTwo(strArr) take the array of strings
stored in strArr, which will only contain two strings of equal length that represent binary
numbers, and return a final binary string that performed the bitwise AND operation on both
strings. A bitwise AND operation places a 1 in the new string where there is a 1 in both
locations in the binary strings, otherwise it places a 0 in that spot. For example: if strArr
is ["10111", "01101"] then your program should return the string "00101".
*/
const name = 'BitwiseTwo';
const number = 47;
const level = 'easy';
const methods = [];
const concepts = ['for loop', '&& operator', 'string iteration'];

function BitwiseTwo(strArr) {
	const num1 = strArr[0];
	const num2 = strArr[1];
	const len = strArr[0].length;
	let resStr = '';

	for (let i = 0; i < len; i++) {
		if (num1[i] === '1' && num2[i] === '1') {
			resStr += '1';
		} else {
			resStr += '0';
		}
	}
	return resStr;
}

module.exports = {
	BitwiseTwo
};
