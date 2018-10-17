/*
Have the function MultipleBrackets(str) take the str parameter being passed and return 1
#ofBrackets if the brackets are correctly matched and each one is accounted for. Otherwise
return 0. For example: if str is "(hello [world])(!)", then the output should be 1 3 because
all the brackets are matched and there are 3 pairs of brackets, but if str is
"((hello [world])" the the output should be 0 because the brackets do not correctly match
up. Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1.
*/

const info = {
	name: 'MultipleBrackets',
	number: 28,
	level: 'medium',
	methods: [],
	concepts: []
};

const MultipleBrackets = (str) => {
	const testString = /[()[\]]/;
	// this handles the situation of there being no brackets
	if (!testString.test(str)) return 1;

	let countParens = 0;
	let countBrackets = 0;
	let totalPairs = 0;
	for (let i = 0, len = str.length; i < len; i++) {
		switch (str.charAt(i)) {
			case '(':
				totalPairs++;
				countParens++;
				break;
			case '[':
				totalPairs++;
				countBrackets++;
				break;
			case ')':
				countParens--;
				break;
			case ']':
				countBrackets--;
				break;
			default:
				break;
		}
		if (countParens < 0 || countBrackets < 0) return 0;
	}
	if (countParens === 0 && countBrackets === 0) return (`1 ${totalPairs}`);
//
// else return 0;
	return 2;
};

module.exports = {
	MultipleBrackets,
	info
};
