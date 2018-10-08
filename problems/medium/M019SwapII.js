/*
Have the function SwapII(str) take the str parameter and swap the case of each character.
Then, if a letter is between two numbers (without separation), switch the places of the two
numbers. For example: if str is "6Hello4 -8World, 7 yes3" the output should be
"4hELLO6 -8wORLD, 7 YES3".
*/

/*
This problem is a great example of the convenience of regular expressions in solving
problems based on text patterns.  My solution before I had learned regular expressions
was approximately 65 lines of code, which was shortened to about a dozen lines, even
being pretty generous in my spacing.
*/

const info = {
	name: 'SwapII',
	number: 19,
	level: 'medium',
	methods: [],
	concepts: []
};

let helpers;

const SwapII = (str) => {
	const switchString = helpers.caseSwap(str);
	return switchString.replace(/(\d)([A-Za-z]+)(\d)/g, '$3$2$1');
};

helpers = {
	caseSwap(str) {
		return str
			.split('')
			.map((letter) => {
				if (/[A-Z]/.test(letter)) {
					return letter.toLowerCase();
				}
				return letter.toUpperCase();
			})
			.join('');
	}
};

module.exports = {
	SwapII,
	helpers,
	info
};
