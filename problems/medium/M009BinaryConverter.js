/*
Have the function BinaryConverter(str) return the decimal form of the binary value. For
example: if 101 is passed return 5, or if 1000 is passed return 8.
*/

/*
This is really a one-line-of-code problem, because we can just run parseInt on the
given parameter, with 2 as the second parameter, the radix, or the base in which the
number string is written.  However, that sort of feels like cheating, or at least being
rather overly formal, so the solution below solves the problem without relying on the
specific parseInt() method.
*/

/*
This problem is a great example of the need for unit testing.  Although conceptually very
simple, the backwards counting leaves room for simple off-by-one errors. There was an
error in line 35 that testing picked up, I had str.charAt(i);
*/

const info = {
	name: 'BinaryConverter',
	number: 9,
	level: 'medium',
	methods: ['parseInt()', 'charAt()'],
	concepts: ['parseInt()', 'radix', 'binary numbers', 'for loop']
};

const BinaryConverter = (str) => {
	let counter = 0;
	const numleng = str.length;

	for (let i = numleng; i > 0; i--) {
		const power = numleng - i;
		// note that we do use parseInt() here, but only to do an explicit casting
		const digit = parseInt(str.charAt(i - 1), 10);
		const addit = digit * (2 ** power);
		counter += addit;
	}
	return counter;
};

module.exports = {
	BinaryConverter,
	info
};
