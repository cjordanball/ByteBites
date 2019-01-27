const { Calculator } = require('../../problems/hard/H006Calculator');

describe('Calculator', () => {
	it('returns a correct answer', () => {
		expect(Calculator('2+(3-1)*3')).toBe(8);
		expect(Calculator('6*(4/2)+3*1')).toBe(15);
		expect(Calculator('6/3-1')).toBe(1);
	});
	it('correctly handles two paren expressions', () => {
		expect(Calculator('(4/2)(3-1)')).toBe(4);
	});
});
