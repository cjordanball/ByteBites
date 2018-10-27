/*
Have the function LookSaySequence(num) take the num parameter being passed and return
the next number in the sequence according to the following rule: to generate the next
number in a sequence read off the digits of the given number, counting the number of
digits in groups of the same digit. For example, the sequence beginning with 1 would
be: 1, 11, 21, 1211, ... The 11 comes from there being "one 1" before it and the 21
comes from there being "two 1's" before it. So your program should return the next
number in the sequence given num.
*/

const info = {
	name: 'LookSaySequence',
	number: 31,
	level: 'medium',
	methods: [],
	concepts: []
};

const LookSaySequence = (num) => {
	const numString = num.toString(10);
	const stringLength = numString.length;
	let createdNum = '';
	let counter = 0;
	for (let i = 0; i < stringLength; i++) {
		counter++;
		if (numString[i] === numString[i + 1]) {
			continue;
		}
		createdNum += (counter.toString(10) + numString[i].toString(10));
		counter = 0;
	}
	return parseInt(createdNum, 10);
};

module.exports = {
	LookSaySequence,
	info
};
