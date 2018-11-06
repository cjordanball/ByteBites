const { TreeConstructor } = require('../../problems/medium/M042TreeConstructor');

describe('TreeConstructor', () => {
	it('creates the correct value', () => {
		expect(TreeConstructor(['(1,2)', '(2,4)', '(7,2)'])).toBe(true);
	});
});
