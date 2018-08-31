/*
Create a function AdditivePersistence(num) to take the number parameter (num) being passed
to it (and which will always be a positive integer) and return its additive persistence,
which is the number of times you must add the digits in num until you reach a single digit.
For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and
1 + 8 = 9 and you stop at 9.
*/

/*
Not a whole lot to see in this problem, from a logic perspective. However, one might wish
to take note of the structure, which separates the "do something and count how many times
you do it" from the actual "something" that is done.
*/

const info = {
	name: 'AdditivePersistence',
	number: 28,
	level: 'easy',
	methods: ['toString()', 'split()', 'map()', 'reduce()'],
	concepts: ['while loop']
};

let helpers;

const AdditivePersistence = (num) => {
	let ourNum = num;
	let counter = 0;
	while (ourNum > 9) {
		ourNum = helpers.arrayPrep(ourNum);
		counter += 1;
	}
	return counter;
};

helpers = {
	arrayPrep(num) {
		const reducedNum = num
			.toString(10)
			.split('')
			.map(val => parseInt(val, 10))
			.reduce((num1, num2) => num1 + num2, 0);
		return reducedNum;
	}
};

module.exports = {
	AdditivePersistence,
	helpers,
	info
};
