const { OverlappingRectangles, helpers } = require('../../problems/medium/M030OverlappingRectangles');

describe('OverlappingRectangles', () => {
	it('creates the correct value', () => {
		expect(OverlappingRectangles(['(0,0),(5,0),(0,2),(5,2),(3,1),(5,1),(3,-1),(5,-1)'])).toBe(5);
		expect(OverlappingRectangles(['(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)'])).toBe(3);
		expect(OverlappingRectangles(['(0,0),(5,0),(0,2),(5,2),(12,11),(15,11),(12,-1),(15,-1)'])).toBe(0);
		expect(OverlappingRectangles(['(0,0),(5,0),(0,2),(5,2),(0,0),(1,0),(1,1),(0,1)'])).toBe(10);
		expect(OverlappingRectangles(['(0,0),(1,0),(0,1),(1,1),(0,0),(2,0),(0,-1),(2,-1)'])).toBe(0);
	});
});

describe('RectangArrays', () => {
	it('creates a better array formet', () => {
		expect(helpers.rectangArrays(['(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)'])).toEqual([[[0, 0], [5, 0], [0, 2], [5, 2]], [[2, 1], [5, 1], [2, -1], [5, -1]]]);
	});
});

describe('RecPoints', () => {
	it('returns ll and ur points', () => {
		expect(helpers.recPoints([[0, 0], [5, 0], [0, 2], [5, 2]])).toEqual([[0, 0], [5, 2]]);
	});
});
