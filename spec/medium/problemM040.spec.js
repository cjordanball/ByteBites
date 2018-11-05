const { BinaryTreeLCA } = require('../../problems/medium/M040BinaryTreeLCA');

describe('BinaryTreeLCA', () => {
	it('creates the correct value', () => {
		expect(BinaryTreeLCA(['[10, 5, 1, 7, 40, 50]', '1', '7'])).toBe(5);
	});
});
