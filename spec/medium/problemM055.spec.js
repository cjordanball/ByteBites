const { LongestMatrixPath } = require('../../problems/medium/M055LongestMatrixPath');

describe('LongestMatrixPath', () => {
	it('returns the correct number of moves', () => {
		expect(LongestMatrixPath(['345', '326', '221'])).toBe(3);
	});
});
