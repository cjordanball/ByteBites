const { RunLength } = require('../../problems/medium/M002RunLength');

describe('RunLength', () => {
	it('returns a correct answer', () => {
		expect(RunLength('wwwggopp')).toBe('3w2g1o2p');
	});
});
