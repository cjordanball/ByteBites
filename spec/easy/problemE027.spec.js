const { PowersofTwo } = require('../../problems/easy/E027PowersofTwo');

describe('PowersofTwo', () => {
	it('should return false for any number less than two', () => {
		expect(PowersofTwo(1)).toBe(false);
		expect(PowersofTwo(-64)).toBe(false);
	});
	it('should return false for any non-integer', () => {
		expect(PowersofTwo(18.3)).toBe(false);
	});
	it('should return true if a number is a power of two', () => {
		expect(PowersofTwo(256)).toBe(true);
		expect(PowersofTwo(255)).toBe(false);
	});
});
