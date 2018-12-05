const { LongestConsecutive } = require('../../problems/medium/M071LongestConsecutive');

describe('LongestConsecutive', () => {
	it('returns the correct value', () => {
		expect(LongestConsecutive([4, 3, 8, 1, 2, 8, 6, 100, 9])).toBe(4);
	});
});
