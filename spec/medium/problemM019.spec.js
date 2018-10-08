const { SwapII, helpers } = require('../../problems/medium/M019SwapII');

describe('caseSwap', () => {
	it('swaps the case of each letter of a string', () => {
		expect(helpers.caseSwap('aBcD')).toBe('AbCd');
	});
});

describe('SwapII', () => {
	it('creates the correct string', () => {
		expect(SwapII('6Hello4 -8World, 7 yes3')).toBe('4hELLO6 -8wORLD, 7 YES3');
		expect(SwapII('123gg))((')).toBe('123GG))((');
	});
});
