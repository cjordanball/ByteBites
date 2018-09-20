const { HDistance } = require('../../problems/easy/E086HDistance');

describe('HDistance', () => {
	it('returns a correct answer', () => {
		expect(HDistance(['abcdefghijklmnop', 'cbceefghijklmnop'])).toBe(2);
	});
});
