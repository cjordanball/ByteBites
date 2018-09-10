const { CommandLine } = require('../problems/easy/E080CommandLine');

describe('CommandLine', () => {
	it('should return a valid result', () => {
		expect(CommandLine('SampleNumber=3234 provider=Dr. M. Welby patient=John Smith priority=High')).toBe('12=4 8=12 7=10 8=4');
	});
});
