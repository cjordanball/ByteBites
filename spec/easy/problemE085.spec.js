const { FizzBuzz } = require('../../problems/easy/E085FizzBuzz');

describe('FizzBuzz', () => {
	it('returns a correct answer', () => {
		expect(FizzBuzz(16)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16');
	});
});
