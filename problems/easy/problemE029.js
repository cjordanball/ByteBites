/*
Create a function MultiplicativePersistence(num) to take a number parameter (num), which will
always be a positive integer, and return its multiplicative persistence, which is the number
of times you must multiply the digits in num until you reach a single digit. For example: if
num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally
1 * 4 = 4 and you stop at 4.
*/

const name = 'MultiplicativePersistence';
const number = 29;
const level = 'easy';
const methods = ['toString()', 'split()', 'map()', 'reduce()'];
const concepts = ['while loop'];
let helpers;

const MultiplicativePersistence = (num) => {
	let ourNum = num;
	let counter = 0;
	while (ourNum > 9) {
		ourNum = helpers.arrayPrep(ourNum);
		counter += 1;
	}
	return counter;
};

helpers = {
	arrayPrep(num) {
		const reducedNum = num
			.toString(10)
			.split('')
			.map(val => parseInt(val, 10))
			.reduce((num1, num2) => num1 * num2, 1);
		return reducedNum;
	}
}

module.exports = {
	MultiplicativePersistence,
	helpers
};