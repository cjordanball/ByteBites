const { OverlappingRanges } = require('../../problems/easy/E032OverlappingRanges');

describe('OverlappingRanges', () => {
	it('should correctly evaluate overapping ranges', () => {
		expect(OverlappingRanges([4, 10, 2, 5, 3])).toBe('false');
		expect(OverlappingRanges([5, 15, 10, 20, 3])).toBe('true');
	});
	it('return false if no overlap', () => {
		expect(OverlappingRanges([4, 10, 12, 16, 3])).toBe('false');
	});
});
