const { ClosestEnemy } = require('../../problems/easy/E061ClosestEnemy');

describe('ClosestEnemy', () => {
	it('should correctly identify that there is no 2', () => {
		expect(ClosestEnemy([0, 0, 1, 0, 0, 0, 0, 0])).toBe(0);
	});
	it('should correctly calculate the length to 2', () => {
		expect(ClosestEnemy([0, 0, 1, 0, 0, 0, 2, 0])).toBe(4);
	});
});
