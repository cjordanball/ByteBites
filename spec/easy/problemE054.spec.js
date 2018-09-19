const { CorrectPath, helpers: { isPathGood, createPath } } = require('../../problems/easy/E054CorrectPath');

describe('CorrectPath', () => {
	describe('CorrectPath', () => {
		it('should return the correct path to get from origin to terminus', () => {
			expect(CorrectPath('drdr??rrddd?')).toBe('drdruurrdddd');
		});
	});

	describe('isPathGood', () => {
		it('should return true if the path is good', () => {
			expect(isPathGood('ddddrrrr')).toBe(true);
			expect(isPathGood('ddddruuuurrrddlldrdr')).toBe(true);
		});
		it('should return false if the path is not good', () => {
			expect(isPathGood('ddlrddrrrr')).toBe(false);
			expect(isPathGood('dddurrrrdd')).toBe(false);
		});
	});

	describe('createPath', () => {
		it('should create the path from the given parameters', () => {
			expect(createPath('drdr??rrddd?', [4, 5, 11], '222')).toBe('drdruurrdddu');
		});
	});
});
