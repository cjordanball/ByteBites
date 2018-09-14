const { PrimeTime } = require('../../problems/medium/M001PrimeTime');

describe('PrimeTime', () => {
	it('returns a correct answer', () => {
		expect(PrimeTime(1)).toBe(false);
		expect(PrimeTime(2)).toBe(true);
		expect(PrimeTime(3)).toBe(true);
		expect(PrimeTime(4)).toBe(false);
		expect(PrimeTime(5)).toBe(true);
		expect(PrimeTime(6)).toBe(false);
		expect(PrimeTime(7)).toBe(true);
		expect(PrimeTime(8)).toBe(false);
		expect(PrimeTime(9)).toBe(false);
		expect(PrimeTime(10)).toBe(false);
		expect(PrimeTime(11)).toBe(true);
		expect(PrimeTime(12)).toBe(false);
	});
});
