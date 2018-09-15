const { CheckNums } = require('../../problems/easy/E008CheckNums');

describe('CheckNums', () => {
	it('should return "-1" if the numbers are equal to each other', () => {
		expect(CheckNums(5, 5)).toBe('-1');
		expect(CheckNums(0, 0)).toBe('-1');
	});
	it('should return true if second param is greater', () => {
		expect(CheckNums(3, 10)).toBe(true);
		expect(CheckNums(-10, -3)).toBe(true);
	});
	it('should return false if first param is greater', () => {
		expect(CheckNums(10, 3)).toBe(false);
		expect(CheckNums(-3, -10)).toBe(false);
	});
});
