const { MultiplicativePersistence, helpers: { arrayPrep } } = require('../problems/easy/E029MultiplicativePersistence');

describe('MultiplicativePersistence', () => {
	describe('ArrayPrep', () => {
		it('returns a summation of integers in a number', () => {
			expect(arrayPrep(134)).toBe(12);
			expect(arrayPrep(654321)).toBe(720);
		});
	});
	it('should return the correct answer', () => {
		expect(MultiplicativePersistence(949584935294)).toBe(2);
	});
	it('returns 0 as the answer for 1', () => {
		expect(MultiplicativePersistence(1)).toBe(0);
	});
});
