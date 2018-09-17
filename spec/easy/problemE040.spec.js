const { BinaryReversal } = require('../../problems/easy/E040BinaryReversal');

describe('BinaryReversal', () => {
	it('return the correct string', () => {
		expect(BinaryReversal('1')).toBe('128');
		expect(BinaryReversal('47')).toBe('244');
	});
});
