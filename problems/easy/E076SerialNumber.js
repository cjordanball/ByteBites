/*
Have the function SerialNumber(str) take the str parameter being passed and determine if
it is a valid serial number with the following constraints:

1. It needs to contain three sets each with three digits (1 through 9) separated by a period.
2. The first set of digits must add up to an even number.
3. The second set of digits must add up to an odd number.
4. The last digit in each set must be larger than the two previous digits in the same set.

If all the above constraints are met within the string, the your program should return the
string true, otherwise your program should return the string false. For example: if str is
"224.315.218" then your program should return "true".
*/

const info = {
	name: 'SerialNumber',
	number: 76,
	level: 'easy',
	methods: [],
	concepts: []
};

const SerialNumber = (str) => {
	// check the format of the string
	const target = /^\d{3}\.\d{3}\.\d{3}$/;
	if (!target.test(str)) {
		return 'false';
	}
	// transform the string into three arrays of three digits each
	const arr = str
		.split(/\./)
		.map(val => val.split('')
		.map(val2 => parseInt(val2, 10)));

	// check condition one
	if ((arr[0][0] + arr[0][1] + arr[0][2]) % 2) {
		return 'false';
	}

	// check condition two
	if (!((arr[1][0] + arr[1][1] + arr[1][2]) % 2)) {
		return 'false';
	}

	// check condition three
	for (let i = 0, len = arr.length; i < len; i++) {
		if (Math.max(...arr[i]) !== arr[i][2]) {
			return 'false';
		}
	}
	// if all conditions pass without a false, then return true
	return 'true';
};

module.exports = {
	SerialNumber,
	info
};
