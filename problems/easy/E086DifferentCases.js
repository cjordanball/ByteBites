/*
Using the JavaScript language, have the function DifferentCases(str) take the str parameter
being passed and return it in upper camel case format where the first letter of each word is
capitalized. The string will only contain letters and some combination of delimiter
punctuation characters separating each word.

For example: if str is "Daniel LikeS-coding" then your program should return the string
DanielLikesCoding.
*/

/*
I include two solutions below, the first running a loop through the original string and
building a string to return as the solution.  The second uses the replace method and
regular expressions to solve the problem in two lines.  Note, however, that the second
solution is not as robust, as it will not catch use of nonletter chars at the beginning
or end of the string, or the use of numbers as delimiters.  Neither of these things should
happen, according to the outline of the problem, but the worry does highlight the importance
of validating input.
*/

const info = {
	name: ['DifferentCases'],
	number: 86,
	level: 'easy',
	methods: [],
	concepts: []
};

const DifferentCasesI = (str) => {
	const charTest = /[a-zA-Z]/;
	let returnString = '';
	const len = str.length;
	const baseString = str.toLowerCase();
	for (let i = 0; i < len; i++) {
		if (i === len - 1 && !charTest.test(baseString[i])) {
			return returnString;
		}
		if (i === 0 && charTest.test(baseString[i])) {
			returnString += baseString[i].toUpperCase();
			continue;
		}
		if (baseString[i - 1] && charTest.test(baseString[i])) {
			if (!charTest.test(baseString[i - 1])) {
				returnString += baseString[i].toUpperCase();
			} else {
				returnString += baseString[i];
			}
		}
	}
	return returnString;
};

const DifferentCasesII = str => str
	.toLowerCase()
	.replace(/\W(\w)/g, (match, captch) => captch.toUpperCase())
	.replace(/^\w/, (match => match.toUpperCase()));

module.exports = {
	DifferentCasesI,
	DifferentCasesII,
	info
};
