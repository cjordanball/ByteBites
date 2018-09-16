const { SecondGreatLow } = require('../../problems/easy/E019SecondGreatLow');

describe('SecondGreatLow', () => {
	it('should return second lowest and second highest numbers', () => {
		expect(SecondGreatLow([5, 1, 6, 9, 3, 4])).toBe('3 6');
	});

	it('should return a two element array in reverse order', () => {
		expect(SecondGreatLow([3, 4])).toBe('4 3');
	});

	it('should deal correctly with multiple entries', () => {
		expect(SecondGreatLow([1, 1, 2, 3, 4, 5, 5, 5, 1000, 1000])).toBe('2 5');
	});
});
