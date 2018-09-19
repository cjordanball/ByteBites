const { NumberStream } = require('../../problems/easy/E063NumberStream');

describe('NumberStream', () => {
	it('return an accurate answer', () => {
		expect(NumberStream('6539923335')).toBe(true);
	});
});
