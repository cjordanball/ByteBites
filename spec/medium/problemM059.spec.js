const { MatchingCharacters } = require('../../problems/medium/M059MatchingCharacters');

describe('MatchingCharacters', () => {
	it('returns the correct length', () => {
		expect(MatchingCharacters('ahyjakh')).toBe(4);
		expect(MatchingCharacters('ghececgkaem')).toBe(5);
	});
});
