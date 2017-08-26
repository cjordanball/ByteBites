const { RectangleArea, helpers: { distanceFinder } } = require('../problems/easy/problemE035');

describe('RectangleArea', () => {
	describe('RectangleArea', () => {
		it('should return the area of a rectangle', () => {
			expect(RectangleArea(['(-10 0)', '(-3 0)', '(-10 2)', '(-3 2)'])).toBe(14);
			expect(RectangleArea(['(5 5)', '(-5 -5)', '(5 -5)', '(-5 5)'])).toBe(100);
		});

	});

	describe('distanceFinder', () => {
		it('return distance on a horizontal or vertical line', () => {
			expect(distanceFinder('(1, 5)', '(10 5)')).toBe(9);
			expect(distanceFinder('(0, 0)', '(12 0)')).toBe(12);
		});
		it('accurately determine distances', () => {
			expect(distanceFinder('(0, 0)', '(3 4)')).toBe(5);
			expect(distanceFinder('(0, 0)', '(10 5)')).toBe(125 ** .5);
		});
	});
});