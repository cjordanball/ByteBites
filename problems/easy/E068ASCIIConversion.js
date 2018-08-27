/*
Have the function ASCIIConversion(str) take the str parameter being passed and return a new
string where every character, aside from the space character, is replaced with its corresponding
decimal character code. For example: if str is "dog" then your program should return the string
100111103 because d = 100, o = 111, g = 103.
*/

const info = {
	name: 'ASCIIConversion',
	number: 68,
	level: 'easy',
	methods: ['charCodeAt()', 'split()', 'map()', 'join()'],
	concepts: ['array iterators']
};

function ASCIIConversion(str) {
	const myArr = str.split(' ')
	.map(word => word.split('')
		.map(char => char.charCodeAt(0))
		.join(''))
	.join(' ');
	return myArr;
}

module.exports = {
	ASCIIConversion,
	info
};
