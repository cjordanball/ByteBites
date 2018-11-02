const { SymmetricTree } = require('../../problems/medium/M039SymmetricTree');

describe('SymmetricTree', () => {
	it('creates the correct value', () => {
		expect(SymmetricTree(['1', '2', '2', '3', '#', '#', '3'])).toBe(true);
	});
});
