const { CharlietheDog } = require('../../problems/medium/M073CharlietheDog');

describe('CharlietheDog', () => {
	it('returns the correct value', () => {
		expect(CharlietheDog(['FOOF', 'OCOO', 'OOOH', 'FOOO'])).toBe(11);
	});
});
