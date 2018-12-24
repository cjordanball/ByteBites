const { PentagonalNumber } = require('../../problems/hard/H049PentagonalNumber');

describe('PentagonalNumber', () => {
	it('returns a correct answer', () => {
		expect(PentagonalNumber(1)).toBe(1);
	});
	it('returns a correct answer', () => {
		expect(PentagonalNumber(2)).toBe(6);
	});
	it('returns a correct answer', () => {
		expect(PentagonalNumber(3)).toBe(16);
	});
	it('returns a correct answer', () => {
		expect(PentagonalNumber(4)).toBe(31);
	});
});
