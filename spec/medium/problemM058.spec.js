const { HistogramArea } = require('../../problems/medium/M058HistogramArea');

describe('HistogramArea', () => {
	it('returns the correct length', () => {
		expect(HistogramArea([2, 1, 3, 4, 1])).toBe(6);
	});
});
