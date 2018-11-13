const { MissingDigitII } = require('../../problems/medium/M050MissingDigitII');

describe('MissingDigitII', () => {
	it('the correct numbers', () => {
		expect(MissingDigitII('38?5 * 3 = 1?595')).toBe('6 1');
	});
});
