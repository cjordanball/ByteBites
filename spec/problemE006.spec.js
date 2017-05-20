const { LetterCapitalize } = require('../problems/easy/problemE006');

describe('LetterCapitalize', () => {
	it('should capitalize all the letters of a sentence made of 1 letter words', () => {
		expect(LetterCapitalize('a B c d E f g H')).toBe('A B C D E F G H');
	});
	it('should capitalize only the first letter of each word', () => {
		expect(LetterCapitalize('Now is the winter of our discontent'))
			.toBe('Now Is The Winter Of Our Discontent');
	});
});
