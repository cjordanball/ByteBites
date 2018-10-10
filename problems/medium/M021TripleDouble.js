/*
Have the function TripleDouble(num1,num2) take both parameters being passed, and return 1
if there is a straight triple of a number at any place in num1 and also a straight double
of the same number in num2. For example: if num1 equals 451999277 and num2 equals
41177722899, then return 1 because in the first parameter you have the straight triple 999
and you have a straight double, 99, of the same number in the second parameter. If this
isn't the case, return 0.
*/

const info = {
	name: ['TripleDouble'],
	number: 21,
	level: 'medium',
	methods: [],
	concepts: []
};

const TripleDouble = (num1, num2) => {
	const holdArr = [];
	const num1Copy = num1.toString();
	for (let i = 0; i <= 9; i++) {
		i = i.toString();
		const regEx = new RegExp(i + i + i);
		if (regEx.test(num1Copy)) {
			holdArr.push(i);
		}
	}

	if (!holdArr.length) {
		return 0;
	}
	for (let j = 0, len = holdArr.length; j < len; j++) {
		const double = new RegExp(holdArr[j] + holdArr[j]);
		if (double.test(num2)) {
			return 1;
		}
	}
	return 0;
};

module.exports = {
	TripleDouble,
	info
};
