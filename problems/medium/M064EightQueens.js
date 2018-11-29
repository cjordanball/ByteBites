/*
Have the function EightQueens(strArr) read strArr which will be an array consisting of the
locations of eight Queens on a standard 8x8 chess board with no other pieces on the board.
The structure of strArr will be the following: ["(x,y)", "(x,y)", ...] where (x,y) represents
the position of the current queen on the chessboard (x and y will both range from 1 to 8
where 1,1 is the bottom-left of the chessboard and 8,8 is the top-right). Your program should
determine if all of the queens are placed in such a way where none of them are attacking each
other. If this is true for the given input, return the string true otherwise return the first
queen in the list that is attacking another piece in the same format it was provided.

For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"]
then your program should return the string true. The corresponding chessboard of queens for
this input is below (not shown).
*/

const info = {
	name: 'EightQueens',
	number: 64,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const helpers = {};
const EightQueens = (strArr) => {
	// fix up the data as an array of arraySetup
	const newArr = helpers.arraySetup(strArr);
	const len = newArr.length;

	for (let i = 0; i < len; i++) {
		for (let j = 1 + i; j < len; j++) {
			if (helpers.isAttacking(newArr[i], newArr[j])) {
				return `(${newArr[i].slice(0, 2)})`;
			}
		}
	}
	return true;
};

Object.assign(helpers, {
	arraySetup(strArr) {
		return strArr.map(val => JSON.parse(val
			.replace(/\(/g, '[')
			.replace(/\)/g, ']'))
		);
	},
	isAttacking(pos1, pos2) {
		return (pos1[0] === pos2[0] ||
			pos1[1] === pos2[1] ||
			Math.abs(pos1[0] - pos2[0]) === Math.abs(pos1[1] - pos2[1]));
	}
});

module.exports = {
	EightQueens,
	info
};
