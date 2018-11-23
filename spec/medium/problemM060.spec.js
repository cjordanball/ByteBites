const { TernaryConverter } = require('../../problems/medium/M060TernaryConverter');

describe('TernaryConverter', () => {
	it('returns the correct length', () => {
		expect(TernaryConverter(12)).toBe('110');
		expect(TernaryConverter(122)).toBe('11112');
	});
});
