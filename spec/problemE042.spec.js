const { EvenPairs } = require('../problems/easy/problemE042');

describe('EvenPairs', () => {
	it('return the correct string', () => {
		expect(EvenPairs('3gy41d216')).toBe(true);
		expect(EvenPairs('3gy41d21f6')).toBe(false);
	});
});