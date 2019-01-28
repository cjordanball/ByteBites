const { PatternChaser } = require('../../problems/hard/H007PatternChaser');

describe('PatternChaser', () => {
	it('returns a correct answer', () => {
		expect(PatternChaser('aabecaa')).toBe('yes aa');
	});
});
