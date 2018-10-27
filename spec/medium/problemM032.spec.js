const { DistinctList } = require('../../problems/medium/M032DistinctList');

describe('DistinctList', () => {
	it('creates the correct value', () => {
		expect(DistinctList([1, 2, 3, 3, 3, 2, 4, 5, 5, 6])).toBe(4);
	});
});
