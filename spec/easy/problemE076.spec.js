const { SerialNumber } = require('../../problems/easy/E076SerialNumber');

describe('SerialNumber', () => {
	it('should return true for input 224.315.218', () => {
		expect(SerialNumber('224.315.218')).toBe('true');
	});
	it('should return false if first three digits add up to odd', () => {
		expect(SerialNumber('234.315.218')).toBe('false');
	});
	it('should return false if second three digits add up to even', () => {
		expect(SerialNumber('224.316.218')).toBe('false');
	});
	it('should return false if last digit of any set is not largest', () => {
		expect(SerialNumber('222.316.218')).toBe('false');
	});
});
