const { ArrayMinJumps } = require('../../problems/medium/M043ArrayMinJumps');

describe('ArrayMinJumps', () => {
	it('returns 0 for a single item array', () => {
		expect(ArrayMinJumps([4])).toBe(0);
	});
	it('returns -1 for an impossible', () => {
		expect(ArrayMinJumps([1, 0, 0, 2])).toBe(-1);
	});
	it('returns a correct number value', () => {
		expect(ArrayMinJumps([1, 5, 4, 6, 9, 3, 0, 0, 1, 3])).toBe(3);
	});
});
