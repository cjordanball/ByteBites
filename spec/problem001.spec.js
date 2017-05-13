const { FirstReverse } = require('../problems/problem001');

describe('myTests', () => {
	it('should return an empty string, if no argument given', () => {
		expect(FirstReverse()).toBe('');
	});
	it('should return an error message if argument is not a string', () => {
		expect(FirstReverse(5)).toBe('The input must be a string.');
		expect(FirstReverse(true)).toBe('The input must be a string.');
		expect(FirstReverse(['a', 'b', 'c'])).toBe('The input must be a string.');
	});
	it('reverse a string of characters', () => {
		expect(FirstReverse('abcdefg')).toBe('gfedcba');
	});
});
