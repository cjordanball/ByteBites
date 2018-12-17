const { ConvexHullPoints, helpers: { getAngle, getSlope } } = require('../../problems/hard/H051ConvexHullPoints');

describe('ConvexHullPoints', () => {
	it('returns a correct answer', () => {
		expect(ConvexHullPoints(['(2,2)', '(3,1)', '(2,6)', '(0,-2)'])).toBe(3);
	});
});

describe('ConvexHullPoints', () => {
	it('returns a correct answer1', () => {
		expect(ConvexHullPoints(['(2,2)', '(3,1)', '(2,6)', '(0,1)', '(2,3)', '(5,2)'])).toBe(4);
	});
});

describe('ConvexHullPoints', () => {
	it('returns a correct answer2', () => {
		expect(ConvexHullPoints(['(0,1)', '(3,6)', '(2,2)', '(0,7)'])).toBe(4);
	});
});

describe('GetAngle', () => {
	it('returns a correct answer', () => {
		expect(getAngle([0, 6], [0, 0], [1, -1])).toBe(135);
	});
});

describe('GetSlope', () => {
	it('returns a correct answer', () => {
		expect(getSlope([0, 0], [1, 1])).toBe(1);
	});
});
