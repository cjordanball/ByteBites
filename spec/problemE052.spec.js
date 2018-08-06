const { FoodDistribution } = require('../problems/easy/problemE052');

// this testing is really lame. Just not enough time right now.  Should test the helper
// methods as well

describe('PalindromeCreator', () => {
	it('returns a correct answer', () => {
		expect(FoodDistribution([4, 5, 2, 3, 1, 0])).toBe(2);
	});
});
