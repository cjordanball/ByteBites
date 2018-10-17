const { FibonacciChecker } = require('../../problems/medium/M027FibonacciChecker');

describe('FibonacciChecker', () => {
	it('creates the correct value', () => {
		expect(FibonacciChecker(0)).toBe('yes');
		expect(FibonacciChecker(1)).toBe('yes');
		expect(FibonacciChecker(4)).toBe('no');
		expect(FibonacciChecker(75025)).toBe('yes');
	});
});
