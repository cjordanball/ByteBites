const { LinearCongruence } = require('../../problems/medium/M061LinearCongruence');

describe('LinearCongruence', () => {
	it('returns the correct length', () => {
		expect(LinearCongruence('32x = 8 (mod 4)')).toBe(4);
	});
});
