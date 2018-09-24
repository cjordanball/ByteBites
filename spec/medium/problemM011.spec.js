const { CaesarCipher } = require('../../problems/medium/M011CaesarCipher');


describe('CaesarCipher', () => {
	it('returns a correct answer', () => {
		expect(CaesarCipher('abc,xyz+ABC-XYZ', 2)).toBe('cde,zab+CDE-ZAB');
	});
});
