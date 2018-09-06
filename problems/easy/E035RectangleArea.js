/*
Using the JavaScript language, have the function RectangleArea(strArr) take the array
of strings stored in strArr, which will only contain 4 elements and be in the form
(x y) where x and y are both integers, and return the area of the rectangle formed by
the 4 points on a Cartesian grid. The 4 elements will be in arbitrary order. For
example: if strArr is ["(-10 0)", "(-7 0)", "(-10 2)", "(-7 2)"] then your program should
return 6 because the width of the rectangle is 3 and the height is 2 and the area of
a rectangle is equal to the width * height.
*/

/*
The problem above has an unstated assumption that is present in the tests run by coderbyte -
that the rectangle is composed of vertical and horizontal lines. It becomes a bit more
complex if we provide for the possibility that the rectangle might be rotated off the x and
y axes on the coordinate plane. Below is the more complete solution. Note, however, that it
relies on the assumption that the point given do, in fact, define a rectangle.
*/
const info = {
	name: 'RectangleArea',
	number: 35,
	level: 'easy',
	methods: ['map()', 'sort()', 'match()'],
	concepts: []
};

let helpers;

const RectangleArea = (strArr) => {
	const lengthArr = strArr
		.map(val => helpers.distanceFinder(val, strArr[0]))
		.sort((val1, val2) => val1 - val2);

	return lengthArr[1] * lengthArr[2];
};

helpers = {
	distanceFinder(str1, str2) {
		const x1 = parseInt(str1.match(/^\((-*\d+)/)[1], 10);
		const y1 = parseInt(str1.match(/(-*\d+)\)$/)[1], 10);
		const x2 = parseInt(str2.match(/^\((-*\d+)/)[1], 10);
		const y2 = parseInt(str2.match(/(-*\d+)\)$/)[1], 10);

		return (((x1 - x2) ** 2) + ((y1 - y2) ** 2)) ** 0.5;
	}
};

module.exports = {
	RectangleArea,
	helpers,
	info
};
