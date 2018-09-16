const { DashInsert1, DashInsert2 } = require('../../problems/easy/E023DashInsert');

describe('DashInsert1', () => {
	it('should insert dashes properly into the number', () => {
		expect(DashInsert1(1111111)).toBe('1-1-1-1-1-1-1');
		expect(DashInsert1(12345678)).toBe('12345678');
		expect(DashInsert1(12235789932)).toBe('1223-5-789-9-32');
	});
});

describe('DashInsert2', () => {
	it('should insert dashes properly into the number', () => {
		expect(DashInsert2(1111111)).toBe('1-1-1-1-1-1-1');
		expect(DashInsert2(12345678)).toBe('12345678');
		expect(DashInsert2(12235789932)).toBe('1223-5-789-9-32');
	});
});
