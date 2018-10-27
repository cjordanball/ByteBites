const { LookSaySequence } = require('../../problems/medium/M031LookSaySequence');

describe('LookSaySequence', () => {
	it('creates the correct value', () => {
		expect(LookSaySequence(312211)).toBe(13112221);
		expect(LookSaySequence(1)).toBe(11);
	});
});
