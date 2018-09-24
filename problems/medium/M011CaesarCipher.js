/*
Have the function CaesarCipher(str, num) take the str parameter and perform a Caesar
Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works
by shifting each letter in the string N places down in the alphabet (in this case N will
be num). Punctuation, spaces, and capitalization should remain intact. For example if
the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".
*/


const info = {
	name: 'CaesarCipher',
	number: 11,
	level: 'medium',
	methods: [],
	concepts: []
};

const CaesarCipher = (str, num) => {
	const messageLength = str.length;
	let responseString = '';

	for (let i = 0; i < messageLength; i++) {
		const initialCharCode = str[i].charCodeAt(0);
		if (initialCharCode >= 65 && initialCharCode <= 90) {
			responseString += String.fromCharCode((((initialCharCode + num) - 65) % 26) + 65);
		} else if (initialCharCode >= 95 && initialCharCode <= 122) {
			responseString += String.fromCharCode((((initialCharCode + num) - 97) % 26) + 97);
		} else {
			responseString += String.fromCharCode(initialCharCode);
		}
	}
	return responseString;
};

module.exports = {
	CaesarCipher,
	info
};
