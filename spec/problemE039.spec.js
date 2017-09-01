const { ArrayMatching } = require('../problems/easy/problemE039');

describe('ArrayMatching', () => {
	it('should add the numbers in two arrays', () => {
		expect(ArrayMatching(['[1, 2, 5, 6, 3, 45]', '[5, 2, 8, 11, 13, 4]'])).toBe('6-4-13-17-16-49');
	});
	it('should deal with arrays of unequal lengths', () => {
		expect(ArrayMatching(['[1, 2, 5, 6, 3, 45]', '[5, 2, 8, 11, 13]'])).toBe('6-4-13-17-16-45');
		expect(ArrayMatching(['[1, 2, 5, 6, 3, 45, 50, 12]', '[5, 2, 8, 11, 13]'])).toBe('6-4-13-17-16-45-50-12');
	});
});
