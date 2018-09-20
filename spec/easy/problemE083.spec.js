const { GroupTotals } = require('../../problems/easy/E083GroupTotals');

describe('GroupTotals', () => {
	it('should return a valid result', () => {
		expect(GroupTotals(['B:-1', 'A:1', 'B:3', 'A:5'])).toBe('A:6,B:2');
	});
});
