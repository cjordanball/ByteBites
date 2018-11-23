/*
Have the function HistogramArea(arr) read the array of non-negative integers stored in arr
which will represent the heights of bars on a graph (where each bar width is 1), and determine
the largest area underneath the entire bar graph. For example: if arr is [2, 1, 3, 4, 1] then
this looks like the following bar graph:

      xx
    xxxx
xx  xxxx
xxxxxxxxxx
xxxxxxxxxx

You can see in the above bar graph that the largest area underneath the graph is covered by the
x's. The area of that space is equal to 6 because the entire width is 2 and the maximum height
is 3, therefore 2 * 3 = 6. Your program should return 6. The array will always contain at least
1 element.
*/

const info = {
	name: 'HistogramArea',
	number: 58,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const HistogramArea = (arr) => {
	const len = arr.length;
	let maxArea = 0;
	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			const area = ((j - i) + 1) * Math.min(...(arr.slice(i, j + 1)));
			maxArea = area > maxArea ? area : maxArea;
		}
	}
	return maxArea;
};

module.exports = {
	HistogramArea,
	info
};
