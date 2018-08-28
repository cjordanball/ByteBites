/*
Have the function SimpleEvens(num) check whether every single number in the passed in parameter
is even. If so, return the string true, otherwise return the string false. For example: if num is
4602225 your program should return the string false because 5 is not an even number.
*/

const info = {
	name: 'SimpleEvens',
	number: 69,
	level: 'easy',
	methods: ['toString()', 'search()'],
	concepts: ['regular expressions', 'ternary operator']
};

const SimpleEvens = num => num.toString(10).search(/[13579]/) === -1 ? 'true' : 'false';

module.exports = {
	SimpleEvens,
	info
};
