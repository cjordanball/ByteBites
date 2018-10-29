const { StockPicker } = require('../../problems/medium/M034StockPicker');

describe('StockPicker', () => {
	it('creates the correct value', () => {
		expect(StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15])).toBe(16);
		expect(StockPicker([10, 8, 6, 5, 3, 1, 0])).toBe(-1);
	});
});
