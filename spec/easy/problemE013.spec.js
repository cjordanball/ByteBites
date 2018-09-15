const { WordCount } = require('../../problems/easy/E013WordCount');

describe('WordCount', () => {
	it('should determine the number of words in a string', () => {
		expect(WordCount('Now is the winter of our discontent made glorious summer by this son of York.')).toBe(15);
	});
	it('counts each use of a word used multiple times', () => {
		expect(WordCount('Liar, liar, liar, pants on fire!')).toBe(6);
	});
	it('returns correctly for an empty string', () => {
		expect(WordCount('')).toBe(0);
	});
});
