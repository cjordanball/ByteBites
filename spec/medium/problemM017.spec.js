const { PrimeChecker, helpers } = require('../../problems/medium/M017PrimeChecker');

describe('isPrime', () => {
	it('returns if a prime number is a prime', () => {
		expect(helpers.isPrime('1')).toBe(false);
		expect(helpers.isPrime('2')).toBe(true);
		expect(helpers.isPrime('169')).toBe(false);
		expect(helpers.isPrime('2053')).toBe(true);
		expect(helpers.isPrime('2059')).toBe(false);
	});
});

describe('factorial', () => {
	it('returns the factorial', () => {
		expect(helpers.factorial(0)).toBe(1);
		expect(helpers.factorial(1)).toBe(1);
		expect(helpers.factorial(10)).toBe(3628800);
	});
});

describe('initialize', () => {
	it('returns a correct answer', () => {
		expect(helpers.initialize(1234)[0]).toEqual(['', ['1', '2', '3', '4']]);
		expect(helpers.initialize(1234).length).toBe(24);
	});
});

describe('permStep', () => {
	it('returns an array of permutations', () => {
		expect(helpers.permStep([['', ['1', '2']], ['', ['1', '2']]])).toEqual([['1', ['2']], ['2', ['1']]]);
	});
});

describe('PrimeChecker', () => {
	it('checks if any arrangement of digits can be prime', () => {
		expect(PrimeChecker(35)).toBe(1);
	});
});
