const { BasicRomanNumerals } = require('../../problems/easy/E051BasicRomanNumerals');

describe('BasicRomanNumerals', () => {
	it('recognizes a basic one character number', () => {
		expect(BasicRomanNumerals('X')).toBe(10);
	});
	it('recognizes a subtraction situation', () => {
		expect(BasicRomanNumerals('XIX')).toBe(19);
	});
	it('recognizes a more advanced example', () => {
		expect(BasicRomanNumerals('XLIX')).toBe(49);
	});
});
