const { BipartiteMatching } = require('../../problems/hard/H048BipartiteMatching');

describe('BipartiteMatching', () => {
	it('returns a correct answer', () => {
		expect(BipartiteMatching(['a->d', 'a->e', 'b->f', 'c->e'])).toBe(3);
	});
	it('returns a correct answer', () => {
		expect(BipartiteMatching(['a->w', 'a->x', 'b->y', 'c->y', 'd->z', 'd->r', 'e->z', 'f->y'])).toBe(4);
	});
});
