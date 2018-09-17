const { HammingDistance1, HammingDistance2 } = require('../../problems/easy/E034HammingDistance');

describe('HammingDistance1', () => {
	describe('HammingDistance1', () => {
		it('should return 0 for identical words', () => {
			expect(HammingDistance1(['Now is the winter of our discontent',
				'Now is the winter of our discontent'])).toBe(0);
		});
		it('should determine the number of differing letters', () => {
			expect(HammingDistance1(['coder', 'codec'])).toBe(1);
			expect(HammingDistance1(['jordan', 'boring'])).toBe(4);
		});
	});

	describe('HammingDistance2', () => {
		it('should return 0 for identical words', () => {
			expect(HammingDistance2(['Now is the winter of our discontent',
				'Now is the winter of our discontent'])).toBe(0);
		});
		it('should determine the number of differing letters', () => {
			expect(HammingDistance2(['coder', 'codec'])).toBe(1);
			expect(HammingDistance2(['jordan', 'boring'])).toBe(4);
		});
	});
});
