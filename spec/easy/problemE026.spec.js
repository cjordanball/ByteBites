const { ThirdGreatest1, ThirdGreatest2 } = require('../../problems/easy/E026ThirdGreatest');

describe('ThirdGreatest', () => {
	describe('ThirdGreatest1', () => {
		it('should pick the third longest string', () => {
			expect(ThirdGreatest1(['hello', 'frozen', 'world', 'before', 'ingratitude', 'all', 'viola'])).toBe('before');
		});
	});

	describe('ThirdGreatest2', () => {
		it('should pick the third longest string', () => {
			expect(ThirdGreatest2(['hello', 'frozen', 'world', 'before', 'ingratitude', 'all', 'viola'])).toBe('before');
			expect(ThirdGreatest2(['a', 'bb', 'ccc', 'b2', 'dddd', 'cc2', 'cc3', 'ddd2', 'b3'])).toBe('cc3');
		});
	});
});
