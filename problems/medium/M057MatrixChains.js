/*
Have the function MatrixChains(arr) read the array of positive integers stored in arr where
every pair will represent an NxM matrix. For example: if arr is [1, 2, 3, 4] this means you
have a 1x2, 2x3, and a 3x4 matrix. So there are N-1 total matrices where N is the length of
the array. Your goal is to determine the least number of multiplications possible after
multiplying all the matrices. Matrix multiplication is associative so (A*B)*C is equal to A*(B*C).

For the above example, let us assume the following letters represent the different matrices:
A = 1x2, B = 2x3, and C = 3x4. Then we can multiply the matrices in the following orders:
(AB)C or A(BC). The first ordering requires (1*2*3) = 6 then we multiply this new 1x3 matrix
by the 3x4 matrix and we get (1*3*4) = 12. So in total, this ordering required 6 + 12 = 18
multiplications. Your program should therefore return 18 because the second ordering produces
more multiplications. The input array will contain between 3 and 30 elements.
*/

const info = {
	name: 'MatrixChains',
	number: 57,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const helpers = {};
let counter = 0;

const MatrixChains = (arr) => {
	const newArr = Array.from(arr);
	let index = 0;
	for (let i = 0, len = newArr.length; i < len; i++) {
		if (arr[i] < newArr[index]) {
			index = i;
		}
	}
	// multiply to the right from the index, to extent possible
	helpers.moveRight(index, newArr);
	// multiply to the left from the index, to extent possible
	helpers.moveLeft(index, newArr);

	if (newArr.length === 3) {
		counter += newArr[0] * newArr[1] * newArr[2];
	}

	return counter;
};

Object.assign(helpers, {
	// takes the smallest value and multiplies arrays going righttward
	moveRight(index, newArr) {
		let move = newArr.length - index > 2;
		while (move) {
			counter += newArr[index] * newArr[index + 1] * newArr[index + 2];
			newArr.splice(index + 1, 1);
			if (newArr.length - index === 2) {
				move = false;
			}
		}
	},
	// takes the smallest value and multiplies going leftward
	moveLeft(index, newArr) {
		let indexCopy = 1;
		let move = index > 1;
		while (move) {
			counter += newArr[indexCopy] * newArr[indexCopy - 1] * newArr[indexCopy - 2];
			newArr.splice(index - 1, 1);
			indexCopy--;
			if (newArr.length === 3) {
				move = false;
			}
		}
	}
});

module.exports = {
	MatrixChains,
	helpers,
	info
};
