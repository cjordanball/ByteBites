const { DistinctCharacters } = require('../../problems/easy/E065DistinctCharacters');

describe('DistinctCharacters', () => {
	it('returns false if not sufficient', () => {
		expect(DistinctCharacters('abcdeffffffffffgh')).toBe(false);
	});
	it('returns true if sufficient', () => {
		expect(DistinctCharacters('asdfghjkl;wertyuio')).toBe(true);
	});
});
