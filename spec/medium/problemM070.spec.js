const { OffBinary } = require('../../problems/medium/M070OffBinary');

describe('OffBinary', () => {
	it('returns the correct value', () => {
		expect(OffBinary(['56', '011000'])).toBe(1);
	});
});
