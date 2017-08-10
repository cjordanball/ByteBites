/*
Create a function, DivisionStringified(num1,num2), to take two number parameters passed
to it, divide num1 by num2, and return the result as a string with properly formatted commas.
If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output
"1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345".
*/

/*
Note, I made this problem a step easier by rounding the result of the division operation, so
that there would be no decimal and trailing digits, which seemed to be what the challenge was
requesting. The more complete answer could be easily given by use of the % operator to
separate out the remainder, then adding it back in.
*/

const name = 'DivisionStringified';
const number = 20;
const level = 'easy';
const methods = ['trunc()', 'toString()', 'split()', 'splice()', 'join()'];
const concepts = ['for loop'];

const DivisionStringified = (num1, num2) => {
	let rawNumberString = Math.trunc(num1 / num2).toString();
	const len = rawNumberString.length;
	if (len > 3) {
		const rawNumberArray = rawNumberString.split('');
		for (let i = len - 3; i > 0; i -= 3) {
			rawNumberArray.splice(i, 0, ',');
		}
		rawNumberString = rawNumberArray.join('');
	}
	return rawNumberString;
};

module.exports = {
	DivisionStringified
}

