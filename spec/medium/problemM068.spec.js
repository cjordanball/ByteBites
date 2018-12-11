const { PreorderTraversal, helpers: { createFullArray, orderArray, setSubArrays, splitArrays } } = require('../../problems/medium/M068PreorderTraversal');

describe('createFullArray', () => {
	it('returns the correct value for miss 1', () => {
		expect(createFullArray(['5', '2', '6', '1', '9', '#', '8', '#', '#', '#', '#', '4', '#'])).toEqual(['5', '2', '6', '1', '9', '#', '8', '#', '#', '#', '#', '#', '#', '4', '#']);
	});
	xit('returns the correct value for a right side array', () => {
		expect(createFullArray(['5', '#', '6', '#', '8', '4', '#'])).toEqual(['5', '#', '6', '#', '#', '#', '8', '#', '#', '#', '#', '#', '#', '4', '#']);
	});
});

describe('orderArray', () => {
	it('returns the correct string from a single item array', () => {
		expect(orderArray([['5']])).toEqual(['5']);
	});
	it('returns the correct string, given full Array', () => {
		expect(orderArray([['5'], ['2', '6'], ['1', '9', '#', '8'], ['#', '#', '#', '#', '#', '#', '4', '#']], []))
		.toEqual(['5', '2', '1', '#', '#', '9', '#', '#', '6', '#', '#', '#', '8', '4', '#']);
	});
});

describe('splitArrays', () => {
	it('creates an array of subArrays of elements', () => {
		expect(splitArrays([[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15]]))
			.toEqual([[[2], [4, 5], [8, 9, 10, 11]], [[3], [6, 7], [12, 13, 14, 15]]]);
	});
});

describe('setSubArrays', () => {
	it('takes an array of elements and creates an array of subArrays of elements', () => {
		expect(setSubArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))
			.toEqual([[1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15]]);
		expect(setSubArrays([1])).toEqual([[1]]);
	});
});

describe('PreorderTraversal', () => {
	it('returns the correct value for long', () => {
		expect(PreorderTraversal(['5', '2', '6', '1', '9', '#', '8', '2', '12', '#', '#', '#', '#', '#', '99'])).toBe('5 2 1 2 12 9 6 8 99');
	});
});

describe('PreorderTraversal', () => {
	it('returns the correct value for short', () => {
		expect(PreorderTraversal(['1', '#', '2', '#', '3'])).toBe('1 2 3');
	});
});

describe('PreorderTraversal', () => {
	it('returns the correct value for short', () => {
		expect(PreorderTraversal(['5', '2', '6', '1', '9', '#', '8', '#', '#', '#', '#', '4', '#'])).toBe('5 2 1 9 6 8 4');
	});
});
