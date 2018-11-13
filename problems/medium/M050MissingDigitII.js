/*
Have the function MissingDigitII(str) take the str parameter, which will be a simple
mathematical formula with three numbers, a single operator (+, -, *, or /) and an equals
sign (=) and return the two digits that complete the equation. In two of the numbers in the
equation, there will be a single ? character, and your program should determine what digits
are missing and return them separated by a space. For example, if str is "38?5 * 3 = 1?595"
then your program should output 6 1.

The ? character will always appear in both the first number and the last number in the
mathematical expression. There will always be a unique solution.
*/

const info = {
	name: 'MissingDigitII',
	number: 50,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const MissingDigitII = (str) => {
	for (let i = 0; i <= 9; i++) {
		for (let j = 0; j <= 9; j++) {
			const newStr = str.replace(/\?/, String(i)).replace(/\?/, String(j)).replace(/=/, '===');
			if (eval(newStr)) {
				return `${i} ${j}`;
			}
		}
	}
	return 'unknown';
};

module.exports = {
	MissingDigitII,
	info
};
