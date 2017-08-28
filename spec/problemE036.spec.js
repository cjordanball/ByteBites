const { BitwiseOne } = require('../problems/easy/problemE036');

describe('BitwiseOne', () => {
	it('should do the bitwise thing', () => {
		expect(BitwiseOne(['1001', '0100'])).toBe('1101');
		expect(BitwiseOne(['1111111', '1111111'])).toBe('1111111');
	});
});
