const { CountingMinutes } = require('../../problems/medium/M015CountingMinutes');


describe('CountingMinutes', () => {
	it('returns a correct answer', () => {
		expect(CountingMinutes('9:00am-10:00am')).toBe(60);
	});
	it('returns a correct answer', () => {
		expect(CountingMinutes('10:00am-9:00am')).toBe(1380);
	});
});
