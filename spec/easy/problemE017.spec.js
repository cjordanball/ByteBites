const { ArrayAdditionI } = require('../../problems/easy/E017ArrayAdditionI');

describe('ArrayAddition', () => {
	it('should return true if a number combination can add up to the largest number', () => {
		expect(ArrayAdditionI([1, 2, 3, 6])).toBe(true);
		expect(ArrayAdditionI([1, 2, 3, 6, 7, 9])).toBe(true);
		expect(ArrayAdditionI([1, 3, 6, 7, 15])).toBe(false);
		expect(ArrayAdditionI([1, 2, 3, 5, 1067, 6, 54, 256, 23, 134, 23, 21, 2439, 37,
			84, 418, 98, 35, 54, 90, 28])).toBe(true);
	});
});
