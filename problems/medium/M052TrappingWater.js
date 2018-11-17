/*
Have the function TrappingWater(arr) take the array of non-negative integers stored in arr,
and determine the largest amount of water that can be trapped. The numbers in the array
represent the height of a building (where the width of each building is 1) and if you imagine
it raining, water will be trapped between the two tallest buildings. For example: if arr is
[3, 0, 0, 2, 0, 4] then this array of building heights looks like the following picture if
we draw it out:
          xx
xx        xx
xx    xx  xx
xx____xx__xx

Now if you imagine it rains and water gets trapped in this picture, then determine the most units
of water that can be held, and return that amount.
*/

const info = {
	name: 'MissingDigitII',
	number: 52,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const TrappingWater = (arr) => {
	let counter = 0;
	for (let i = 1, len = arr.length; i < len - 1; i++) {
		const hotSpot = arr[i];
		const preWall = Math.max(...arr.slice(0, i));
		const postWall = Math.max(...arr.slice(i + 1));
		const height = Math.min(preWall, postWall);
		if (hotSpot < height) {
			counter += (height - hotSpot);
		}
	}
	return counter;
};

module.exports = {
	TrappingWater,
	info
};
