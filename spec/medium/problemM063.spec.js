const { LargestRowColumn } = require('../../problems/medium/M063LargestRowColumn');

describe('LargestRowColumn', () => {
	it('returns the boolean value', () => {
		expect(LargestRowColumn(['345', '326', '221'])).toBe(12);
	});
});
