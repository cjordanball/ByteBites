const { StringScramble } = require('../../problems/medium/M006StringScramble');

describe('StringScramble', () => {
	it('returns a correct answer', () => {
		expect(StringScramble('rkqodlw', 'world')).toBe(true);
	});
});
