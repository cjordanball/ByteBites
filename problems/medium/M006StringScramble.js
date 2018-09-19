/*
Have the function StringScramble(str1,str2) take both parameters being passed and return
the string true if a portion of str1 characters can be rearranged to match str2, otherwise
return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output
should return true. Punctuation and symbols will not be entered with the parameters.
*/

const info = {
	name: '',
	number: 5,
	level: 'medium',
	methods: [],
	concepts: []
};

const StringScramble = (str1, str2) => {
// first, knock the strings to lower case and put them in arrays for manipulation

	const arr1 = str1.toLowerCase().split('');
	const arr2 = str2.toLowerCase().split('');

	// next, sort the arrays by alphabetical order
	arr1.sort();
	arr2.sort();

// loop through arr2, checking to see if each letter is in arr1, then removing it from
// arr2 and it and all previous letters from arr1.
	let j = 0;
	while (j < arr1.length) {
		if (arr2[0] === arr1[j]) {
			arr2.shift();
			arr1.splice(0, j + 1);
			j = 0;
		} else {
			j++;
		}
	}
	console.log(arr2);
	return arr2.length === 0;
};

module.exports = {
	StringScramble,
	info
};
