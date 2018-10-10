const { TripleDouble } = require('../../problems/medium/M021TripleDouble');

describe('TripleDouble', () => {
	it('creates the correct string', () => {
		expect(TripleDouble(451999277, 41177722899)).toBe(1);
	});
});
