/*
Have the function StringChanges(str) take the str parameter being passed, which will be a
string containing letters from the alphabet, and return a new string based on the following
rules. Whenever a capital M is encountered, duplicate the previous character (then remove
the M), and whenever a capital N is encountered remove the next character from the string
(then remove the N). All other characters in the string will be lowercase letters. For
example: "abcNdgM" should return "abcgg". The final string will never be empty.

*/
const info = {
	name: 'StringChanges',
	number: 84,
	level: 'easy',
	methods: ['shift()', 'pop()', 'splice()', 'join()'],
	concepts: ['for loops', 'altering index in for loop']
};

function StringChanges(str) {
	const strArray = str.split('');
	let len = strArray.length;

	for (let i = 0; i < len; i++) {
		if (strArray[i] === 'M') {
			if (!i) {
				strArray.shift();
				len -= 1;
				i -= 1;
			} else {
				strArray.splice(i, 1, strArray[i - 1]);
			}
		} else if (strArray[i] === 'N') {
			if (i === len - 1) {
				strArray.pop();
			} else {
				strArray.splice(i, 2);
				len -= 2;
				i -= 2;
			}
		}
	}
	return strArray.join('');
}

module.exports = {
	StringChanges
};
