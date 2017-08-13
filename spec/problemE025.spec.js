const { NumberAddition } = require('../problems/easy/problemE025');

describe('NumberAddition', () => {
	it('should add up the numbers contained in a string', () => {
		expect(NumberAddition('88Hello Worl3d')).toBe(91);
		expect(NumberAddition('test 2 hti43 50toast')).toBe(95);
	});
});
