const { AlphabetSoup } = require('../problems/easy/E010AlphabetSoup');

describe('AlphabetSoup', () => {
	it('place capital letters first', () => {
		expect(AlphabetSoup('dcbaS')).toBe('Sabcd');
	});
	it('should sort all the letters passed in', () => {
		expect(AlphabetSoup('qwertyuioplkjhgfdsazxcvbnm')).toBe('abcdefghijklmnopqrstuvwxyz');
	});
	it('should handle repeated letters', () => {
		expect(AlphabetSoup('goodbye')).toBe('bdegooy');
	});
	it('should return single char entries correctly', () => {
		expect(AlphabetSoup('d')).toBe('d');
	});
});
