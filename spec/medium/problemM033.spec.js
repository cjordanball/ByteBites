const { NumberEncoding } = require('../../problems/medium/M033NumberEncoding');

describe('NumberEncoding', () => {
	it('creates the correct value', () => {
		expect(NumberEncoding('af5c a#!')).toBe('1653 1#!');
	});
});
