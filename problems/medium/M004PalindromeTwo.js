/*
Have the function PalindromeTwo(str) take the str parameter being passed and return the string
true if the parameter is a palindrome, (the string is the same forward as it is backward)
otherwise return the string false. The parameter entered may have punctuation and symbols but
they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote
more cars race Rome-to-Vienna" should return true.
*/

const info = {
	name: 'PalindromeTwo',
	number: 4,
	level: 'medium',
	methods: [],
	concepts: []
};

const PalindromeTwo = (str) => {
	const lowerCaseStr = str.toLowerCase();
	const strlen = lowerCaseStr.length;
	const arr = lowerCaseStr.split('');
	const newarr = [];
	let x;
	for (let i = 0; i < strlen; i++) {
		if (arr[i].charCodeAt(0) > 96 && arr[i].charCodeAt(0) < 123) {
			newarr.push(arr[i]);
		}
	}

	for (let j = 0; j < newarr.length; j++) {
		if (newarr[j] !== newarr[newarr.length - j - 1]) {
			x = false;
			break;
		} else {
			x = true;
		}
	}
	return x;
};

module.exports = {
	PalindromeTwo,
	info
};
