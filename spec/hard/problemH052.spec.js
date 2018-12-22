const { WildcardCharacters } = require('../../problems/hard/H052WildcardCharacters');

describe('WildcardCharacters', () => {
	it('correctly evaluates an asterisk', () => {
		expect(WildcardCharacters('++* xyzzz')).toBe('true');
	});
	it('returns a correct answer', () => {
		expect(WildcardCharacters('++*{5} gheeeee')).toBe('true');
	});
	it('identifies an incorrect answer', () => {
		expect(WildcardCharacters('++*{5} gheaeee')).toBe('false');
	});
	it('handles multiple captures in a haystack', () => {
		expect(WildcardCharacters('++*++*{4}+* abcccdeffffghhh')).toBe('true');
	});
	it('handles a single H052WildcardCharacters', () => {
		expect(WildcardCharacters('+ a')).toBe('true');
	});
});
