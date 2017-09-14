const { TwoSum } = require('../problems/easy/problemE046');

describe('TwoSum', () => {
	it('finds pairs of numbers with the correct sum', () => {
		expect(TwoSum([7, 3, 5, 2, -4, 8, 11])).toBe('5,2 -4,11');
		expect(TwoSum([7, 3, 5, 42, -4, 8, 120])).toBe(-1);
	});
});
