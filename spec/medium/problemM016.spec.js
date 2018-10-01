const { PermutationStep } = require('../../problems/medium/M016PermutationStep');


describe('PermutationStep', () => {
	it('returns a correct answer', () => {
		expect(PermutationStep(12453)).toBe(12534);
	});
});
