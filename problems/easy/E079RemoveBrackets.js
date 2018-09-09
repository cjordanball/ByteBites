/*
Have the function RemoveBrackets(str) take the str string parameter being passed, which will
contain only the characters "(" and ")", and determine the minimum number of brackets that
need to be removed to create a string of correctly matched brackets. For example: if str is
"(()))" then your program should return the number 1. The answer could potentially be 0, and
there will always be at least one set of matching brackets in the string.
*/

const info = {
	name: ['PalindromeSwapper'],
	number: 78,
	level: 'easy',
	methods: [],
	concepts: []
};

const RemoveBrackets = (str) => {
	let throwouts = 0;
	let counter = 0;
	const arr = str.split('');
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		// a good example of the use of pre++ and pre-- as opposed to post++ and post--
		counter = arr[i] === '(' ? ++counter : --counter;
		if (counter < 0) {
			throwouts++;
			counter = 0;
		}
	}
	throwouts += counter;
	return throwouts;
};

module.exports = {
	RemoveBrackets,
	info
};
