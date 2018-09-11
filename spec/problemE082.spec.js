const { MovingMedian } = require('../problems/easy/E082MovingMedian');

describe('MovingMedian', () => {
	it('should return a valid result', () => {
		expect(MovingMedian([3, 1, 3, 5, 10, 6, 4, 3, 1])).toBe('1,2,3,5,6,6,4,3');
	});
});
