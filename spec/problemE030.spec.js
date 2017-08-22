const { OffLineMinimum } = require('../problems/easy/problemE030');

describe('OffLineMinimum', () => {
	it('should correctly handle an array of numbers and Es', () => {
		expect(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"])).toBe('4,1,5');
	});
	it('should handle an initial E', () => {
		expect(OffLineMinimum(["E","1", "E","12","15","23","E","2","33","E"])).toBe('1,12,2');
	});
});
