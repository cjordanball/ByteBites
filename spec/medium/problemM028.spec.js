const { MultipleBrackets } = require('../../problems/medium/M028MultipleBrackets');

describe('MultipleBrackets', () => {
	it('creates the correct value', () => {
		expect(MultipleBrackets('(hello [world])(!)')).toBe('1 3');
		expect(MultipleBrackets('(hello [world])(!)]')).toBe(0);
		expect(MultipleBrackets('Now is the winter of our discontent')).toBe(1);
	});
});
