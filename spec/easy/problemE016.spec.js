const { ArithGeo, helpers: { ArithTest, GeoTest } } = require('../../problems/easy/E016ArithGeo');

describe('ArithGeo', () => {
	describe('ArithTest', () => {
		it('should test whether a series is an Arithmetic progression', () => {
			expect(ArithTest([1, 2, 3, 4, 5])).toBe('Arithmetic');
			expect(ArithTest([1, 2, 5, 8, 9])).toBe(false);
		});
	});
	describe('GeoTest', () => {
		it('should test whether a series is an geometric progression', () => {
			expect(GeoTest([1, 2, 4, 8, 16])).toBe('Geometric');
			expect(GeoTest([1, 2, 5, 8])).toBe(false);
		});
		it('should handle a case where the multiplier is negative', () => {
			expect(GeoTest([2, -6, 18, -54, 162]));
		});
	});

	it('should return what kind of series it is', () => {
		expect(ArithGeo([1, 2, 4, 8, 16])).toBe('Geometric');
		expect(ArithGeo([1, 2, 5, 8])).toBe(-1);
		expect(ArithGeo([1, 5, 9, 13, 17, 21])).toBe('Arithmetic');
	});
});
