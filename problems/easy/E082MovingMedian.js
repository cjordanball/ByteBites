/*
Have the function MovingMedian(arr) read the array of numbers stored in arr which will contain a
sliding window size, N, as the first element in the array and the rest will be a list of numbers.
Your program should return the Moving Median for each element based on the element and its N-1
predecessors, where N is the sliding window size. The final output should be a string with the \
moving median corresponding to each entry in the original array separated by commas.

Note that for the first few elements (until the window size is reached), the median is computed on
a smaller number of entries. For example: if arr is [3, 1, 3, 5, 10, 6, 4, 3, 1] then your program
should output "1,2,3,5,6,6,4,3"
*/

const info = {
	name: 'MovingMedian',
	number: 82,
	level: 'easy',
	methods: [],
	concepts: []
};

let helpers;

const MovingMedian = (arr) => {
	const buildArr = [];
	const winLength = arr.shift();
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		const firstIndex = Math.max(0, (i - winLength) + 1);
		const med = helpers.getMedian(arr.slice(firstIndex, i + 1));
		buildArr.push(med);
	}
	return buildArr.join(',');
};

helpers = {
	getMedian(arr) {
		arr.sort((val1, val2) => val1 - val2);
		const len = arr.length;
		if (len % 2) {
			return arr[Math.floor(len / 2)];
		}
		return (arr[(len / 2) - 1] + arr[len / 2]) / 2;
	}
};


module.exports = {
	MovingMedian,
	info
};
