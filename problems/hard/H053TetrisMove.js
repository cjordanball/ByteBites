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
	modifiedArray = modifiedArray.map(val => val - minResult);
	const stringRep = modifiedArray.join('');
	maxHeight = helpers.findUpperLimit(Array.from(modifiedArray));
	return minResult + helpers.evaluate(shape);
	return strArr;
};

Object.assign(helpers, {
	findUpperLimit(numArr) {
		let counter = 0;
		let checkNext = true;
		while (checkNext) {
			const resArray = [];
			for (let i = 0; i < 12; i++) {
				if (numArr[i] <= counter) {
					resArray.push(i);
				}
			}
			if ((Math.max(...resArray) - (Math.min(...resArray))) + 1 > resArray.length ||
				resArray.length > 4) {
				checkNext = false;
				return counter;
			}
			counter++;
		}
	},
	evaluate(shape, stringRep) {
		switch (shape) {
			case 'O':
				const patternO = /00/;
				const baseO = patternO.exec(stringRep)[1] ? patternO.exec(stringRep)[1].length : null;
				if (baseO !== 2) {
					return 0;
				}
				const newStringO = stringRep.replace('00', '22');
				return Math.min(...(newStringO.split('')));
				break;
			case 'I':
				const patternI = /(0+)/;
				console.log(patternI.exec(stringRep));
				if (patternI.exec(stringRep)[1].length === 4) {
					return 1;
				} if (patternI.exec(stringRep)[1].length !== 1) {
					return 0;
				}
				const newStringI = stringRep.replace('0', '4');
				return Math.min(...(newStringI.split('')));
				break;
			case 'J':
				const patternJ = /(0+)/;
				const baseJ = patternJ.exec(stringRep)[1].length;
				if (baseJ > 3) {
					return 0;
				} else if (baseJ > 1) {
					return 1;
				}
				const patternJ2 = /110/;
				if (patternJ2.test(stringRep)) {
					const newString = stringRep.replace('110', '222');
					return Math.min(...(newString.split('')));
				}
				const patternJ3 = /(02)/;
				if (patternJ3.test(stringRep)) {
					const newString = stringRep.replace('02', '33');
					return Math.min(...(newString.split('')));
				}
				break;
			case 'L':
				const patternL = /(0+)/;
				const baseL = patternL.exec(stringRep)[1].length;
				if (baseL > 3) {
					return 0;
				} else if (baseL > 1) {
					return 1;
				}
				const patternL2 = /011/;
				if (patternL2.test(stringRep)) {
					const newString = stringRep.replace('011', '222');
					return Math.min(...(newString.split('')));
				}
				const patternL3 = /(20)/;
				if (patternL3.test(stringRep)) {
					const newString = stringRep.replace('20', '33');
					return Math.min(...(newString.split('')));
				}
				break;
			default:
				return 0;
		}
	}
});

module.exports = {
	TetrisMove,
	info
};
