const { MissingDigit } = require('../../problems/medium/M036MissingDigit');

describe('MissingDigit', () => {
	it('creates the correct value', () => {
		expect(MissingDigit('3x + 12 = 46')).toBe(4);
		expect(MissingDigit('3x4 + 12 = 46')).toBe('failed');
	});
});
