const { WaveSorting, helpers: { frequencyTracker } } = require('../problems/easy/E038WaveSorting');

describe('WaveSorting', () => {
	describe('FrequencyTracker', () => {
		it('should add up the times an item occurs in an array', () => {
			expect(frequencyTracker([1, 1, 1, 2, 1, 3, 4, 4, 2, 1])).toEqual({ 1: 5, 2: 2, 3: 1, 4: 2 });
		});
	});
	it('should return whether the array can be configured', () => {
		expect(WaveSorting([0, 1, 2, 4, 1, 4])).toBe(true);
		expect(WaveSorting([0, 9, 2, 8, 2, 2, 2, 1, 2])).toBe(false);
	});
});
