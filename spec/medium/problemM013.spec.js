const { Consecutive } = require('../../problems/medium/M013Consecutive');


describe('Consecutive', () => {
	it('returns a correct answer', () => {
		expect(Consecutive([5, 10, 10, 102, 6, 5])).toBe(94);
	});
});
