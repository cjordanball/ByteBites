const { DifferentCasesI, DifferentCasesII } = require('../../problems/easy/E087DifferentCases');

describe('DifferentCasesI', () => {
	it('returns a correct answer', () => {
		expect(DifferentCasesI('Daniel LikeS-coding')).toBe('DanielLikesCoding');
	});
});

describe('DifferentCasesII', () => {
	it('returns a correct answer', () => {
		expect(DifferentCasesII('Daniel LikeS-coDINg')).toBe('DanielLikesCoding');
	});
});
