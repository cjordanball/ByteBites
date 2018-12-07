const { StringExpression } = require('../../problems/medium/M072StringExpression');

describe('StringExpression', () => {
	it('returns the correct value', () => {
		expect(StringExpression('foursixminustwotwoplusonezero')).toBe('threefour');
	});
});
