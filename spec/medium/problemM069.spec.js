const { StringZigzag } = require('../../problems/medium/M069StringZigzag');

describe('StringZigzag', () => {
	it('returns the correct value', () => {
		expect(StringZigzag(['coderbyte', '3'])).toBe('creoebtdy');
	});
});
