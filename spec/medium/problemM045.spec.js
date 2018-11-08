const { MatrixSpiral } = require('../../problems/medium/M045MatrixSpiral');

describe('MatrixSpiral', () => {
	it('return a correct array', () => {
		expect(MatrixSpiral(['[1, 2, 3, 4, 5, 6, 7, 8]',
			'[9, 10, 11, 12, 13, 14, 15, 16]',
			'[17, 18, 19, 20, 21, 22, 23, 24]',
			'[25, 26, 27, 28, 29, 30, 31, 32]']))
			.toEqual('1,2,3,4,5,6,7,8,16,24,32,31,30,29,28,27,26,25,17,9,10,11,12,13,14,15,23,22,21,20,19,18');
	});
});
