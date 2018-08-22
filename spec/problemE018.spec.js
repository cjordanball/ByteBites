const { LetterCountI, helpers: { scoring } } = require('../problems/easy/E018LetterCountI');

describe('LetterCountI', () => {
	describe('scoring', () => {
		it('should return an object of letter:count key/value pairs', () => {
			expect(scoring('abcaabacdef')).toEqual(4);
		});
	});

	it('should return the word with the most common letters', () => {
		expect(LetterCountI('abcadeafga - no other words cannot compete with Mississippi')).toBe('abcadeafga');
	});

	it('should return -1 if no word has multiple letters', () => {
		expect(LetterCountI('and in the end, the love you make, is equal to the love you take'));
	});
});
