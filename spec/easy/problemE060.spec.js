const { VowelSquare } = require('../../problems/easy/E060VowelSquare');

describe('VowelSquare', () => {
	it('should correctly identify if a 2x2 square is all vowel', () => {
		expect(VowelSquare(['ae', 'io'])).toBe('0-0');
		expect(VowelSquare(['ae', 'xo'])).toBe('not found');
	});
});
