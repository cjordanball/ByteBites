const { ChangingSequence } = require('../problems/easy/problemE030');

describe('ChangingSequence', () => {
	it('should correctly handle one way sequences', () => {
		expect(ChangingSequence([1, 5, 6, 10, 12, 15])).toBe(-1);
		expect(ChangingSequence([100, 95, 90, 85, 80])).toBe(-1);
	});
	it('returns 0 as the answer for 1', () => {
		expect(ChangingSequence([10, 9, 8, 7, 4, 5])).toBe(4);
	});
});
