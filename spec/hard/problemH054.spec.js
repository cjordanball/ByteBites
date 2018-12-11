const { Wildcards } = require('../../problems/hard/H054Wildcards');

describe('Wildcards', () => {
	it('returns a correct answer', () => {
		expect(Wildcards('++*{5} jtggggg')).toBe('true');
	});
	it('returns a correct answer', () => {
		expect(Wildcards('$$**+*{2} 77mmmrrrkbb')).toBe('true');
	});
	it('returns a correct answer', () => {
		expect(Wildcards('+++++* abcdemmmmmm')).toBe('false');
	});
	it('returns a correct answer', () => {
		expect(Wildcards('$$$$$*+ 65656vvr')).toBe('false');
	});
});
