const { LRUCache } = require('../../problems/medium/M041LRUCache');

describe('LRUCache', () => {
	it('creates the correct value', () => {
		expect(LRUCache(['A', 'B', 'C', 'D', 'A', 'E', 'D', 'Z'])).toBe('C-A-E-D-Z');
	});
});
