const { ExOh } = require('../../problems/easy/E014ExOh');

describe('ExOh', () => {
	it('should determine if there are the same number of "x" and "o" in the string', () => {
		expect(ExOh('xoxooxxooxoooxxxxxxoooxo')).toBe(true);
	});
	it('should return false if more of one than the other', () => {
		expect(ExOh('ooxoxooxxooxo')).toBe(false);
	});
	it('returns true for an empty string', () => {
		expect(ExOh('')).toBe(true);
	});
});
