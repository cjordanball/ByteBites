const { ProductDigits } = require('../../problems/easy/E049ProductDigits');

describe('ProductDigits', () => {
	it('returns the correct value for each input set', () => {
		expect(ProductDigits(81)).toBe(2);
		expect(ProductDigits(24)).toBe(2);
		expect(ProductDigits(90)).toBe(3);
	});
});
