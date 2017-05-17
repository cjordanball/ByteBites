const { FirstFactorial, FirstFactorialRec } = require('../problems/easy/problemE002');

describe('FirstFactorial', () => {
	describe('Iterative', () => {
		it('should return 1 for an input of 1', () => {
			expect(FirstFactorial(1)).toBe(1);
		});
		it('should return 24 for an input of 4', () => {
			expect(FirstFactorial(4)).toBe(24);
		});
	});
	describe('Recursive', () => {
		it('should return 1 for an input of 1', () => {
			expect(FirstFactorialRec(1)).toBe(1);
		});
		it('should return 120 for an input of 5', () => {
			expect(FirstFactorialRec(5)).toBe(120);
		});
	});
});
