const { ASCIIConversion } = require('../../problems/easy/E068ASCIIConversion');

describe('ASCIIConversion', () => {
	it('the correct value for \'dog\'', () => {
		expect(ASCIIConversion('dog')).toBe('100111103');
	});
});
