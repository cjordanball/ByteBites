const { BoggleSolver } = require('../../problems/medium/M048BoggleSolver');

describe('BoggleSolver', () => {
	it('return a correct response', () => {
		expect(BoggleSolver(['rbfg, ukop, fgub, mnry', 'bog,bop,gup,fur,ruk'])).toBe(true);
		expect(BoggleSolver(['rbfg, ukop, fgub, mnry', 'xxx,bog,bop,gup,yyy,fur,ruk'])).toBe('xxx,yyy');
	});
});
