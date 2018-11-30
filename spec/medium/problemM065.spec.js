const { ThreePoints, helpers: { prettifyArray, getSlope, getYIntercept } } = require('../../problems/medium/M065ThreePoints');

describe('prettifyArray', () => {
	it('returns an array of arrays of numbers', () => {
		expect(prettifyArray(['(1,1)', '(3,3)', '(3,0)'])).toEqual([[1, 1], [3, 3], [3, 0]]);
	});
});
describe('getSlope', () => {
	it('identifies a vertical line', () => {
		expect(getSlope([1, 12], [1, 6])).toBe('undefined');
	});
	it('determines the slope of a horizontal line', () => {
		expect(getSlope([4, 6], [12, 6])).toBe(0);
	});
	it('determines the slope of other lines', () => {
		expect(getSlope([0, 0], [6, 6])).toBe(1);
	});
});
describe('getYIntercept', () => {
	it('identifies a vertical line situation', () => {
		expect(getYIntercept([1, 1], 'undefined')).toBe('undefined');
	});
	it('gets the y-intercept of a line', () => {
		expect(getYIntercept([5, 5], 1)).toBe(0);
	});
});
describe('ThreePoints', () => {
	it('returns the correct value', () => {
		expect(ThreePoints(['(1,1)', '(3,3)', '(2,0)'])).toBe('right');
	});
	it('returns the correct false value', () => {
		expect(ThreePoints(['(100,100)', '(-1,-1)', '(5,1)'])).toBe('left');
	});
	it('returns the correct false value', () => {
		expect(ThreePoints(['(0,1)', '(-3,0)', '(-1,0)'])).toBe('left');
	});
	it('returns the correct false value', () => {
		expect(ThreePoints(['(0,5)', '(0,-5)', '(1,1)'])).toBe('left');
	});
	it('returns the correct false value', () => {
		expect(ThreePoints(['(5000,5001)', '(-5001,-5000)', '(0,601)'])).toBe('right');
	});
});
