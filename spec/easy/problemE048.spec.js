const { PowerSetCount } = require('../../problems/easy/E048PowerSetCount');

describe('PowerSetCount', () => {
	it('returns the correct value for each input set', () => {
		expect(PowerSetCount([1, 2, 3, 4])).toBe(16);
		expect(PowerSetCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(1024);
	});
});
