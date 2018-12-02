const { SimplePassword } = require('../../problems/medium/M067SimplePassword');

describe('SimplePassword', () => {
	it('returns the correct value', () => {
		expect(SimplePassword('abCxu6*o03T')).toBe(true);
	});
});
