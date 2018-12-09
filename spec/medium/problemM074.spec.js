const { PlusMinus } = require('../../problems/medium/M074PlusMinus');

describe('PlusMinus', () => {
	it('returns the correct value', () => {
		expect(PlusMinus(35132)).toBe('-++-');
		expect(PlusMinus(26712)).toBe('-+--');
	});
});
