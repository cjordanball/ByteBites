/*
Have the function KUniqueCharacters(str) take the str parameter being passed and find
the longest substring that contains k unique characters, where k will be the first
character from the string. The substring will start from the second position in the
string because the first character will be the integer k. For example: if str is
"2aabbacbaa" there are several substrings that all contain 2 unique characters, namely:
["aabba", "ac", "cb", "ba"], but your program should return "aabba" because it is the
longest substring. If there are multiple longest substrings, then return the first
substring encountered with the longest length. k will range from 1 to 6.
*/

const info = {
	name: 'KUniqueCharacters',
	number: 37,
	level: 'medium',
	methods: [],
	concepts: []
};

const KUniqueCharacters = (str) => {
	const count = parseInt(str.slice(0, 1), 10);
	const subjectString = str.slice(1);
	const len = subjectString.length;
	let maxCount = 0;
	let result;

	for (let i = 0; i < len; i++) {
		let counter = 0;
		const holder = [];
		const charArray = [];
		for (let j = i; j < len; j++) {
			const char = subjectString.charAt(j);
			if (charArray.some(val => val === char)) {
				holder.push(char);
				counter++;
				if (j === len - 1) {
					if (counter > maxCount) {
						result = Array.from(holder);
					}
					maxCount = Math.max(counter, maxCount);
				}
				continue;
			} else if (charArray.length < count) {
				counter++;
				charArray.push(char);
				holder.push(char);
				continue;
			} else if (counter > maxCount) {
				result = Array.from(holder);
			}
			maxCount = Math.max(counter, maxCount);
			break;
		}
	}
	return result.join('');
};

module.exports = {
	KUniqueCharacters,
	info
};
