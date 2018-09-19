/*
Have the function Division(num1,num2) take both parameters being passed and return the
Greatest Common Factor. That is, return the greatest number that evenly goes into both
numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so
the output should be 4. The range for both parameters will be from 1 to 10^3.
*/

const info = {
	name: 'Division',
	number: 5,
	level: 'medium',
	methods: [],
	concepts: []
};

const Division = (num1, num2) => {
	const bignum = Math.max(num1, num2);
	const smallnum = Math.min(num1, num2);
	let maxi;
	for (let i = 1; i <= smallnum; i++) {
		if (bignum % i === 0 && smallnum % i === 0) {
			maxi = i;
		}
	}
	return maxi;
};

module.exports = {
	Division,
	info
};
