/*
Using the JavaScript language, have the function StringPeriods(str) take the str parameter
being passed and determine if there is some substring K that can be repeated N > 1 times to
produce the input string exactly as it appears. Your program should return the longest
substring K, and if there is none it should return the string -1.

For example: if str is "abcababcababcab" then your program should return abcab because that
is the longest substring that is repeated 3 times to create the final string. Another example:
if str is "abababababab" then your program should return ababab because it is the longest
substring. If the input string contains only a single character, your program should return
the string -1.
*/

const name = ['StringPeriods'];
const number = 76;
const level = 'easy';
const methods = ['Math.max', 'Math.trunc', 'Math.sqrt', '(string).slice', '(string).repeat'];
const concepts = ['for-loop', 'if-statement'];

const StringPeriods = (str) => {
	// we will use only lengths of substrings that divide evenly into str
	const len = str.length;
	const pivot = Math.max(Math.trunc(Math.sqrt(len)), len);
	for (let i = 2; i <= pivot; i++) {
		if (len % i === 0) {
			const block = str.slice(0, len / i);
			if (block.repeat(i) === str) {
				return block;
			}
		}
	}
	return -1;
};

module.exports = {
	StringPeriods
};
