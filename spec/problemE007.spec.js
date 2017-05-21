const { SimpleSymbols } = require('../problems/easy/problemE007');

describe('SimpleSymbols', () => {
	it('should not work if a letter is at start or end', () => {
		expect(SimpleSymbols('a+===+b+===+c+===')).toBe('false');
	});
	it('should work with capital letters', () => {
		// expect(SimpleSymbols('=======++++d+====I+====')).toBe('false');
		expect(SimpleSymbols('++d++I+')).toBe('true');
	});
});
