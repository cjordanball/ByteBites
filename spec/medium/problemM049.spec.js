const { HTMLElements } = require('../../problems/medium/M049HTMLElements');

describe('HTMLElements', () => {
	it('return true if correct nesting', () => {
		expect(HTMLElements('<div><b><p>hello world</p></b></div>')).toBe(true);
	});
	it('should suggest the change to the nesting', () => {
		expect(HTMLElements('<div><i>hello</i>world</b>')).toBe('div');
	});
});
