const { MatrixPath } = require('../../problems/medium/M053MatrixPath');

describe('MatrixPath', () => {
	it('returns the correct amount of water', () => {
		expect(MatrixPath(['11100', '10011', '10101', '10011'])).toBe(2);
	});
});
