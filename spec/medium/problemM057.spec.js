const { MatrixChains } = require('../../problems/medium/M057MatrixChains');

describe('MatrixChains', () => {
	it('returns the correct length', () => {
		expect(MatrixChains([1, 2, 3, 4])).toBe(18);
	});
});
