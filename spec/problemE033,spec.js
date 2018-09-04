const { Superincreasing } = require('../problems/easy/E033Superincreasing');

describe('Superincreasing', () => {
	it('should return false for a single entry array', () => {
		expect(Superincreasing([4])).toBe('false');
	});
	it('return the correct result for a multiple item array', () => {
		expect(Superincreasing([1, 3, 6, 13, 23])).toBe('false');
		expect(Superincreasing([1, 3, 6, 13, 25])).toBe('true');
	});
});
