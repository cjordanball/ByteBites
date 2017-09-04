const { LongestIncreasingSequence, helpers: { isAscending } } = require('../problems/easy/problemE041');

describe('LongestIncreasingSequence', () => {
	describe('isAscending', () => {
		it('should return true if array is always ascending', () => {
			expect(isAscending([1, 1, 1, 2, 1, 3, 4, 4, 2, 1])).toBe(false);
			expect(isAscending([12])).toBe(true);
			expect(isAscending([2, 4, 8, 12, 13, 21, 26])).toBe(true);
		});
	});
	it('should return the length of the longest ascending line', () => {
		expect(LongestIncreasingSequence([10, 12, 4, 6, 100, 2, 56, 34, 79])).toBe(4);
		expect(LongestIncreasingSequence([10, 12, 4, 6])).toBe(2);
	});
});