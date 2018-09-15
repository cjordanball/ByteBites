const { TimeConvert } = require('../../problems/easy/E009TimeConvert');

describe('TimeConvert', () => {
	it('should return "0:0" if input is 0', () => {
		expect(TimeConvert(0)).toBe('0:0');
	});
	it('should return an error message if a negative number is passed in', () => {
		expect(TimeConvert(-5)).toBe('Cannot accept negative numbers.');
	});
	it('should return the hours and minutes', () => {
		expect(TimeConvert(235455)).toBe('3924:15');
		expect(TimeConvert(180)).toBe('3:0');
	});
});
