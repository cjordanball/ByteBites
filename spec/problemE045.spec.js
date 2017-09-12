const { NonrepeatingCharacter } = require('../problems/easy/problemE045');

describe('NonrepeatingCharacter', () => {
	it('looks for the nonrepeting char', () => {
		expect(NonrepeatingCharacter('agettkgaeee')).toBe('k');
		expect(NonrepeatingCharacter('hello world hi hey')).toBe('w');
	});
	it('deals with one character strings', () => {
		expect(NonrepeatingCharacter('a')).toBe('a');
	});
});
