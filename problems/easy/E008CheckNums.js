/*
Have the function CheckNums(num1,num2) take both parameters being passed and return true if
num2 is greater than num1, otherwise return false. If the parameter values are equal to each
other then return the string "-1".
*/

/*
The following solution is a good example of the ternary operator, which begins with a statement
followed by a question mark, which is followed by two alternate values, separated by a colon.
If the initial statement evaluates to truthy, then the first value is returned; if falsey,
then the second value is returned.  Thus, in the following case, if the two numbers are equal
it returns the value "-1", and if they are not equal, it evaluates the final expression and
returns what it evaluates to, which will be true or false.
*/

info = {
	name: 'CheckNums',
	number: 8,
	level: 'easy',
	methods: [],
	concepts: ['ternary operator']
};

const CheckNums = (num1, num2) => (num1 === num2 ? '-1' : num2 > num1);

module.exports = {
	CheckNums
};
