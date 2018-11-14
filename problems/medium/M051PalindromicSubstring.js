/*
Have the function PalindromicSubstring(str) take the str parameter being passed and find
the longest palindromic substring, which means the longest substring which is read the same
forwards as it is backwards. For example: if str is "abracecars" then your program should
return the string racecar because it is the longest palindrome within the input string.

The input will only contain lowercase alphabetic characters. The longest palindromic
substring will always be unique, but if there is none that is longer than 2 characters,
return the string none.
*/

/*
Note the use of the descending outer for loop - this stops once we have found what will
be the longest substring, thus saving wasted time going through shorter substrings.
*/

const info = {
	name: 'MissingDigitII',
	number: 50,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const PalindromicSubstring = (str) => {
	for (let i = str.length; i > 2; i--) {
		for (let j = 0, len = str.length; j <= len - i; j++) {
			const newSlice = str.substr(j, i);
			if (isPalindrome(newSlice)) {
				return newSlice;
			}
		}
	}
	return 'none';
};

function isPalindrome(str) {
	return str === str.split('').reverse().join('');
}

module.exports = {
	PalindromicSubstring,
	info
};
