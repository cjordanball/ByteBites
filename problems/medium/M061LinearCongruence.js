/*
Have the function LinearCongruence(str) read the str parameter being passed which will be a
linear congruence equation in the form: "ax = b (mod m)" Your goal is to solve for x and return
the number of solutions to x. For example: if str is "32x = 8 (mod 4)" then your program should
return 4 because the answers to this equation can be either 0, 1, 2, or 3.
*/

const info = {
	name: 'LinearCongruence',
	number: 61,
	level: 'medium',
	methods: [''],
	concepts: ['']
};

const LinearCongruence = (str) => {
	const components = str.match(/^(\d+)x\D+(\d+)\D+(\d+)\)$/);
	const multiplier = components[1];
	const factor = components[2];
	const mod = components[3];
	let counter = 0;

	for (let i = 0; i < mod; i++) {
		if ((((multiplier * i) - factor) % mod) === 0) {
			counter++;
		}
	}
	return counter;
};

module.exports = {
	LinearCongruence,
	info
};
