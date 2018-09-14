/*
Have the function PrimeTime(num) take the num parameter being passed and return the string
true if the parameter is a prime number, otherwise return the string false. The range will
be between 1 and 2^16.
*/

const info = {
	name: 'PrimeTime',
	number: 1,
	level: 'medium',
	methods: [],
	concepts: []
};

const PrimeTime = (num) => {
	const hinge = Math.floor(Math.sqrt(num));
	let i = 2;

    // hardcode correct answers for 1 and 2
	if (num === 1) {
		return false;
	} else if (num === 2) {
		return true;
	}
    // run a loop to see if the number has any integral factors (aside from 1)
	while (i <= hinge) {
		if (num % i !== 0) {
			i++;
		} else {
			return false;
		}
	}
	return true;
};

module.exports = {
	PrimeTime,
	info
};
