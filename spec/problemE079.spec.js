const { RemoveBrackets } = require('../problems/easy/E079RemoveBrackets');

describe('RemoveBrackets', () => {
	it('should return 0', () => {
		expect(RemoveBrackets('(((())))')).toBe(0);
	});
	it('should return 1', () => {
		expect(RemoveBrackets('(()))')).toBe(1);
	});
});
