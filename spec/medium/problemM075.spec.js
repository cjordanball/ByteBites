const { Primes } = require('../../problems/medium/M075Primes');

describe('Primes', () => {
	it('returns a correct answer', () => {
		expect(Primes(1)).toBe('false');
		expect(Primes(2)).toBe('true');
		expect(Primes(3)).toBe('true');
		expect(Primes(4)).toBe('false');
		expect(Primes(5)).toBe('true');
		expect(Primes(6)).toBe('false');
		expect(Primes(7)).toBe('true');
		expect(Primes(8)).toBe('false');
		expect(Primes(9)).toBe('false');
		expect(Primes(10)).toBe('false');
		expect(Primes(11)).toBe('true');
		expect(Primes(12)).toBe('false');
	});
});
