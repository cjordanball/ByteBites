/*
Have the function FibonacciChecker(num) return the string yes if the number given is part
of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to
find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes
1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.
*/

const info = {
	name: 'FibonacciChecker',
	number: 27,
	level: 'medium',
	methods: [],
	concepts: []
};

const FibonacciChecker = (num) => {
	let seed1 = 0;
	let seed2 = 1;
	let counter = 0;
	if (num === seed1 || num === seed2) {
		return 'yes';
	}
	while (counter < num) {
		counter = seed1 + seed2;
		if (counter === num) {
			return 'yes';
		}
		seed1 = seed2;
		seed2 = counter;
	}
	return 'no';
};

module.exports = {
	FibonacciChecker,
	info
};
