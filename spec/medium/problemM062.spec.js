const { FormattedNumber } = require('../../problems/medium/M062FormattedNumber');

describe('FormattedNumber', () => {
	it('returns the boolean value', () => {
		expect(FormattedNumber(['1,234,56.328'])).toBe(false);
		expect(FormattedNumber(['31,435,323.328392'])).toBe(true);
		expect(FormattedNumber(['898989898'])).toBe(false);
		expect(FormattedNumber(['100'])).toBe(true);
	});
});
