const { BracketMatcher } = require('../../problems/medium/M022BracketMatcher');

describe('BracketMatcher', () => {
	it('creates the correct string', () => {
		expect(BracketMatcher('(he(weh))')).toBe(1);
	});
	it('returns a 0 for an incorrect bracket setup', () => {
		expect(BracketMatcher('what((test())')).toBe(0);
	});
});
