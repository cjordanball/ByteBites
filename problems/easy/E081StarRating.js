/*
Have the function StarRating(str) take the str parameter being passed which will be an average
rating between 0.00 and 5.00, and convert this rating into a list of 5 image names to be
displayed in a user interface to represent the rating as a list of stars and half stars.
Ratings should be rounded up to the nearest half. There are 3 image file names available:
"full.jpg", "half.jpg", "empty.jpg". The output will be the name of the 5 images (without the
extension), from left to right, separated by spaces. For example: if str is "2.36" then this
should be displayed by the following image:

[no image]

So your program should return the string "full full half empty empty".
*/

const info = {
	name: 'StarRating',
	number: 81,
	level: 'easy',
	methods: ['Math.round()', 'parseFloat()', 'Math.trunc', 'repeat()', 'trim()'],
	concepts: []
};


function StarRating(str) {
	const num = (Math.round(parseFloat(str) * 2)) / 2;
	let starString = '';
	const half = !(Math.trunc(num) === num);

	starString += ' full'.repeat(num);
	if (half) {
		starString += ' half';
	}
	return (starString + ' empty'.repeat(5 - num)).trim();
}

module.exports = {
	StarRating,
	info
};
