/*
Using the JavaScript language, have the function Primes(num) take the num parameter being
passed and return the string true if the parameter is a prime number, otherwise return the
string false. The range will be between 1 and 2^16.
*/

const info = {
	name: ['Primes'],
	number: 75,
	level: 'medium',
	methods: ['Math.floor()', 'Math.sqrt()'],
	concepts: ['for-loop', 'if-statement', 'switch statement', 'remainder operator']
};

const Primes = (num) => {
	switch (num) {
		case 1:
			return 'false';
		case 2:
			return 'true';
		default: {
			const pivot = Math.floor(Math.sqrt(num));
			for (let i = 2; i <= pivot; i++) {
				if (!(num % i)) {
					return 'false';
				}
			}
			return 'true';
		}
	}
};

module.exports = {
	Primes,
	info
};
