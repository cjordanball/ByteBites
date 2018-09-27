const { FormattedDivision } = require('../../problems/medium/M014FormattedDivision');


describe('FormattedDivision', () => {
	it('returns a correct answer', () => {
		expect(FormattedDivision(8.23456, 1)).toBe('8.2346');
	});
	it('returns a correct answer', () => {
		expect(FormattedDivision(33.233223, 1)).toBe('33.2332');
	});
	it('returns a correct answer', () => {
		expect(FormattedDivision(333.123456, 1)).toBe('333.1235');
	});
	it('returns a correct answer', () => {
		expect(FormattedDivision(3333.123456, 1)).toBe('3,333.1235');
	});
	it('returns a correct answer', () => {
		expect(FormattedDivision(12345678, 253)).toBe('48,797.1462');
	});
});
