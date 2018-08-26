/*
Have the function CamelCase(str) take the str parameter being passed and return it in proper
camel case format where the first letter of each word is capitalized (excluding the first letter).
The string will only contain letters and some combination of delimiter punctuation characters
separating each word.

For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding.
*/

const info = {
	name: 'CamelCase',
	number: 67,
	level: 'easy',
	methods: ['split()', 'map()', 'toLowerCase()', 'toUpperCase()', 'join()'],
	concepts: ['regular expressions']
};

function CamelCase(str) {
	let strArr = str.split(/[^a-zA-Z]/);
	strArr = strArr.map((val, ind) => {
		const lowerVal = val.toLowerCase();
		if (ind) {
			const valArr = lowerVal.split('');
			valArr[0] = valArr[0].toUpperCase();
			return valArr.join('');
		}
		return lowerVal;
	});
	return strArr.join('');
}

module.exports = {
	CamelCase,
	info
};
