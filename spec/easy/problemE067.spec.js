const { CamelCase } = require('../../problems/easy/E067CamelCase');

describe('CamelCase', () => {
	it('returns string in correct camel case', () => {
		expect(CamelCase('BOB loves-coding')).toBe('bobLovesCoding');
	});
});
