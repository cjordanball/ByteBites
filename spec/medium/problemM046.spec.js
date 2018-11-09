const { WordSplit } = require('../../problems/medium/M046WordSplit');

describe('WordSplit', () => {
	it('return a correct response', () => {
		expect(WordSplit(['hellocat', 'apple,bat,cat,goodbye,hello,yellow,why']))
			.toEqual('hello,cat');
		expect(WordSplit(['hellocat', 'apple,bat,cat,goodbye,hell,yellow,why']))
			.toEqual('not possible');
	});
});
