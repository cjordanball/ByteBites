const { NextPalindrome, NextPalindrome2, helpers: { isPalindrome, setNum } } = require('../problems/easy/E043NextPalindrome');

describe('NextPalindrome', () => {
	it('should tell if a number is a palindrome', () => {
		expect(isPalindrome(942249)).toBe(true);
		expect(isPalindrome(5325)).toBe(false);
	});
	describe('NextPalindrome', () => {
		it('should determine the next palindrome number', () => {
			expect(NextPalindrome(12)).toBe(22);
			expect(NextPalindrome(5291)).toBe(5335);
			expect(NextPalindrome(52491)).toBe(52525);
		});
	});
});

describe('NextPalindrome2', () => {
	describe('setNum', () => {
		it('should return an object', () => {
			const returnVal = setNum('199999');
			expect(returnVal.first).toBe('2');
			expect(returnVal.last).toBe('2');
			expect(returnVal.num).toBe('0000');
		});
	});

	it('should determine the next palindrome number', () => {
		expect(NextPalindrome2(12)).toBe(22);
		expect(NextPalindrome(5291)).toBe(5335);
		expect(NextPalindrome2(52491)).toBe(52525);
	});
});
