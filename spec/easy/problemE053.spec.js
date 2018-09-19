const { ThreeSum } = require('../../problems/easy/E053ThreeSum');

describe('ThreeSum', () => {
	it('returns a correct answer', () => {
		expect(ThreeSum([8, 2, 1, 4, 10, 5, -1, -1])).toBe('true');
	});
});
