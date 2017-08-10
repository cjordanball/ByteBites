const { CountingMinutes } = require('../problems/easy/problemE021');

describe('DivisionStringified', () => {
	it('return the time difference in minutes', () => {
		expect(CountingMinutes('3:37am-5:00am')).toBe(83);
	});

	it('handle times on first day later than time on second dat', () => {
		expect(CountingMinutes('1:00pm-11:00am')).toBe(1320);
	});

	it('should deal correctly with same times', () => {
		expect(CountingMinutes('9:37am-9:37am')).toBe(0);
	});
});
