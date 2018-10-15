const { CoinDeterminer } = require('../../problems/medium/M026CoinDeterminer');

describe('CoinDeterminer', () => {
	it('creates the correct value', () => {
		expect(CoinDeterminer(5)).toBe(1);
		expect(CoinDeterminer(4)).toBe(4);
		expect(CoinDeterminer(25)).toBe(3);
	});
});
