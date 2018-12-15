const { ConvexHullPoints } = require('../../problems/hard/H051ConvexHullPoints');

describe('ConvexHullPoints', () => {
	it('returns a correct answer', () => {
		expect(ConvexHullPoints(['(2,2)', '(3,1)', '(2,6)', '(0,-2)'])).toBe(3);
	});
});
