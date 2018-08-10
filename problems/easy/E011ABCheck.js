/*
Have the function ABCheck(str) take the str parameter being passed and return the string
"true" if the characters a and b are separated by exactly 3 places anywhere in the string
at least once (ie. "lane borrowed" would result in true because there is exactly three
characters between a and b). Otherwise return the string false.
*/

/*
This problem becomes trivial with the use of regular expressions. In fact, if you are not
familiar with their use, this problem should inspire you to take a few hours and familiarize
yourself with them.
*/

info = {
	name: 'ABCheck',
	number: 11,
	level: 'easy',
	methods: ['test()'],
	concepts: ['regular expressions']
};

const ABCheck = str => (/(a...b|b...a)/.test(str) ? 'true' : 'false');

module.exports = {
	ABCheck
};
