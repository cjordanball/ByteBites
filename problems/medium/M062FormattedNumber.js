/*
Have the function FormattedNumber(strArr) take the strArr parameter being passed, which will
only contain a single element, and return the string true if it is a valid number that contains
only digits with properly placed decimals and commas, otherwise return the string false. For
example: if strArr is ["1,093,222.04"] then your program should return the string true, but if
the input were ["1,093,22.04"] then your program should return the string false. The input
may contain characters other than digits.
*/

const info = {
	name: 'FormattedNumber',
	number: 62,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const FormattedNumber = (strArr) => {
	return strArr[0];
};

module.exports = {
	FormattedNumber,
	info
};
