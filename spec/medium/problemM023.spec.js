const { StringReduction } = require('../../problems/medium/M023StringReduction');

describe('StringReduction', () => {
	it('creates the correct string', () => {
		expect(StringReduction('bcab')).toBe(1);
	});
});
