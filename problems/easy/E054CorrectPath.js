/*
Have the function CorrectPath(str) read the str parameter being passed, which will represent
the movements made in a 5x5 grid of cells starting from the top left position. The characters
in the input string will be entirely composed of: r, l, u, d, ?. Each of the characters stand
for the direction to take within the grid, for example: r = right, l = left, u = up, d = down.
Your goal is to determine what characters the question marks should be in order for a path to
be created to go from the top left of the grid all the way to the bottom right without touching
previously travelled on cells in the grid.

For example: if str is "r?d?drdd" then your program should output the final correct string that
will allow a path to be formed from the top left of a 5x5 grid to the bottom right. For this
input, your program should therefore return the string rrdrdrdd. There will only ever be one
correct path and there will always be at least one question mark within the input string.
*/

/*
First, I am not at all certain this qualifies as an "easy" challenge. The solution below takes a
bit of a blunt force approach, trying each possible route until a working combination is found.

Hopefully, one can find an elegant solution to a problem that does not require blindly trying all
the possibilities until one works. However, sometimes one has no other option (or cannot figure out
another option). In such a case, the approach below is often helpful. The first step is to determine
the number of possible options. In the instance below, there are four possible options for each
blank move, so we will have 4 to the x power possibilities. Then, we can use the toString() method,
making use of its radix parameter, to represent the possibilities at each blank. For example,
in our case, each blank has 4 possible values ('r', 'l', 'u', 'd'), so we can convert a number
to a base-4 representation, with a value of 0, 1, 2, or 3, which can be mapped to our letter
values.

One trick on display in the example below is that our string is a representation of values over
a set of blanks, not a number, so we need leading zeros. For example, if we are mapping 0 to the 'r'
value, and we are going to try the route 'rrrrr', we need to represent it as '00000', not merely
'0'. To keep the leading zeroes, we can add the maximum obtainable number (in the case of a 5-digit,
base-4 number, 4^5, or 1024) to our number, convert it to a string, then remove the leading 1.

Finally, note that there is some functionality that we could have moved from the main function to
the helper function, createPath, for example, finding the location of the blanks. This would,
perhaps, have looked neater in the CorrectPath method; however, it would have resulted in
recomputation of the same item over and over again. So we are better off computing it a single
time, then passing it into the createPath() method as a parameter.
*/

const info = {
	name: 'Correct Path',
	number: 54,
	level: 'easy',
	methods: [],
	concepts: []
};
let helpers;

function CorrectPath(str) {
    // create an array to hold the positions of the question marks
	const blankArray = [];
	// put the position of the question marks into the array
	str.split('').forEach((val, ind) => {
		if (val === '?') {
			blankArray.push(ind);
		}
	});

	const num = blankArray.length;

	// we are going to try each possibility until we find one that works, with 4^num permutations
	const total = 4 ** num;

	for (let i = 0; i < total; i++) {
		// go through each permutation, creating a counter, then making the path and testing it
		const numString = (i + total).toString(4).slice(1);
		const currentPath = helpers.createPath(str, blankArray, numString);
		if (helpers.isPathGood(currentPath)) {
			return currentPath;
		}
	}
}

helpers = {
	isPathGood(str) {
		// create our empty array
		const testArray = [];
		for (let i = 0; i < 5; i++) {
			testArray.push([0, 0, 0, 0, 0]);
		}

		const len = str.length;
		let currentLoc = [0, 0];

		for (let i = 0; i < len; i++) {
			// mark our current square as visited
			testArray[currentLoc[0]][currentLoc[1]] = 1;
			// alter the position based on the next letter
			const newLoc = currentLoc.slice(0);
			switch (str[i]) {
			case 'u':
				newLoc[0] -= 1;
				break;
			case 'd':
				newLoc[0] += 1;
				break;
			case 'r':
				newLoc[1] += 1;
				break;
			case 'l':
				newLoc[1] -= 1;
				break;
			default:
				break;
			}
			// quit if we have gone off the board
			if (newLoc.includes(-1) || newLoc.includes(5)) {
				return false;
			}
			// quit if we are on a previously visited space
			if (testArray[newLoc[0]][newLoc[1]] === 1) {
				return false;
			}
			// return true if we are at the target square on our last go
			if (newLoc[0] === 4 && newLoc[1] === 4 && i === len - 1) {
				return true;
			}
			// update our location for the next loop;
			currentLoc = newLoc;
		}
		return false;
	},

	createPath(str, blanks, num) {
		const moveArray = ['r', 'l', 'u', 'd'];
		const strArr = str.split('');
		blanks.forEach((val, ind) => {
			strArr.splice(val, 1, moveArray[num[ind]]);
		});
		return strArr.join('');
	}
};

module.exports = {
	CorrectPath,
	helpers
};
