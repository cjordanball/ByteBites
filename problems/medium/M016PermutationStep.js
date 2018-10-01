/*
Have the function PermutationStep(num) take the num parameter being passed and return the
next number greater than num using the same digits. For example: if num is 123 return 132,
if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999).
*/

const info = {
	name: 'PermutationStep',
	number: 16,
	level: 'medium',
	methods: [],
	concepts: []
};

const PermutationStep = (num) => {
	const numArray = num
		.toString()
		.split('')
		.reverse()
		.map(val => parseInt(val, 10));
	let test = true;
	// const len = numArray.length;
	const newArray = [];
	while (test) {
		if (!newArray[0]) {
			newArray[0] = numArray.shift();
		} else if (newArray.every(val => val <= numArray[0])) {
			newArray.push(numArray.shift());
		} else {
			if (!numArray[0]) {
				return '-1';
			}
			test = false;
		}
	}
	newArray.sort((val1, val2) => val1 - val2);
	const numHolder = numArray.shift();

	for (let i = 0; i < newArray.length; i++) {
		if (newArray[i] > numHolder) {
			numArray.unshift(newArray[i]);
			newArray[i] = numHolder;
			break;
		}
	}
	newArray.sort((a, b) => b - a);

	return parseInt(newArray
		.concat(numArray)
		.reverse()
		.join(''), 10);
};

module.exports = {
	PermutationStep,
	info
};
