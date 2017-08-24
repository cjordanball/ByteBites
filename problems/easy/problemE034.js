/*
Using the JavaScript language, have the function HammingDistance(strArr) take the array
of strings stored in strArr, which will only contain two strings of equal length and
return the Hamming distance between them. The Hamming distance is the number of
positions where the corresponding characters are different. For example: if
strArr is ["coder", "codec"] then your program should return 1. The string will
always be of equal length and will only contain lowercase characters from the
alphabet and numbers.
*/

/*
Below, we have two ways to attack this problem. The first, which has the virtue of
being more straightforward, is to use a simple for loop to iterate over the two strings
and compare each letter, keeping a count of the number of places that do not match.
*/

const name = 'HammingDistance';
const number = 34;
const level = 'easy';
const methods = ['split()', 'filter()', ''];
const concepts = ['for-loop', 'if-statement'];

const HammingDistance1 = (strArr) => {
	const word1 = strArr[0];
	const word2 = strArr[1];
	const len = word1.length;
	let count = 0;

	for (let i = 0; i < len; i++) {
		if (word1[i] !== word2[i]) {
			count += 1;
		}
	}
	return count;
};

/*
The second, which some might prefer on the basis that using the array iterator methods is
preferable to a for-loop, is to split one string into an array of chars, then use the array
iterator method, filter(), to test for equality, generating an array of non-matched chars.
We then return the length of the array.
*/
const HammingDistance2 = (strArr) => {
	const word1Arr = strArr[0].split('');
	const word2 = strArr[1];
	return word1Arr
		.filter((val, ind) => {
			return val !== word2[ind];
		})
		.length;
}

module.exports = {
	HammingDistance1,
	HammingDistance2
};