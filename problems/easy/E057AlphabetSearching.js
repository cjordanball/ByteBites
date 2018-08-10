/*
Have the function AlphabetSearching(str) take the str parameter being passed and return
the string true if every single letter of the English alphabet exists in the string,
otherwise return the string false. For example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv"
then your program should return the string true because every character in the alphabet
exists in this string even though some characters appear more than once. Use the Parameter
Testing feature in the box below to test your code with different arguments.
*/

/*
There are a couple of ways to go at this problem.  The version below takes advantage of a
fairly recent addition to the JavaScript built-in methods, the String.prototype.includes()
method.  It allows us to check each letter, one-by-one, and return false as soon as we
hit a letter not included in the string.
*/

const info = {
	name: 'Three Numbers',
	number: 56,
	level: 'easy',
	methods: ['string.includes()', 'toLowerCase()', 'fromCharCode()'],
	concepts: ['for loop', 'conditional']
};

function AlphabetSearching(str) {
	const modString = str.toLowerCase();
	for (let i = 97; i < 97 + 26; i++) {
		const char = String.fromCharCode(i);
		if (!modString.includes(char)) {
			return false;
		}
	}
	return true;
}

module.exports = {
	AlphabetSearching
};
