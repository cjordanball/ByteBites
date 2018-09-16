/*
Have the function PrimeMover(num) return the numth prime number. The range will be from 1
to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number.
*/

const info = {
	name: 'PrimeMover',
	number: 3,
	level: 'medium',
	methods: [],
	concepts: []
};
let helpers;

function PrimeMover(num) {
	let counter = 0;
	let testNum = 0;

	while (counter < num) {
		if (helpers.primeTest(testNum + 1)) {
			counter++;
		}
		testNum++;
	}
	return testNum;
}

helpers = {
	primeTest(testNum) {
		let countNum = 2;
		const pivot = Math.ceil(Math.sqrt(testNum));
		if (testNum === 1) {
			return false;
		} else if (testNum === 2) {
			return true;
		}
		while (countNum <= pivot) {
			if (testNum % countNum === 0) {
				return false;
			}
			countNum++;
		}
		return true;
	}
};

module.exports = {
	PrimeMover,
	info
};
