const { PalindromeSwapper } = require('../../problems/easy/E078PalindromeSwapper');

describe('PalindromeSwapper', () => {
	it('should return racecar', () => {
		expect(PalindromeSwapper('rcaecar')).toBe('racecar');
	});
});
