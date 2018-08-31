/*
Using the JavaScript language, have the function HDistance(strArr) take the array of strings
stored in strArr, which will only contain two strings of equal length and return the number
of characters at each position that are different between them. For example: if strArr is
["house", "hours"] then your program should return 2. The string will always be of equal
length and will only contain lowercase characters from the alphabet and numbers.
*/

const info = {
	name: ['HDistance'],
	number: 86,
	level: 'easy',
	methods: [],
	concepts: []
};

const HDistance = ((strArr) => {
	const string1 = strArr[0];
	const string2 = strArr[1];
	const len = string1.length;
	let count = 0;

	for (let i = 0; i < len; i++) {
		if (string1[i] !== string2[i]) {
			count += 1;
		}
	}
	return count;
});


module.exports = {
	HDistance,
	info
};
