/*
Create a function DashInsert(str) that will take a number parameter (num) and insert dashes ('-')
between any two consecutive odd numbers in num. For example: if str is 454793 the output should be
4547-9-3. Don't count zero as an odd number.
*/

/*
Below are two solutions to this problem. The first is the obvious solution to the problem, using
a while loop to iterate over the string and evaluate whether a dash should be inserted at each step.
Be careful if using a for loop, as the length of the string will increase as the dashes are
inserted. The second solution makes use of regular expressions to identify patters of odd digits
and the replace method to insert the required dashes. It is a great example of how regular
expressions can be uses to simplify a coding problem - assuming one puts in a little bit of
work up front to learn the required syntax.

For the first solution, here is one quick quiz: Why is the code work when we run join() on the
array, if most of the items in the array are numbers, not strings?
*/

const name = 'DashInsert';
const number = 23;
const level = 'easy';
const methods = ['toString()', 'split()', 'map()', 'parseInt()', 'splice()', 'join()', 'replace()'];
const concepts = ['array iterators', 'while loops', 'modulus operator', 'regular expressions'];

const DashInsert1 = (num) => {
	const numStr = num.toString();
	const strArray = numStr.split('');
	const intArray = strArray.map(val => parseInt(val, 10));
	let counter = 0;

	while (intArray[counter + 1]) {
		if (intArray[counter] % 2 && intArray[counter + 1] % 2) {
			intArray.splice(counter + 1, 0, '-');
		}
		counter += 1;
	}
	return intArray.join('');
};

const DashInsert2 = (num) => {
	const strNum = num.toString();
	return strNum.replace(/([13579])(?=[13579])/g, '$1-');
};

module.exports = {
	DashInsert1,
	DashInsert2
};

