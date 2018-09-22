const { BinaryConverter } = require('../../problems/medium/M009BinaryConverter');

describe('BinaryConverter', () => {
	it('returns a correct answer', () => {
		expect(BinaryConverter('1111')).toBe(15);
	});
});
