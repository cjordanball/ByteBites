/*
Have the function CorrectPath(str) read the str parameter being passed, which will represent the
movements made in a 5x5 grid of cells starting from the top left position. The characters in the
input string will be entirely composed of: r, l, u, d, ?. Each of the characters stand for the
direction to take within the grid, for example: r = right, l = left, u = up, d = down. Your goal
is to determine what characters the question marks should be in order for a path to be created
to go from the top left of the grid all the way to the bottom right without touching previously
travelled-on cells in the grid.

For example: if str is "r?d?drdd" then your program should output the final correct string that
will allow a path to be formed from the top left of a 5x5 grid to the bottom right. For this input,
your program should therefore return the string rrdrdrdd. There will only ever be one correct path
and there will always be at least one question mark within the input string.
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
the helper function, createPath, for example, finding the location of the blanks. This would, perhaps,
have looked neater in the CorrectPath method; however, it would have resulted in recomputation of the
same item over and over again. So we are better off computing it a single time, then passing it
into the createPath() method as a parameter.
*/

const name = 'CorrectPath';
const number = 54;
const level = 'easy';
const methods = ['split()', 'forEach()', 'toString()', 'slice()', 'push()', 'includes()', 'join()', 'splice()'];
const concepts = [];
let helpers = {};

const CorrectPath = (str) => {
	// create an array to hold the positions of the question marks
	const blankArray = [];
	str.split('').forEach((val, ind) => {
		if (val === '?') {
			blankArray.push(ind);
		}
	});
	const numBlanks = blankArray.length;
	const total = 4 ** numBlanks;

	for (let i = 0; i < total; i++) {
		const numString = (i + total).toString(4).slice(1);
		const currentPath = helpers.createPath(str, blankArray, numString);
		if (helpers.isPathGood(currentPath)) {
			return currentPath;
		}
	}
};

helpers = {
	// isPathGood takes a potential path and evaluates it, returning true if it successfully
	// gets from start to end, and returning false if it doesn't (for example, goes outside
	// the box, revisits locations, or doesn't get to the end)

	isPathGood(str) {
		// set up an array to represent where our path has been: 0 = not touched, 1 = touched
		const trackingArray = [];
		for (let i = 0; i < 5; i++) {
			trackingArray.push([0, 0, 0, 0, 0]);
		}

		const len = str.length;
		let currentLoc = [0, 0];

		for (let i = 0; i < len; i++) {
			trackingArray[currentLoc[0]][currentLoc[1]] = 1;
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
			if (newLoc.includes(-1) || newLoc.includes(5)) {
				return false;
			}
			if (trackingArray[newLoc[0]][newLoc[1]] === 1) {
				return false;
			}
			if (newLoc[0] === 4 && newLoc[1] === 4 && i === len - 1) {
				return true;
			}
			currentLoc = newLoc;
		}
		return false;
	},
	// createPath takes the given, incomplete path, the positions of the blanks, and the list
	// of values to insert, and creates a path for testing.
	createPath(str, blanks, num) {
		const moveArray = ['r', 'l', 'u', 'd'];
		const strArr = str.split('');
		blanks.forEach((val, ind) => {
			strArr.splice(val, 1, moveArray[num[ind]]);
		});
		return strArr.join('');
	}
}

module.exports = {
	CorrectPath,
	helpers
};