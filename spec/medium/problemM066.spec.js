const { CharacterRemoval } = require('../../problems/medium/M066CharacterRemoval');

describe('CharacterRemoval', () => {
	it('returns the correct value', () => {
		expect(CharacterRemoval(['worlcde', 'apple,bat,cat,goodbye,hello,yellow,why,world'])).toBe(2);
	});
});
