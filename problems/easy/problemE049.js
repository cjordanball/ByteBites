/*
Have the function ProductDigits(num) take the num parameter being passed which will be a positive
integer, and determine the least amount of digits you need to multiply to produce it. For example:
if num is 24 then you can multiply 8 by 3 which produces 24, so your program should return 2 because
there is a total of only 2 digits that are needed. Another example: if num is 90, you can multiply
10 * 9, so in this case your program should output 3 because you cannot reach 90 without using a
total of 3 digits in your multiplication.
*/

/*
This is the kind of problem that is pretty straightforward to solve by brute force, by trying all
the possible alternatives and seeing which one worked.  It might be interesting to think about the
problem and see if there is any more efficient way to approach it.  For example, it is obvious that
the answer can be no more than the number of digits in the submitted argument, plus one, because it
equals x = 1 * x;
*/

const info = {
	name: 'Product Digits',
	number: 49,
	level: 'easy',
	methods: ['Math.floor()', 'Math.sqrt()', 'Number.toString()'],
	concepts: ['for loop', 'factoring', 'remainder operator']
};

function ProductDigits(num) {
	const pivot = Math.floor(Math.sqrt(num));
	let ceilingValue = num.toString().length + 1;
	for (let i = 1; i <= pivot; i++) {
		if (num % i === 0) {
			const factor1 = i;
			const factor2 = num / factor1;
			const factor1String = factor1.toString();
			const factor2String = factor2.toString();
			const totalLength = factor1String.length + factor2String.length;
			if (totalLength < ceilingValue) {
				ceilingValue = totalLength;
			}
		}
	}
	return ceilingValue;
}

module.exports = {
	ProductDigits
};
