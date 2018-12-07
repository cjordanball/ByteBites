/*
Have the function StringExpression(str) read the str parameter being passed which will contain
the written out version of the numbers 0-9 and the words "minus" or "plus" and convert the
expression into an actual final number written out as well. For example: if str is
"foursixminustwotwoplusonezero" then this converts to "46 - 22 + 10" which evaluates to 34 and
your program should return the final string threefour. If your final answer is negative it
should include the word "negative."
*/

const info = {
	name: 'StringExpression',
	number: 72,
	level: 'medium',
	methods: [],
	concepts: []
};

const StringExpression = (str) => {
	let stringCopy = str.slice(0);
	const dictionary = [
		{ name: 'zero', val: '0' },
		{ name: 'one', val: '1' },
		{ name: 'two', val: '2' },
		{ name: 'three', val: '3' },
		{ name: 'four', val: '4' },
		{ name: 'five', val: '5' },
		{ name: 'six', val: '6' },
		{ name: 'seven', val: '7' },
		{ name: 'eight', val: '8' },
		{ name: 'nine', val: '9' },
		{ name: 'minus', val: '-' },
		{ name: 'plus', val: '+' }
	];
	dictionary.forEach((val) => {
		const regEx = new RegExp(val.name, 'g');
		stringCopy = stringCopy.replace(regEx, val.val);
	});
	let resultString = '';
	const resultArray = eval(stringCopy)
		.toString()
		.split('');
	resultArray.forEach((val) => {
		resultString += dictionary[parseInt(val, 10)].name;
	});

	return resultString;
};

module.exports = {
	StringExpression,
	info
};
