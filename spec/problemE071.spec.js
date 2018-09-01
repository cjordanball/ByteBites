const { SumMultiplier } = require('../problems/easy/E071SumMultiplier');

describe('SumMultiplier', () => {
	it('returns a correct true value', () => {
		expect(SumMultiplier([2, 5, 6, -6, 16, 2, 3, 6, 5, 3])).toBe(true);
	});
});
