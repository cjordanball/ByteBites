const { PairSearching } = require('../../problems/medium/M047PairSearching');

describe('PairSearching', () => {
	it('return a correct response', () => {
		expect(PairSearching(134)).toBe(1);
		expect(PairSearching(46)).toBe(2);
	});
});
