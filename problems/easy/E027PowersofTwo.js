/*
Create a function PowersofTwo(num) to take a number parameter (num), which will be an integer,
and return true if it is a positive, integral power of two. If not, return false. For example
if the input is 16 then your program should return true but if the input is 22 then the output
should be false.
*/

/*
The problem states that we are only looking for a positive, integral power, so the smallest
the number could be is 2.
*/

const info = {
	name: 'PowersofTwo',
	number: 27,
	level: 'easy',
	methods: ['isInteger()', 'toString()', 'test()'],
	concepts: ['binary numbers', 'radix', 'regular expressions']
};

const PowersofTwo = (num) => {
	// deal with numbers less than 2
	if (num < 2 || !Number.isInteger(num)) {
		return false;
	}
	// convert num to a binary form string, then test to see if it is 1 followed by all zeroes.
	const numString = num.toString(2);
	const regEx = /^10+$/;
	return regEx.test(numString);
};

module.exports = {
	PowersofTwo,
	info
};
