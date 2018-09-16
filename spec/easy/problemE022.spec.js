const { MeanMode, helpers: { meanTest, modeTest } } = require('../../problems/easy/E022MeanMode');

describe('MeanMode', () => {
	it('should return 1 if mean equals mode and 0 if not', () => {
		expect(MeanMode([1, 24, 100, 100, 45, 156, 530, 100, 23, 1, 20])).toBe(1);
		expect(MeanMode([5, 3, 3, 1])).toBe(1);
		expect(MeanMode([5, 10, 10, 10, 12, 3, 7])).toBe(0);
	});

	describe('meanTest', () => {
		it('return the mean of an array of numbers', () => {
			expect(meanTest([5, 3, 4])).toBe(4);
		});
		it('should handle a mean with negative numbers', () => {
			expect(meanTest([10, -3, 12, -5, 7, 3, 4])).toBe(4);
		});
	});

	describe('modeTest', () => {
		it('return the mode of an array of numbers', () => {
			expect(modeTest([52, 36, 36, 400])).toBe(36);
		});
		it('should handle an even number length array', () => {
			expect(modeTest([10, 5, 12, 2, 7, 3, 4, 12])).toBe(12);
		});
	});
});
