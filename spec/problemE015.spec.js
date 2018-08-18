const { Palindrome } = require('../problems/easy/E015Palindrome');

describe('Palindrome', () => {
	it('should see if a string is a palindrome', () => {
		expect(Palindrome('racecar')).toBe(true);
	});
	it('should be case insensitive', () => {
		expect(Palindrome('God dog')).toBe(true);
	});
	it('should be space sensitive', () => {
		expect(Palindrome('Able  was I ere I saw Elba')).toBe(false);
	});
});
