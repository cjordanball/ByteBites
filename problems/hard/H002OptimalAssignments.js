/*
Have the function OptimalAssignments(strArr) read strArr which will represent an NxN matrix and it
will be in the following format: ["(n,n,n...)","(...)",...] where the n's represent integers. This
matrix represents a machine at row i performing task at column j. The cost for this is
matrix[i][j]. Your program should determine what machine should perform what task so as to minimize
the whole cost and it should return the pairings of machines to tasks in the following format:
(i-j)(...)... Only one machine can perform one task. For example: if strArr is
["(5,4,2)","(12,4,3)","(3,4,13)"] then your program should return (1-3)(2-2)(3-1) because assigning
the machines to these tasks gives the least cost. The matrix will range from 2x2 to 6x6, there will
be no negative costs in the matrix, and there will always be a unique answer.
*/

const info = {
	name: 'OptimalAssignments',
	number: 2,
	level: 'hard',
	methods: [],
	concepts: []
};

const helpers = {};

const OptimalAssignments = (strArr) => {
	helpers.len = strArr.length;

	// 1. get list of permutations
	const cmdLines = helpers.orderStrings(helpers.len);

	// 2. convert the array of strings to an array of number arrays.
	helpers.workArray = helpers.convertArray(strArr);

	// 3. attach to each item in the cmdLine permutation a score
	const cmdLinesScores = cmdLines.map(val => [val, helpers.scoreMaker(val)]);

	// 4. sort the scores from greatest to least, and return the most efficient
	// in string form
	cmdLinesScores.sort((a, b) => (b[1] - a[1]));
	const rawAnswer = cmdLinesScores.pop()[0];

	// 5. convert the answer into the required format, and return
	return (
		helpers.ansConvert(rawAnswer)
	);
};

Object.assign(helpers, {
	// orderStrings takes an integer, n, representing n items, and returns an array of all
	// the possible ways those items could be ordered.
	orderStrings(num) {
		const numArr = [];
		for (let i = 0; i < num; i++) {
			numArr[i] = i + 1;
		}
		return this.allPerms(numArr).map(val => val.join(''));
	},
	allPerms(inputArray) {
		const data = inputArray;
		const resultArray = [];
		const len = data.length;

		if (len === 0) {
			return [[]];
		}
		const first = data.shift();
		const words = this.allPerms(data);
		words.forEach((word) => {
			for (let i = 0; i < len; ++i) {
				const tmp = word.slice();
				tmp.splice(i, 0, first);
				resultArray.push(tmp);
			}
		});
		return resultArray;
	},
	convertArray(arr) {
		return arr.map((val) => {
			const pattern = /(d+)/g;
			const holdArr = [];
			do {
				const test = pattern.exec(val);
				if (test) {
					holdArr.push(parseInt(test[1], 10));
				}
			}
			while (pattern.lastIndex > 0);
			return holdArr;
		});
	},
	scoreMaker(orderString) {
		const orderArr = orderString.split('');
		const holdArr = helpers.workArray.map((val, ind) => val[orderArr[ind] - 1]);
		return holdArr.reduce((first, last) => first + last);
	},
	ansConvert(str) {
		let res = '';
		for (let i = 0; i < this.len; i++) {
			res = `${res}(${(i + 1).toString(10)}-${str[i].toString(10)})`;
		}
		return res;
	}
});

module.exports = {
	OptimalAssignments,
	helpers,
	info
};
