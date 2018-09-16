const { PrimeMover } = require('../../problems/medium/M003PrimeMover');

describe('PrimeMover', () => {
	it('returns a correct answer', () => {
		expect(PrimeMover(16)).toBe(53);
	});
	it('handles 2 correctly', () => {
		expect(PrimeMover(1)).toBe(2);
	});
});
