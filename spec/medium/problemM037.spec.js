const { KUniqueCharacters } = require('../../problems/medium/M037KUniqueCharacters');

describe('KUniqueCharacters', () => {
	it('creates the correct value', () => {
		expect(KUniqueCharacters('2aabbacbaa')).toBe('aabba');
	});
});
