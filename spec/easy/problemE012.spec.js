const { VowelCount } = require('../../problems/easy/E012VowelCount');

describe('VowelCount', () => {
	it('should find the vowels in a string', () => {
		expect(VowelCount('Now is the winter of our discontent made glorious summer')).toBe(19);
	});
	it('counts double vowels correctly', () => {
		expect(VowelCount('asaafireiogha')).toBe(8);
	});
	it('returns correctly if there are no vowels', () => {
		expect(VowelCount('dsrtfgrrrr')).toBe(0);
	});
});
