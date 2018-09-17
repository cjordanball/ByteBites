const { PalindromeTwo } = require('../../problems/medium/M004PalindromeTwo');

describe('PalindromeTwo', () => {
	it('returns a correct answer', () => {
		expect(PalindromeTwo('Anne, I vote more cars race Rome-to-Vienna')).toBe(true);
	});
});
