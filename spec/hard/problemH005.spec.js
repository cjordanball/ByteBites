const { PolynomialExpansion, helpers: { termMultiply } } = require('../../problems/hard/H005PolynomialExpansion');

describe('termMultiply', () => {
	it('returns a correct answer', () => {
		expect(termMultiply({ coefficient: 3, power: 2 }, { coefficient: 7, power: 3 })).toEqual({ coefficient: 21, power: 5 });
	});
});

describe('PolynomialExpansion', () => {
	it('returns a correct answer', () => {
		expect(PolynomialExpansion('(2x^2+4)(6x^3+3)')).toBe('12x^5+24x^3+6x^2+12');
	});
});
