/*
Have the function NumberEncoding(str) take the str parameter and encode the message according
to the following rule: encode every letter into its corresponding numbered position in the
alphabet. Symbols and spaces will also be used in the input. For example: if str is "af5c a#!"
then your program should return 1653 1#!.
*/

const info = {
	name: 'NumberEncoding',
	number: 33,
	level: 'medium',
	methods: [],
	concepts: []
};

const NumberEncoding = (str) => {
	let stringBuild = '';
	const stringLength = str.length;
	const littleString = str.toLowerCase();
	for (let i = 0; i < stringLength; i++) {
		if (/[a-z]/.test(littleString[i])) {
			stringBuild += (littleString[i].charCodeAt() - 96).toString(10);
		} else {
			stringBuild += littleString[i];
		}
	}
	return stringBuild;
};

module.exports = {
	NumberEncoding,
	info
};
