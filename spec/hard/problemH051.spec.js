const { ConvexHullPoints, helpers: { getAngle } } = require('../../problems/hard/H051ConvexHullPoints');

describe('ConvexHullPoints', () => {
	it('returns a correct answer', () => {
		expect(ConvexHullPoints(['(2,2)', '(3,1)', '(2,6)', '(0,-2)'])).toBe(3);
	});
});

describe('GetAngle', () => {
	it('returns a correct answer', () => {
		expect(getAngle([0, 6], [0, 0], [1, -1])).toBe(135);
	});
});
