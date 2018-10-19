const { MostFreeTime, helpers } = require('../../problems/medium/M029MostFreeTime');

describe('MostFreeTime', () => {
	it('creates the correct value', () => {
		expect(MostFreeTime(['10:00AM-12:30PM', '02:00PM-02:45PM', '09:10AM-09:50AM'])).toBe('01:30');
	});
});

describe('TimeMassage', () => {
	it('puts the time string in the desired format', () => {
		expect(helpers.timeMassage('02:30am-12:45pm')).toBe('150-765');
	});
});
