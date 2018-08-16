const { StringChanges } = require('../problems/easy/E084StringChanges');

describe('AlphabetSearching', () => {
	it('correctly handles a single character string', () => {
		expect(StringChanges('a')).toBe('a');
		expect(StringChanges('M')).toBe('');
		expect(StringChanges('N')).toBe('');
	});
	it('correctly handles longer examples', () => {
		expect(StringChanges('MNMNjMa')).toBe('a');
		expect(StringChanges('MMMokM')).toBe('okk');
	});
});
