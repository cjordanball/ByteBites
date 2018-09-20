const { StarRating } = require('../../problems/easy/E081StarRating');

describe('StarRating', () => {
	it('should return a valid result', () => {
		expect(StarRating('2.36')).toBe('full full half empty empty');
	});
});
