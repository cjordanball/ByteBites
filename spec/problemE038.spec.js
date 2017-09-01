const { WaveSorting } = require('../problems/easy/problemE038');

describe('WaveSorting', () => {
	it('should return whether the array can be configured', () => {
		expect(WaveSorting([0, 1, 2, 4, 1, 4])).toBe(true);
		expect(WaveSorting([0, 9, 2, 8, 2, 2, 2, 1, 2])).toBe(false);
	});
});
