const { SimpleAddingIt, SimpleAddingRec, SimpleAddingClever } = require('../problems/easy/problemE005');

describe('SimpleAdding', () => {
	describe('SimpleAddingRec', () => {
		it('should handle the number 1', () => {
			expect(SimpleAddingIt(1)).toBe(1);
		});
		it('should handle larger numbers', () => {
			expect(SimpleAddingIt(10)).toBe(55);
		});
	});
	describe('SimpleAddingClever', () => {
		it('should handle the number 1', () => {
			expect(SimpleAddingRec(1)).toBe(1);
		});
		it('should handle larger numbers', () => {
			expect(SimpleAddingRec(10)).toBe(55);
		});
	});
	describe('SimpleAddingClever', () => {
		it('should handle the number 1', () => {
			expect(SimpleAddingClever(1)).toBe(1);
		});
		it('should handle larger numbers', () => {
			expect(SimpleAddingClever(10)).toBe(55);
		});
	});
});
