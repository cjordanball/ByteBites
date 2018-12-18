const { TetrisMove } = require('../../problems/hard/H053TetrisMove');

describe('TetrisMove', () => {
	it('returns a correct answer1', () => {
		expect(TetrisMove(['I', '2', '4', '3', '4', '5', '2', '0', '2', '2', '3', '3', '3'])).toBe(2);
	});
	it('returns a correct answer2', () => {
		expect(TetrisMove(['O', '4', '3', '2', '3', '5', '1', '0', '1', '2', '4', '3', '4'])).toBe('true');
	});
	it('returns a correct answer3', () => {
		expect(TetrisMove(['L', '3', '4', '4', '5', '6', '2', '0', '6', '5', '3', '6', '6'])).toBe('false');
	});
});
