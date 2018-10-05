const { DashInsertII } = require('../../problems/medium/M018DashInsertII');


describe('DashInsertII', () => {
	it('returns a correct answer', () => {
		expect(DashInsertII(4246842546793)).toBe('4*2*4*6*8*4*254*67-9-3');
	});
});
