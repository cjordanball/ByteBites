/*
Using the JavaScript language, have the function FizzBuzz(num) take the num parameter
being passed and return all the numbers from 1 to num separated by spaces, but replace
every number that is divisible by 3 with the word "Fizz", replace every number that is
divisible by 5 with the word "Buzz", and every number that is divisible by both 3 and 5
with the word "FizzBuzz". For example: if num is 16, then your program should return the
string "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16". The input will be
within the range 1 - 50.
*/

const info = {
	name: 'FizzBuzz',
	number: 85,
	level: 'easy',
	methods: ['push()', 'join()'],
	concepts: ['for loops', 'if / else if', 'remainder operator']
};

function FizzBuzz(num) {
	const returnArray = [];
	for (let i = 1; i <= num; i++) {
		if (!(i % 15)) {
			returnArray.push('FizzBuzz');
		} else if (!(i % 5)) {
			returnArray.push('Buzz');
		} else if (!(i % 3)) {
			returnArray.push('Fizz');
		} else {
			returnArray.push(i);
		}
	}
	return returnArray.join(' ');
}

module.exports = {
	FizzBuzz
};
