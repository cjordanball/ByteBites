const { StringPeriods } = require('../problems/easy/E077StringPeriods');

describe('StringPeriods', () => {
	it('should return -1 if the the length of the string is 1', () => {
		expect(StringPeriods('a')).toBe(-1);
	});
	it('should return abcd if the input is abcdabcdabcd', () => {
		expect(StringPeriods('abcdabcdabcd')).toBe('abcd');
	});
	it('should return -1 if there is no substring smaller than the input string', () => {
		expect(StringPeriods('abcdefg')).toBe(-1);
	});
	it('should return "g" if the string is "gg"', () => {
		expect(StringPeriods('gg')).toBe('g');
	});
});
