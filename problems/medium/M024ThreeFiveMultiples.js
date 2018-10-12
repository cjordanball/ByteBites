/*
Have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5
that are below num. For example: if num is 10, the multiples of 3 and 5 that are below 10
are 3, 5, 6, and 9, and adding them up you get 23, so your program should return 23. The
integer being passed will be between 1 and 100.
*/

const info = {
	name: 'ThreeFiveMultiples',
	number: 24,
	level: 'medium',
	methods: [],
	concepts: []
};

const ThreeFiveMultiples = (num) => {
	const multipleArray = [];
	for (let i = 0; i <= num - 1; i++) {
		if (i % 3 === 0 || (i % 5 === 0 && i % 3 !== 0)) {
			multipleArray.push(i);
		}
	}
	return multipleArray.reduce((hold, val) => hold + val);
};

module.exports = {
	ThreeFiveMultiples,
	info
};
