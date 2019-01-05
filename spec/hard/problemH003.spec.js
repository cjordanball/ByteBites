const { TransitivityRelations, helpers: { factorial } } = require('../../problems/hard/H003TransitivityRelations');

describe('TransitivityRelations', () => {
	it('returns a correct answer', () => {
		expect(TransitivityRelations(['(1,1,1)', '(1,0,0)', '(0,1,0)'])).toBe('(1,2)-(2,0)');
	});
});

describe('factorial', () => {
	it('returns 0! correctly', () => {
		expect(factorial(0)).toBe(1);
	});
	it('returns 1! correctly', () => {
		expect(factorial(1)).toBe(1);
	});
	it('returns -3! correctly', () => {
		expect(factorial(-3)).toBe(null);
	});
	it('returns 6! correctly', () => {
		expect(factorial(6)).toBe(720);
	});
});
