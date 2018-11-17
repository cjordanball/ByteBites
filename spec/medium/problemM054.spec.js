const { SeatingStudents } = require('../../problems/medium/M054SeatingStudents');

describe('SeatingStudents', () => {
	it('returns the correct number of seatings', () => {
		expect(SeatingStudents([12, 2, 6, 7, 11])).toBe(6);
	});
});
