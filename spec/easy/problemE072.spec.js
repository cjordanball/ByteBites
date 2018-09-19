const { StringMerge } = require('../../problems/easy/E072StringMerge');

describe('StringMerge', () => {
	it('returns a correct true value', () => {
		expect(StringMerge('abc1*kyoo')).toBe('akbyco1o');
	});
});
