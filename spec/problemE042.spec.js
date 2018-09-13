const { EvenPairs } = require('../problems/easy/E042EvenPairs');

describe('EvenPairs', () => {
	it('return the correct string', () => {
		expect(EvenPairs('3gy41d216')).toBe(true);
		expect(EvenPairs('3gy41d21f6')).toBe(false);
	});
});
