const { MaxSubarray } = require('../../problems/medium/M035MaxSubarray');

describe('MaxSubarray', () => {
	it('creates the correct value', () => {
		expect(MaxSubarray([-2, 5, -1, 7, -3])).toBe(11);
	});
});
