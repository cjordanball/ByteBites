const { MinWindowSubstring } = require('../../problems/medium/M056MinWindowSubstring');

describe('MinWindowSubstring', () => {
	it('returns the correct length', () => {
		expect(MinWindowSubstring(['aabdccdbcacd', 'aad'])).toBe('aabd');
	});
	it('returns the correct length', () => {
		expect(MinWindowSubstring(['aaabaaddae', 'aed'])).toBe('dae');
	});
});
