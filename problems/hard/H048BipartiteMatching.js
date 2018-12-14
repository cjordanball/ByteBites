/*
Have the function BipartiteMatching(strArr) read strArr which will be an array of hyphenated
letters representing paths from the first node to the second node. For example:
["a->d", "a->e", "b->f", "c->e"] means that there is a path from node a to d, a to e, b to f,
and so on. The graph will be bipartite meaning that it is possible to separate the nodes into
two disjoint sets such that every edge only connects a node from the lefthand side to a node
on the righthand side. Your program should determine the maximum cardinality matching of the
bipartite graph, which means finding the largest possible number of non-adjacent edges that
are matching. So for the example above, your program should return 3 because it is possible
to connect every single node on the left to a node on the right.

The input will only contain lowercase alphabetic characters with a -> between them signifying
an edge between them going from the left node to the right node. The input will contain at
least 1 edge connecting 2 nodes.
*/

const info = {
	name: 'BipartiteMatching',
	number: 48,
	level: 'hard',
	methods: [],
	concepts: []
};

const helpers = {};

const BipartiteMatching = (strArr) => {
	const matches = helpers.prepMatchObject(strArr);
	let keysArr = helpers.createKeysArray(matches);
	let counter = 0;
	let myCount = 0;

	while (keysArr.length && myCount < 20) {
		const hotKey = keysArr.pop();
		const hotVal = matches[hotKey][0];
		// break;
		if (hotVal) {
			counter++;
			const newKeysArr = Array.from(keysArr);
			keysArr.forEach((val, ind) => {
				if (matches[val].includes(hotVal)) {
					if (matches[val].length === 1) {
						delete matches[val];
						newKeysArr[ind] = null;
					} else {
						const hotIndex = matches[val].findIndex(item => item === hotVal);
						matches[val].splice(hotIndex, 1);
					}
				}
			});
			keysArr = newKeysArr.filter(val => val);
			keysArr.sort((val1, val2) => matches[val2].length - matches[val1].length);
		}
		myCount++;
	}
	return counter;
};

Object.assign(helpers, {
	// prepMatchObject takes the string array input and returns an object, with the keys
	// being the left group items and the values being arrays of the right group items.
	prepMatchObject(strArr) {
		const matches = {};
		strArr.forEach((val) => {
			const stringMatch = val.match(/^(\w).*(\w)$/);
			if (matches[stringMatch[1]]) {
				matches[stringMatch[1]].push(stringMatch[2]);
			} else {
				matches[stringMatch[1]] = [stringMatch[2]];
			}
		});
		return matches;
	},
	// createKeysArray takes the matches object and returns a sorted array of the matches
	// object keys, sorted based on the length of the value array, in descending order.
	createKeysArray(matches) {
		return Object.keys(matches)
			.sort((val1, val2) => matches[val2].length - matches[val1].length);
	}
});

module.exports = {
	BipartiteMatching,
	helpers,
	info
};
