/*
Create a function, Palindrome(str), that takes a string parameter passed to it and returns true
if the parameter is a palindrome, (i.e., the string is the same forward as it is backward);
otherwise, return false. For example: "racecar" is also "racecar" backwards. Punctuation
and numbers will not be part of the string.
*/

/*
Palindrome problems are sometimes difficult because they are not described completely, and the
above is no exception. Do spaces count?, do cases have to match?, etc.  Anyway, the following
is a solution that is case-insensitive, but space-sensitive.
*/

const info = {
	name: 'Palindrome',
	number: 15,
	level: 'easy',
	methods: ['toLowerCase()', 'charAt()'],
	concepts: ['for loop']
};

const Palindrome = (str) => {
	const lowerCaseString = str.toLowerCase();
	const len = str.length;
	let rts = '';

	for (let i = len - 1; i >= 0; i--) {
		// I prefer using the simpler syntax of referring to the character at position i in
		// a string as "str[i]"; however, the is not supported in all browsers.
		rts += lowerCaseString.charAt(i);
	}

	return rts === lowerCaseString;
};

module.exports = {
	Palindrome
};
