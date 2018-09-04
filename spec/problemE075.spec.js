const { GCF } = require('../problems/easy/E075GCF');

describe('GCF', () => {
	it('returns a correct answer for primes', () => {
		expect(GCF([5, 7])).toBe(1);
	});
	it('returns correct answer for nonprimes with common factors', () => {
		expect(GCF([18, 81])).toBe(9);
	});
});
