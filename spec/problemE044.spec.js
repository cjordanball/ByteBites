const { LargestPair } = require('../problems/easy/problemE044');

describe('LargestPair', () => {
	it('return the correct string', () => {
		expect(LargestPair(4759847829)).toBe(98);
		expect(LargestPair(475847829)).toBe(84);
		expect(LargestPair(4759847899)).toBe(99);
	});
});
