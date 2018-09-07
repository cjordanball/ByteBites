/*
Have the function PalindromeSwapper(str) take the str parameter being passed and determine
if a palindrome can be created by swapping two adjacent characters in the string. If it is
possible to create a palindrome, then your program should return the palindrome, if not
then return the string -1. The input string will only contain alphabetic characters. For
example: if str is "rcaecar" then you can create a palindrome by swapping the second and
third characters, so your program should return the string racecar which is the final
palindromic string.
*/

const info = {
	name: ['PalindromeSwapper'],
	number: 78,
	level: 'easy',
	methods: [],
	concepts: []
};
const PalindromeSwapper = (str) => {
	const inputArray = str.split('');
	const strLen = inputArray.length;
	const palTester = (arr) => {
		const len = arr.length;
		for (let i = 0; i < len; i++) {
			if (arr[i] !== arr[len - (1 + i)]) {
				return false;
			}
		}
		return true;
	};

	for (let i = 0; i < strLen - 1; i++) {
		const newArray = Array.from(inputArray);
		newArray.splice(i, 2, newArray[i + 1], newArray[i]);
		if (palTester(newArray)) {
			return newArray.join('');
		}
	}
	return -1;
};

module.exports = {
	PalindromeSwapper,
	info
};
