/*
Have the function GroupTotals(strArr) read in the strArr parameter containing key:value pairs
where the key is a string and the value is an integer. Your program should return a string
with new key:value pairs separated by a comma such that each key appears only once with the
total values summed up.

For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program should return the
string A:6,B:2.

Your final output string should return the keys in alphabetical order. Exclude keys that have
a value of 0 after being summed up.
*/

const info = {
	name: 'GroupTotals',
	number: 83,
	level: 'easy',
	methods: [],
	concepts: []
};

const GroupTotals = (strArr) => {
	const resObject = {};
	const parsingRegExp = /(\w+):(-?\d+)/;

	strArr.forEach((val) => {
		const matches = val.match(parsingRegExp);
		const key = matches[1];
		const numVal = Number(matches[2]);

		if (resObject[key] || resObject[key] === 0) {
			resObject[key] += numVal;
		} else {
			resObject[key] = numVal;
		}
	});

	return Object.keys(resObject)
		.sort()
		.map(val => resObject[val] ? `${val}:${resObject[val]}` : '')
		.filter(val => val)
		.join(',');
};

module.exports = {
	GroupTotals,
	info
};
