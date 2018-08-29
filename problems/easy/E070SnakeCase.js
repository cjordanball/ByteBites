/*
Have the function SnakeCase(str) take the str parameter being passed and return it in proper
snake case format where each word is lowercased and separated from adjacent words via an underscore.
The string will only contain letters and some combination of delimiter punctuation characters
separating each word.

For example: if str is "BOB loves-coding" then your program should return the string
bob_loves_coding.
*/

const info = {
	name: 'SnakeCase',
	number: 70,
	level: 'easy',
	method: ['split()', 'map()', 'join()'],
	concept: ['chained functions.', 'regular expressions']
};

const SnakeCase = str => str
	.split(/[^a-zA-Z]/)
	.map(val => val.toLowerCase())
	.join('_');

module.exports = {
	SnakeCase,
	info
};
