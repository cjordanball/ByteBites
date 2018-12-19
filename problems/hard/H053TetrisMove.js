/*
Have the function TetrisMove(strArr) take strArr parameter being passed which will be an array
containing one letter followed by 12 numbers representing a Tetris piece followed by the fill
levels for the 12 columns of the board. Calculate the greatest number of horizontal lines that
can be completed when the piece arrives at the bottom assuming it is dropped immediately after
being rotated and moved horizontally from the top. Tricky combinations of vertical and horizontal
movements are excluded. The piece types are represented by capital letters.

I:  x x x x
J:  x x x
        x
L:  x x x
    x
O:  x x
    x x
S:    x x
    x x
T:  x x x
      x
Z:  x x
      x x

For example, with an input of ["L","3","4","4","5","6","2","0","6","5","3","6","6"], the board will
look something like this:

oooooooooooo
oooooooooooo
oooooooooooo
oooooooooooo
ooooxooxooxx
oooxxooxxoxx
oxxxxooxxoxx
xxxxxooxxxxx
xxxxxxoxxxxx
xxxxxxoxxxxx

Your result should be 3 because the L piece can be rotated and dropped in column 6-7 which will
complete 3 full rows of blocks.
*/

const info = {
	name: 'TetrisMove',
	number: 53,
	level: 'hard',
	methods: [],
	concepts: []
};

const helpers = {};

const TetrisMove = (strArr) => {
	let modifiedArray = strArr
		.slice(1)
		.map(val => parseInt(val, 10));
	const shape = strArr[0].toUpperCase();
	const minResult = Math.min(...modifiedArray);
	const height = Math.max(...modifiedArray);
	modifiedArray = modifiedArray.map(val => val - minResult);
	let stringRep = modifiedArray.join('');
	for (let i = 0; i < height; i++) {
		const res = helpers.evaluate(shape, stringRep);
		if (res) {
			return minResult + res;
		}
		modifiedArray = modifiedArray.map(val => Math.max(val - 1, 0));
		stringRep = modifiedArray.join('');
	}

	return minResult + helpers.evaluate(shape, stringRep);
};

Object.assign(helpers, {
	evaluate(shape, stringRep) {
		const testPattern = /(0+)/g;
		if (stringRep.match(testPattern).length > 1) {
			return 0;
		}
		switch (shape) {
			case 'O': {
				const pattern = /(00)/;
				const base = pattern.exec(stringRep) ? pattern.exec(stringRep)[1].length : null;
				if (base !== 2) {
					return 0;
				}
				const newString = stringRep.replace('00', '22');
				return Math.min(...(newString.split('')));
			}
			case 'I': {
				const pattern = /(0+)/;
				if (pattern.exec(stringRep)[1].length === 4) {
					return 1;
				} if (pattern.exec(stringRep)[1].length !== 1) {
					return 0;
				}
				const newString = stringRep.replace('0', '4');
				return Math.min(...(newString.split('')));
			}
			case 'J': {
				const pattern = /(0+)/;
				const base = pattern.exec(stringRep)[1].length;
				if (base > 3) {
					return 0;
				} else if (base > 1) {
					return 1;
				}
				const pattern2 = /110/;
				if (pattern2.test(stringRep)) {
					const newString = stringRep.replace('110', '222');
					return Math.min(...(newString.split('')));
				}
				const pattern3 = /(02)/;
				if (pattern3.test(stringRep)) {
					const newString = stringRep.replace('02', '33');
					return Math.min(...(newString.split('')));
				}
				break;
			}
			case 'L': {
				const pattern = /(0+)/g;
				const base = pattern.exec(stringRep)[1].length;
				if (base > 3) {
					return 0;
				} else if (base > 1) {
					return 1;
				}
				const pattern2 = /011/;
				if (pattern2.test(stringRep)) {
					const newString = stringRep.replace('011', '222');
					return Math.min(...(newString.split('')));
				}
				const pattern3 = /(20)/;
				if (pattern3.test(stringRep)) {
					const newString = stringRep.replace('20', '33');
					return Math.min(...(newString.split('')));
				}
				break;
			}
			case 'T': {
				const pattern = /(0+)/;
				const base = pattern.exec(stringRep)[1].length;
				if (base > 3 || base === 2) {
					return 0;
				} else if (base === 3) {
					return 1;
				}
				const pattern2 = /101/;
				if (pattern2.test(stringRep)) {
					const newString = stringRep.replace('101', '222');
					return Math.min(...(newString.split('')));
				}
				const pattern3 = /(01)|(10)/;
				if (pattern3.test(stringRep)) {
					const newString = stringRep.replace(/01|10/, '22');
					return Math.min(...(newString.split('')));
				}
				break;
			}
			case 'S': {
				const pattern = /(0+)/;
				const base = pattern.exec(stringRep)[1].length;
				if (base > 2) {
					return 0;
				}
				if (base === 2) {
					const pattern2 = /001/;
					if (pattern2.test(stringRep)) {
						return 1;
					}
					return 0;
				}
				const pattern3 = /10/;
				if (pattern3.test(stringRep)) {
					const newString = stringRep.replace('10', '32');
					return Math.min(...(newString.split('')));
				}
				break;
			}
			case 'Z': {
				const pattern = /(0+)/;
				const base = pattern.exec(stringRep)[1].length;
				if (base > 2) {
					return 0;
				}
				if (base === 2) {
					const pattern2 = /100/;
					if (pattern2.test(stringRep)) {
						return 1;
					}
					return 0;
				}
				const pattern3 = /01/;
				if (pattern3.test(stringRep)) {
					const newString = stringRep.replace('01', '23');
					return Math.min(...(newString.split('')));
				}
				break;
			}
			default:
				return 0;
		}
		return null;
	}
});

module.exports = {
	TetrisMove,
	info
};
