const { CountingMinutesI } = require('../../problems/easy/E021CountingMinutesI');

describe('CountingMinutesI', () => {
	it('return the time difference in minutes', () => {
		expect(CountingMinutesI('3:37am-5:00am')).toBe(83);
	});

	it('handle times on first day later than time on second dat', () => {
		expect(CountingMinutesI('1:00pm-11:00am')).toBe(1320);
	});

	it('should deal correctly with same times', () => {
		expect(CountingMinutesI('9:37am-9:37am')).toBe(0);
	});
});
