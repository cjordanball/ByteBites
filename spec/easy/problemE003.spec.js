const { LongestWord } = require('../../problems/easy/E003LongestWord');

describe('LongestWord', () => {
	it('should ignore punctuation', () => {
		expect(LongestWord('robert and es5@3*%&#t#()')).toBe('robert');
	});
	it('should return the first longest word if there are', () => {
		expect(LongestWord('abcdefg is just a word to gfedcb')).toBe('abcdefg');
	});
	it('should return the only word, if that is all there is', () => {
		expect(LongestWord('ab')).toBe('ab');
	});
	it('should allow hyphens to be in the word', () => {
		expect(LongestWord('this is incredibly a dilly-dally-Dubai')).toBe('dilly-dally-Dubai');
	});
});
