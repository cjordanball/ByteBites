const { SimpleMode } = require('../../problems/medium/M012SimpleMode');


describe('SimpleMode', () => {
	it('returns a correct answer', () => {
		expect(SimpleMode([5, 10, 10, 6, 5])).toBe(5);
	});
});
