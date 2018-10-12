/*
Have the function BracketMatcher(str) take the str parameter being passed and return 1
if the brackets are correctly matched and each one is accounted for. Otherwise return 0.
For example: if str is "(hello (world))", then the output should be 1, but if str is
"((hello (world))" then the output should be 0 because the brackets do not correctly match
up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.
*/

const info = {
	name: 'BracketMatcher',
	number: 22,
	level: 'medium',
	methods: [],
	concepts: []
};

const BracketMatcher = (str) => {
	let counter = 0;
	for (let i = 0, len = str.length; i < len; i++) {
		if (str[i] === '(') {
			counter++;
		} else if (str[i] === ')') {
			counter--;
		}
		if (counter < 0) {
			return 0;
		}
	}
	return counter ? 0 : 1;
};

module.exports = {
	BracketMatcher,
	info
};
