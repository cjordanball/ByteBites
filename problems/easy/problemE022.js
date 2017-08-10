/*
Create a function MeanMode(arr) to take the array of numbers stored in arr and return 1 if the
mode equals the mean, and 0 if they don't equal each other (i.e., [5, 3, 3, 3, 1] should return
1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain
positive integers, and will not contain more than one mode.
 */

const name = 'MeanMode';
const number = 22;
const level = 'easy';
const methods = [];
const concepts = [];
let helpers;

const MeanMode = (arr) => {
		return helpers.meanTest(arr) === helpers.modeTest(arr) ? 1 : 0;
};

helpers = {
	meanTest(arr) {
		const len = arr.length;
		const sum = arr.reduce((num1, num2) => {
			return num1 + num2;
		}, 0);
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
		for (const prop in trackerObj) {
			if (trackerObj[prop] > counter) {
				mode = prop;
				counter = trackerObj[prop];
			}
		}
		return parseInt(mode, 10);
	}
};

module.exports = {
	MeanMode,
	helpers
}