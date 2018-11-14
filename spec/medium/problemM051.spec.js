const { PalindromicSubstring } = require('../../problems/medium/M051PalindromicSubstring');

describe('PalindromicSubstring', () => {
	it('the correct substring', () => {
		expect(PalindromicSubstring('abracecars')).toBe('racecar');
	});
	it('gives up if nothing 3 or greater', () => {
		expect(PalindromicSubstring('abracteecars')).toBe('none');
	});
});
