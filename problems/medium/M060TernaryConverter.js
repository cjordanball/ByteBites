/*
Have the function TernaryConverter(num) take the num parameter being passed, which will
always be a positive integer, and convert it into a ternary representation. For example:
if num is 12 then your program should return 110.
*/

const info = {
	name: 'TernaryConverter',
	number: 60,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

// The following almost feels like cheating, it is so easy.  So, I comment it out, and
// provide a solution with a little more substance.

// const TernaryConverter = num => num.toString(3);

const TernaryConverter = (num) => {
	// determine the maximum power of three that fits into num:
	const powerNum = Math.floor(Math.log(num) / Math.log(3));
	let storeResult = '';
	let numCopy = num;

	for (let i = powerNum; i >= 0; i--) {
		const nextDigit = Math.trunc(numCopy / (3 ** i));
		numCopy %= (3 ** i);
		storeResult += nextDigit;
	}
	return storeResult;
};

module.exports = {
	TernaryConverter,
	info
};
