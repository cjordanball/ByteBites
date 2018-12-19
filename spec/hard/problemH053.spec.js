const { TetrisMove } = require('../../problems/hard/H053TetrisMove');

describe('TetrisMove', () => {
	it('returns a correct answer for I', () => {
		expect(TetrisMove(['I', '2', '4', '3', '4', '5', '2', '0', '2', '2', '3', '3', '3'])).toBe(2);
	});
	it('returns a correct answer for O', () => {
		expect(TetrisMove(['O', '4', '3', '2', '3', '5', '1', '0', '1', '2', '4', '3', '4'])).toBe(0);
	});
	it('returns a correct answer for L', () => {
		expect(TetrisMove(['L', '3', '4', '4', '5', '6', '2', '0', '6', '5', '3', '6', '6'])).toBe(3);
	});
	it('returns a correct answer for Z', () => {
		expect(TetrisMove(['Z', '4', '3', '3', '4', '3', '3', '0', '2', '3', '4', '5', '4'])).toBe(2);
	});
	it('returns a correct answer for I2', () => {
		expect(TetrisMove(['I', '4', '3', '3', '4', '2', '0', '0', '1', '3', '4', '3', '4'])).toBe(1);
	});
	it('returns a correct answer for S', () => {
		expect(TetrisMove(['S', '4', '3', '2', '3', '5', '2', '0', '1', '2', '4', '3', '4'])).toBe(1);
	});
	it('returns a correct answer for L', () => {
		expect(TetrisMove(['L', '2', '0', '2', '4', '3', '2', '2', '2', '3', '4', '4', '0'])).toBe(0);
	});
});
