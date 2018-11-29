const { EightQueens } = require('../../problems/medium/M064EightQueens');

describe('EightQueens', () => {
	it('returns the correct value', () => {
		expect(EightQueens(['(2,1)', '(4,2)', '(6,3)', '(8,4)', '(3,5)', '(1,6)', '(7,7)', '(5,8)'])).toBe(true);
	});
	it('returns the correct value', () => {
		expect(EightQueens(['(1,1)', '(7,2)', '(4,3)', '(6,4)', '(8,5)', '(2,6)', '(5,7)', '(5,8)'])).toBe('(8,5)');
	});
});
