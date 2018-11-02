const { BitmapHoles } = require('../../problems/medium/M038BitmapHoles');

describe('BitmapHoles', () => {
	it('creates the correct value', () => {
		expect(BitmapHoles(['10111', '10101', '11101', '11111'])).toBe(2);
	});
});
