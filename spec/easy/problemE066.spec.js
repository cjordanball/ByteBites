const { QuestionsMarks } = require('../../problems/easy/E066QuestionsMarks');

describe('QuestionsMarks', () => {
	it('returns true appropriately', () => {
		expect(QuestionsMarks('arrb6???4xxbl5???eee5')).toBe(true);
	});
});
