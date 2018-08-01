const { BitwiseTwo } = require('../problems/easy/problemE047');

describe('BitwiseTwo', () => {
	it('returns the correct value for each input pair', () => {
		expect(BitwiseTwo(['1', '1'])).toBe('1');
		expect(BitwiseTwo(['1', '0'])).toBe('0');
		expect(BitwiseTwo(['0', '1'])).toBe('0');
		expect(BitwiseTwo(['0', '0'])).toBe('0');
	});
	it('runs the comparison on a string of several digits', () => {
		expect(BitwiseTwo(['10111', '01101'])).toBe('00101');
	});
});
