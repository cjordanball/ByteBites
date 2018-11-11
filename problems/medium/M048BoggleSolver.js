/*
Have the function BoggleSolver(strArr) read the array of strings stored in strArr, which
will contain 2 elements: the first element will represent a 4x4 matrix of letters, and
the second element will be a long string of comma-separated words each at least 3 letters
long, in alphabetical order, that represents a dictionary of some arbitrary length. For
example: strArr can be: ["rbfg, ukop, fgub, mnry", "bog,bop,gup,fur,ruk"]. Your goal is to
determine if all the comma separated words as the second parameter exist in the 4x4 matrix
of letters. For this example, the matrix looks like the following:

r b f g
u k o p
f g u b
m n r y

The rules to make a word are as follows:
1. A word can be constructed from sequentially adjacent spots in the matrix, where adjacent
means moving horizontally, vertically, or diagonally in any direction.
2. A word cannot use the same location twice to construct itself.

The rules are similar to the game of Boggle. So for the example above, all the words exist in
that matrix so your program should return the string true. If any of the words cannot be found,
then return a comma separated string of the words that cannot be found, in the order they appear
in the dictionary.
*/

const info = {
	name: 'BoggleSolver',
	number: 48,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

let helpers;

const BoggleSolver = (strArr) => {
	const gridArr = helpers.formatter(strArr);
	const needlesArr = helpers.searchTerms(strArr);
	// create an array of failing strings
	const response = needlesArr.filter(val => !helpers.findWord(val, gridArr));
	return response.length ? response.join(',') : true;
};

helpers = {
	// format the grid into an array of arrays from the original parameter
	formatter(strArr) {
		return strArr[0]
			.split(',')
			.map(val => val
				.trim()
				.split(''));
	},
	// create an array of search terms from the original parameter
	searchTerms(strArr) {
		return strArr[1]
			.split(',')
			.map(val => val.trim());
	},
	// search the grid to see if a given string can be found
	findWord(str, grid) {
		// get a fresh, independent copy of the array
		const localArr = helpers.make2DeepArray(grid);
		// find the locations of the first letter, return false if none
		let hotSpots = this.findLetters(str[0], grid);
		if (!hotSpots) {
			return false;
		}
		for (let i = 1, len = str.length; i < len; i++) {
			const newSpots = [];
			hotSpots.forEach((val) => {
				localArr[val[0]][val[1]] = '*';
				newSpots.push(...this.adjacents(localArr, [val[0], val[1]], str[i]));
			});
			hotSpots = newSpots;

			if (!hotSpots.length) {
				return false;
			}
		}
		return true;
	},
	findLetters(char, grid) {
		const res = [];
		for (let row = 0; row < 4; row++) {
			for (let col = 0; col < 4; col++) {
				if (grid[row][col] === char) {
					res.push([row, col]);
				}
			}
		}
		return res.length ? res : null;
	},
	// adjacnts returns an array of all the points contiguous to a given point
	adjacents(localArr, point, char) {
		const res = [];
		res.push(
			[point[0] - 1, point[1]],
			[point[0] - 1, point[1] + 1],
			[point[0], point[1] + 1],
			[point[0] + 1, point[1] + 1],
			[point[0] + 1, point[1]],
			[point[0] + 1, point[1] - 1],
			[point[0], point[1] - 1],
			[point[0] - 1, point[1] - 1]
		);

		return res
			.filter(val => val[0] >= 0 && val[1] >= 0 && val[0] <= 3 && val[1] <= 3)
			.filter(val => localArr[val[0]][val[1]] === char);
	},
	// create a clear copy of an array through two levels
	make2DeepArray(arr) {
		const newArr = [];
		arr.forEach((val) => {
			newArr.push(Array.isArray(val) ? Array.from(val) : val);
		});
		return newArr;
	}
};

module.exports = {
	BoggleSolver,
	helpers,
	info
};
