const { OtherProducts } = require('../problems/easy/E037OtherProducts');

describe('OtherProducts', () => {
	it('should do the multiplication thing', () => {
		expect(OtherProducts([2])).toBe('0');
		expect(OtherProducts([1, 2, 3, 4, 5])).toBe('120-60-40-30-24');
	});
});
