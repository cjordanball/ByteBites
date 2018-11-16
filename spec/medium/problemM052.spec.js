const { TrappingWater } = require('../../problems/medium/M052TrappingWater');

describe('TrappingWater', () => {
	it('returns the correct amount of water', () => {
		expect(TrappingWater([3, 0, 0, 2, 0, 4])).toBe(10);
	});
	it('returns the correct answer for an umbrella', () => {
		expect(TrappingWater([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1])).toBe(0);
	});
});
