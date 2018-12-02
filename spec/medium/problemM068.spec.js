const { PreorderTraversal } = require('../../problems/medium/M068PreorderTraversal');

describe('PreorderTraversal', () => {
	it('returns the correct value for miss 1', () => {
		expect(PreorderTraversal(['5', '2', '6', '1', '9', '#', '8', '2', '12', '#', '#', '#', '#', '#', '99'])).toBe('5 2 1 2 12 9 6 8 99');
	});
});

describe('PreorderTraversal', () => {
	it('returns the correct value for miss 1', () => {
		expect(PreorderTraversal(['1', '#', '2', '#', '#', '#', '3'])).toBe('1 2 3');
	});
});
