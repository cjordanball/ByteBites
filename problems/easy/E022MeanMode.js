/*
Create a function MeanMode(arr) to take the array of numbers stored in arr and return 1 if the
mode equals the mean, and 0 if they don't equal each other (i.e., [5, 3, 3, 3, 1] should return
1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain
positive integers, and will not contain more than one mode.
 */

const info = {
	name: 'MeanMode',
	number: 22,
	level: 'easy',
	methods: ['reduce()', 'toString()', 'parseInt()'],
	concepts: ['iterating over an object', 'for in loop', 'for loop', 'dynamic object properties']
};

let helpers;

const MeanMode = arr => helpers.meanTest(arr) === helpers.modeTest(arr) ? 1 : 0;

helpers = {
	meanTest(arr) {
		const len = arr.length;
		const sum = arr.reduce((num1, num2) => num1 + num2, 0);
		return sum / len;
	},

	modeTest(arr) {
		const len = arr.length;
		const trackerObj = {};
		let counter = 0;
		let mode;

		for (let i = 0; i < len; i++) {
			const myNum = arr[i].toString();
			if (!trackerObj[myNum]) {
				trackerObj[myNum] = 1;
			} else {
				trackerObj[myNum] += 1;
			}
		}
		const props = Object.keys(trackerObj);
		props.forEach((val) => {
			if (trackerObj[val] > counter) {
				mode = val;
				counter = trackerObj[val];
			}
		});
		return parseInt(mode, 10);
	}
};

module.exports = {
	MeanMode,
	helpers,
	info
};
