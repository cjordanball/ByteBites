/*
Have the function OneDecremented(num) count how many times a digit appears that is exactly one
less than the previous digit. For example: if num is 5655984 then your program should return 2
because 5 appears directly after 6 and 8 appears directly after 9. The input will always
contain at least 1 digit.
*/

/*
This could be done just as easily with a for loop on the string passed in, particularly as then
string is not being mutated.  However, I wanted to show the use of the array iterator methods.
Also, the use of parseInt() may be superfluous, as JavaScript will coerce the variables into
a number type for the subtraction; however, I believe it is better to be explicit.
*/

const info = {
	name: 'OneDecremented',
	number: 73,
	level: 'easy',
	method: ['toString()', 'split()', 'forEach()', 'parseInt()'],
	concept: ['array Iterators']
};

const OneDecremented = (num) => {
	let counter = 0;
	const arr = num.toString().split('');
	arr.forEach((val, ind) => {
		if (parseInt(val, 10) - parseInt(arr[ind + 1], 10) === 1) {
			counter += 1;
		}
	});
	return counter;
};

module.exports = {
	OneDecremented,
	info
};
