/*
Have the function OffBinary(strArr) read the array of strings stored in strArr, which will
contain two elements, the first will be a positive decimal number and the second element will
be a binary number. Your goal is to determine how many digits in the binary number need to be
changed to represent the decimal number correctly (either 0 change to 1 or vice versa). For
example: if strArr is ["56", "011000"] then your program should return 1 because only 1 digit
needs to change in the binary number (the first zero needs to become a 1) to correctly
represent 56 in binary.
*/

const info = {
	name: 'StringZigzag',
	number: 70,
	level: 'medium',
	methods: [],
	concepts: []
};

const OffBinary = (strArr) => {
	const target = parseInt(strArr[0], 0).toString(2);
	const match = strArr[1];

	if (target.length === match.length) {
		let counter = 0;
		for (let i = 0, len = target.length; i < len; i++) {
			if (target[i] !== match[i]) {
				counter++;
			}
		}
		return counter;
	}
	return 'length error';
};

module.exports = {
	OffBinary,
	info
};
