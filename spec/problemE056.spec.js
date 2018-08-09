const { ThreeNumbers } = require('../problems/easy/E056ThreeNumbers');

describe('ThreeNumbers', () => {
	it('arrives at a solution', () => {
		expect(ThreeNumbers('2hell6o3 wor6l7d2')).toBe(true);
	});
	it('arrives at a negative solution', () => {
		expect(ThreeNumbers('hell268o w6or2l4d')).toBe(false);
	});
	it('arrives at a solution', () => {
		expect(ThreeNumbers('2hell6o3 wor6l7d2')).toBe(true);
	});
	it('arrives at a solution', () => {
		expect(ThreeNumbers('2a3b5 w1o2rl3d g1gg92')).toBe(true);
	});
	it('arrives at a solution', () => {
		expect(ThreeNumbers('a1a2a3aa b1bb2b3b cc1cc2c3 1dd5dd6dd')).toBe(true);
	});
	it('arrives at a solution', () => {
		expect(ThreeNumbers('1a23')).toBe(true);
	});
	it('arrives at a solution', () => {
		expect(ThreeNumbers('1a2a3 bb34b6 cc7c16c')).toBe(true);
	});
});
