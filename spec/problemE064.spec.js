const { LargestFour } = require('../problems/easy/E064LargestFour');

describe('LargestFour', () => {
	it('return an accurate answer', () => {
		expect(LargestFour([5, 25, 50, 10, 4, 6, 30])).toBe(115);
	});
	it('returns the sum of all numbers if less than 5', () => {
		expect(LargestFour([5, -3, 100])).toBe(102);
	});
});
