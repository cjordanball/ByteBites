const { OptimalAssignments } = require('../../problems/hard/H002OptimalAssignments');

describe('OptimalAssignments', () => {
	it('returns a correct answer', () => {
		expect(OptimalAssignments(['(5,4,2)', '(12,4,3)', '(3,4,13)'])).toBe('(1-3)(2-2)(3-1)');
	});
});
