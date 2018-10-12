const { ThreeFiveMultiples } = require('../../problems/medium/M024ThreeFiveMultiples');

describe('ThreeFiveMultiples', () => {
	it('creates the correct value', () => {
		expect(ThreeFiveMultiples(10)).toBe(23);
	});
});
