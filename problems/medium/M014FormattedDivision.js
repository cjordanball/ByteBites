/*
Have the function FormattedDivision(num1,num2) take both parameters being passed, divide
num1 by num2, and return the result as a string with properly formatted commas and 4
significant digits after the decimal place. For example: if num1 is 123456789 and num2 is
10000 the output should be "12,345.6789". The output must contain a number in the one's
place even if it is a zero.
*/

const info = {
	name: 'FormattedDivision',
	number: 14,
	level: 'medium',
	methods: [],
	concepts: []
};

const FormattedDivision = (num1, num2) => {
    // this gets most of the problem done in one simple step!
	const divisionResult = (num1 / num2).toFixed(4);
    // split the string into an array with two items: integer, decimal
	const numParts = divisionResult.split('.');
	const integerPart = numParts[0];
	const len = integerPart.length;
	let count = len;
	let responseString = '';
	for (let i = 0; i < len; i++) {
		if (count % 3 === 1 && count > 3) {
			responseString += `${integerPart[i]},`;
		} else {
			responseString += `${integerPart[i]}`;
		}
		count--;
	}
	return `${responseString}.${numParts[1]}`;
};

module.exports = {
	FormattedDivision,
	info
};
