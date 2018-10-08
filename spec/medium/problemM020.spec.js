const { NumberSearch } = require('../../problems/medium/M020NumberSearch');

describe('NumberSearch', () => {
	it('creates the correct string', () => {
		expect(NumberSearch('Hello6 9World 2, Nic8e D7ay!')).toBe(2);
	});
});
