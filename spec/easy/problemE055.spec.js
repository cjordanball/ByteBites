const { ScaleBalancing } = require('../../problems/easy/E055ScaleBalancing');

describe('ScaleBalancing', () => {
	it('solve a single-weight problem', () => {
		expect(ScaleBalancing(['[5, 9]', '[1, 4, 10, 5]'])).toBe('4');
	});
	it('solve a multiple-weight problem', () => {
		expect(ScaleBalancing(['[5, 9]', '[1, 2, 6, 7]'])).toBe('2,6');
	});
	it('will add two weights to one side to balance', () => {
		expect(ScaleBalancing(['[5, 16]', '[1, 3, 8, 4, 14]'])).toBe('3,8');
	});
});
