const { TimeDifference } = require('../../problems/easy/E058TimeDifference');

describe('TimeDifference', () => {
	it('correctly returns answer', () => {
		expect(TimeDifference(['2:10pm', '1:30pm', '10:30am', '4:42pm'])).toBe(40);
	});
	it('correctly wraps around to the next day', () => {
		expect(TimeDifference(['2:10pm', '1:30pm', '10:30am', '12:02am', '11:42pm'])).toBe(20);
	});
});
