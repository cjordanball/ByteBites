const { SwapCase } = require('../problems/easy/problemE024');

describe('SwapCase', () => {
	it('should toggle the case of all letters', () => {
		expect(SwapCase('aBcDeFg')).toBe('AbCdEfG');
	});
	it('should leave non alphabet characters unchanged', () => {
		expect(SwapCase('Now is it time?", "No, at 3:30!"')).toBe('nOW IS IT TIME?", "nO, AT 3:30!"');
	});
});
