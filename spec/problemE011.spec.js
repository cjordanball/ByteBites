const { ABCheck } = require('../problems/easy/problemE011');

describe('ABCheck', () => {
	it('finds patterns with a followed by b three spaces later', () => {
		expect(ABCheck('dsertefadeobdfsldfj')).toBe('true');
	});
	it('counts spaces as letters', () => {
		expect(ABCheck('Penny Lane barber shaves another customer')).toBe('true');
	});
	it('finds patterns with b followed by a', () => {
		expect(ABCheck('dsertefbdeoadfsldfj')).toBe('true');
	});
	it('should reject patterns that don\'t fit', () => {
		expect(ABCheck('Penny Lane the barber shaves another customer')).toBe('false');
	});
});
