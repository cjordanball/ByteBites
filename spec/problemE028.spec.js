const { AdditivePersistence, helpers: { arrayPrep } } = require('../problems/easy/problemE028');

describe('AdditivePersistence', () => {
	describe('ArrayPrep', () => {
		it('returns a summation of integers in a number', () => {
			expect(arrayPrep(134)).toBe(8);
			expect(arrayPrep(654321)).toBe(21);
		});
		it('returns 0 as the answer for 0', () => {
			expect(arrayPrep(0)).toBe(0);
		});
	});
	it('shoulld return the correct answer', () => {
		expect(AdditivePersistence(9503873995)).toBe(3);
	});
});
