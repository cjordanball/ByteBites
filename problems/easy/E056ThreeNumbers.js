/*
Have the function ThreeNumbers(str) take the str parameter being passed and determine if exactly
three unique, single-digit integers occur within each word in the string. The integers can
appear anywhere in the word, but they cannot be all adjacent to each other. If every word
contains exactly 3 unique integers somewhere within it, then return the string true, otherwise
return the string false. For example: if str is "2hell6o3 wor6l7d2" then your program should
return "true" but if the string is "hell268o w6or2l4d" then your program should return "false"
because all the integers are adjacent to each other in the first word.
*/

const info = {
	name: 'Three Numbers',
	number: 56,
	level: 'easy',
	methods: [],
	concepts: []
};

function ThreeNumbers(str) {
	const wordArr = str.split(' ');

	const result = wordArr.every((val) => {
		// return false if three numbers in a row
		if (/\d\d\d/.test(val)) {
			return false;
		}
		// get the numbers, return false if there are more than three
		const newVal = val.replace(/\D/g, '');
		if (newVal.length !== 3) {
			return false;
		}
		// get the unique numbers, return false if there are less than three
		const newSet = new Set(newVal.split(''));
		if (newSet.size !== 3) {
			return false;
		}
		return true;
	});
	return result ? 'true' : 'false';
}

module.exports = {
	ThreeNumbers,
	info
};
