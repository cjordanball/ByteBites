/*
Have the function StringMerge(str) read the str parameter being passed which will contain a
large string of alphanumeric characters with a single asterisk character splitting the string
evenly into two separate strings. Your goal is to return a new string by pairing up the
characters in the corresponding locations in both strings. For example: if str is "abc1*kyoo"
then your program should return the string akbyco1o because a pairs with k, b pairs with y,
etc. The string will always split evenly with the asterisk in the center.
*/

const info = {
	name: 'SumMultiplier',
	number: 72,
	level: 'easy',
	method: [],
	concept: []
};

const StringMerge = (str) => {
	let newString = '';
	const len = (str.length - 1) / 2;
	const arr = str.split('*');

	for (let i = 0; i < len; i++) {
		newString += arr[0][i] + arr[1][i];
	}
	return newString;
};

module.exports = {
	StringMerge,
	info
};
