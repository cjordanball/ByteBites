const { LetterCount, helpers } = require('../../problems/medium/M010LetterCount');

describe('checkNumber', () => {
	it('returns a correct answer', () => {
		expect(helpers.getNumberOfOccurrences('abcacdade', 'f')).toBe(0);
		expect(helpers.getNumberOfOccurrences('abcacdade', 'a')).toBe(3);
	});
});

describe('getMaxCount', () => {
	it('returns a correct answer', () => {
		expect(helpers.getMaxCount('ahoriblecuw')).toBe(1);
		expect(helpers.getMaxCount('abcacdade')).toBe(3);
	});
});

describe('LetterCount', () => {
	it('returns a correct answer', () => {
		expect(LetterCount('Today, is the greatest day eever!')).toBe('eever');
	});
});
