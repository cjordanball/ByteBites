const { SimpleEvens } = require('../../problems/easy/E069SimpleEvens');

describe('SimpleEvens', () => {
	it('the correct value for an all even number', () => {
		expect(SimpleEvens('28684222')).toBe('true');
	});
	it('gives the correct value for an odd digit containing number', () => {
		expect(SimpleEvens('238624086')).toBe('false');
	});
});
