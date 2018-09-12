const { StringCalculate } = require('../problems/medium/M076StringCalculate');

describe('StringCalculate', () => {
	it('returns a correct answer', () => {
		expect(StringCalculate('(4/2)**3')).toBe(8);
	});
	it('handles implied multiplication correctly', () => {
		expect(StringCalculate('5(2 + 1)')).toBe(15);
	});
});
