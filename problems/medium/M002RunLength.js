/*
Have the function RunLength(str) take the str parameter being passed and return a compressed
version of the string using the Run-length encoding algorithm. This algorithm works by taking
the occurrence of each repeating character and outputting that number along with a single
character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The
string will not contain any numbers, punctuation, or symbols.
*/

const info = {
	name: 'RunLength',
	number: 2,
	level: 'medium',
	methods: [],
	concepts: []
};

const RunLength = (str) => {
	const strArray = str.split('');
	const resultsArray = [];
	const arrlen = strArray.length;
	let count = 1;

	for (let i = 0; i < arrlen; i++) {
		if (strArray[i] === strArray[i + 1]) {
			count += 1;
		} else {
			resultsArray.push(count + strArray[i]);
			count = 1;
		}
	}

	return resultsArray.join('');
};

module.exports = {
	RunLength,
	info
};
