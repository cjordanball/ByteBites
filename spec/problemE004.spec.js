const { LetterChanges, helpers: { prepare, shifter, capitalizer } } = require('../problems/easy/problemE004');

describe('LetterChanges', () => {
	it('should combine the submethods to return the correct total result', () => {
		expect(LetterChanges('abcdef ghi jklm nopqr, stuv wxyz. A, bcdqz.'))
			.toBe('bcdEfg hIj klmn Opqrs, tUvw xyzA. b, cdErA.');
	});
	describe('prepare', () => {
		it('should remove spaces from the front or rear', () => {
			expect(prepare('  now we are doing okay.	   ')).toBe('now we are doing okay.');
		});
		it('should put everything in lowercase', () => {
			expect(prepare('Now is the WinTer of OUR disContent')).toBe('now is the winter of our discontent');
		});
	});
	describe('shifter', () => {
		it('should move every letter by 1', () => {
			expect(shifter('now is the winter')).toBe('opx jt uif xjoufs');
		});
	});
	describe('capitalizer', () => {
		it('should capitalize every vowel in a string', () => {
			expect(capitalizer('abcdefghijklmnopqrstuvwxyz')).toBe('AbcdEfghIjklmnOpqrstUvwxyz');
		});
	});
});
