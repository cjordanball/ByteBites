/*
Using the JavaScript language, have the function LargestPair(num) take the num parameter
being passed and determine the largest double digit number within the whole number. For
example: if num is 4759472 then your program should return 94 because that is the largest
double digit number. The input will always contain at least two positive digits.
*/



const name = 'LargestPair';
const number = 44;
const level = 'easy';
const methods = ['split()', 'map()', 'parseInt()', 'max()', 'String()'];
const concepts = ['for loop'];

const LargestPair = (num) => {
	const digitArr = String(num).split('').map(val => parseInt(val, 10));
	const len = digitArr.length;
	let max = 0;
	for (let i = 0; i < len - 1; i++) {
		const newNum = (digitArr[i] * 10) + digitArr[i + 1];
		max = Math.max(max, newNum);
	}
	return max;
};

module.exports = {
	LargestPair
};