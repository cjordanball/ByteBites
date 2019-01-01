const { TransitivityRelations, helpers: { factorial } } = require('../../problems/hard/H003TransitivityRelations');

describe('TransitivityRelations', () => {
	xit('returns a correct answer', () => {
		expect(TransitivityRelations(['(1,1,1)', '(1,0,0)', '(0,1,0)'])).toBe(false);
	});
});

describe('factorial', () => {
	xit('returns 0! correctly', () => {
		expect(factorial(0)).toBe(1);
	});
	xit('returns 1! correctly', () => {
		expect(factorial(1)).toBe(1);
	});
	xit('returns -3! correctly', () => {
		expect(factorial(-3)).toBe(null);
	});
	it('returns 6! correctly', () => {
		expect(factorial(6)).toBe(720);
	});
});
