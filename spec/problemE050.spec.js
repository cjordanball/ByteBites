const { PalindromeCreator } = require('../problems/easy/problemE050');

describe('PalindromeCreator', () => {
	it('recognizes if the input is a palindrome', () => {
		expect(PalindromeCreator('ablewasIereIsawelba')).toBe('palindrome');
	});
	it('returns the correct letters if the input is one character off', () => {
		expect(PalindromeCreator('ablewasIereIsawexlba')).toBe('x');
	});
	it('gives up in despair when a palindrome cannot be found', () => {
		expect(PalindromeCreator('sadfessdfidkswideckcd')).toBe('not possible');
	});
});
