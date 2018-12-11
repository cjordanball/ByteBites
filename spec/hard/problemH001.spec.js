const { SudokuQuadrantChecker } = require('../../problems/hard/H001SudokuQuadrantChecker');

describe('SudokuQuadrantChecker', () => {
	it('returns a correct answer', () => {
		expect(SudokuQuadrantChecker(['(1,2,3,4,5,6,7,8,1)', '(x,x,x,x,x,x,x,x,x)', '(x,x,x,x,x,x,x,x,x)',
			'(1,x,x,x,x,x,x,x,x)', '(x,x,x,x,x,x,x,x,x)', '(x,x,x,x,x,x,x,x,x)', '(x,x,x,x,x,x,x,x,x)',
			'(x,x,x,x,x,x,x,x,x)', '(x,x,x,x,x,x,x,x,x)'])).toBe('1,3,4');
	});

	it('returns a correct answer', () => {
		expect(SudokuQuadrantChecker(['(1,2,3,4,5,6,7,8,9)', '(x,x,x,x,x,x,x,x,x)', '(6,x,5,x,3,x,x,4,x)',
			'(2,x,1,1,x,x,x,x,x)', '(x,x,x,x,x,x,x,x,x)', '(x,x,x,x,x,x,x,x,x)', '(x,x,x,x,x,x,x,x,x)',
			'(x,x,x,x,x,x,x,x,x)', '(x,x,x,x,x,x,x,x,9)'])).toBe('3,4,5,9');
	});
});
