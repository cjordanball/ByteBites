const { NearestSmallerValues } = require('../../problems/medium/M044NearestSmallerValues');

describe('NearestSmallerValues', () => {
	it('return a correct array', () => {
		expect(NearestSmallerValues([5, 2, 8, 3, 9, 12])).toEqual('-1 -1 2 2 3 9');
		expect(NearestSmallerValues([0, 0, 0, 1, 2])).toEqual('-1 0 0 0 1');
	});
});
