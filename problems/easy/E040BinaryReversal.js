/*
Using the JavaScript language, have the function BinaryReversal(str) take the string parameter
being passed, which will be a positive integer, take its binary representation, reverse that
string of bits, and then finally return the new reversed string in decimal form. For example:
if str is "47", then the binary version of this integer is 00101111. Your program should
reverse this binary string, which then becomes: 11110100 and then finally return the decimal
version of this string, which is 244.
*/

/*
One thing left out in the problem description is that the given string will be a byte, or 8 bits.
So, if we have the string '11' (i.e., the binary representation of the number 3), the reverse is
not "11", but rather is "11000000", since the byte's full representation must include the six
leading zeroes.
*/

const info = {
	name: 'BinaryReversal',
	number: 40,
	level: 'easy',
	methods: ['parseInt()', 'toString()', 'split()', 'reverse()', 'join()'],
	concepts: ['exponential operator', 'binary numbers']
};

const BinaryReversal = (str) => {
	const biNumString = parseInt(str, 10)
		.toString(2)
		.split('')
		.reverse()
		.join('');

	const fillNum = 8 - biNumString.length;
	return (parseInt(biNumString, 2) * (2 ** fillNum)).toString(10);
};

module.exports = {
	BinaryReversal,
	info
};
