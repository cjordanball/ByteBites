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
	const minResult = Math.min(...modifiedArray);
	modifiedArray = modifiedArray.map(val => val - minResult);
	const stringRep = modifiedArray.join('');
	maxHeight = helpers.findUpperLimit(Array.from(modifiedArray));
	console.log('maxHeight: ', maxHeight);
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
	evaluateO(strinRep){
		const pattern = /00/;
		if(pattern.test(stringRep)) {
			return 2;
		}
	},
	evaluateI(stringRep) {
		const pattern = /0000/;
		if (pattern.test(stringRep)) {
			return 1;
		}
	}

});

module.exports = {
	TetrisMove,
	info
};
