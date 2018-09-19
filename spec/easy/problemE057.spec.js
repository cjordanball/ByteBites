const { AlphabetSearching } = require('../../problems/easy/E057AlphabetSearching');

describe('AlphabetSearching', () => {
	it('correctly returns false', () => {
		expect(AlphabetSearching('Now is the winter of our discontent made glorious summer')).toBe(false);
	});
	it('correctly returns true on all lowercase', () => {
		expect(AlphabetSearching('zacxyjbbkfgtbhdaielqrm45pnsowtuv')).toBe(true);
	});
	it('correctly returns true on mixed case', () => {
		expect(AlphabetSearching('The quick brown fox jumped over the lazy dogs')).toBe(true);
	});
});
