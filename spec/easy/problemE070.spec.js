const { SnakeCase } = require('../../problems/easy/E070SnakeCase');

describe('SnakeCase', () => {
	it('the correct value for BOB loves-coding', () => {
		expect(SnakeCase('BOB loves-coding')).toBe('bob_loves_coding');
	});
});
