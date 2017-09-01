const { ArrayMatching } = require('../problems/easy/problemE039');

describe('ArrayMatching', () => {
	it('should do the bitwise thing', () => {
		expect(ArrayMatching(['[1, 2, 5, 6, 3, 45]', '[5, 2, 8, 11, 13]'])).toBe('6-4-13-17-16-45');
	});
});