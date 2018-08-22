const { ClosestEnemyII, helpers: { rowDist } } = require('../problems/easy/E062ClosestEnemyII');

describe('ClosestEnemyII', () => {
	describe('rowDist', () => {
		it('should determine shortest distance (straight or wraparound)', () => {
			expect(rowDist(2, 4, 5)).toEqual(2);
		});
	});
	it('return the closest path', () => {
		expect(ClosestEnemyII(['0000', '1000', '0002', '0002'])).toBe(2);
	});
});
