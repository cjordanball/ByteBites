const { DivisionStringified } = require('../problems/easy/E020DivisionStringified');

describe('DivisionStringified', () => {
	it('should return 3 or fewer digit numbers unchanged', () => {
		expect(DivisionStringified(54, 18)).toBe('3');
	});

	it('should truncate remainders', () => {
		expect(DivisionStringified(314, 9)).toBe('34');
	});

	it('should deal correctly with commas on large numbers', () => {
		expect(DivisionStringified(353926003239, 3)).toBe('117,975,334,413');
	});
});
