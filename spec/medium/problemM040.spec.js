const { BinarySearchTreeLCA } = require('../../problems/medium/M040BinarySearchTreeLCA');

describe('BinarySearchTreeLCA', () => {
	it('creates the correct value', () => {
		expect(BinarySearchTreeLCA(['[10, 5, 1, 7, 40, 50]', '1', '7'])).toBe(5);
	});
});
