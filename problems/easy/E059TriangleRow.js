/*
Have the function TriangleRow(num) take num which will be a positive integer representing
some row from Pascal's triangle. Pascal's triangle starts with a [1] at the 0th row of
the triangle. Then the first row is [1, 1] and the second row is [1, 2, 1]. The next row
begins with 1 and ends with 1, and the inside of the row is determined by adding the k-1
and kth elements from the previous row. The next row in the triangle would then be
[1, 3, 3, 1], and so on. The input will be some positive integer and your goal is to
return the sum of that row. For example: if num is 4 then your program should return the
sum of 1 + 4 + 6 + 4 + 1 which is 16.
*/

/*
This problem is really, really easy if one knows a little basic math behind Pascal's
triangle, particularly the fact that the sum of the xth row is always 2^(x-1).
*/

const info = {
	name: 'Triangle Row',
	number: 59,
	level: 'easy',
	methods: [],
	concepts: ['exponential operator', 'Pascal\'s Triangle']
};

function TriangleRow(num) {
	return 2 ** num;
}

module.exports = {
	TriangleRow
};
