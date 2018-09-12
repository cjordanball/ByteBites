/*
Using the JavaScript language, have the function StringCalculate(str) take the str parameter
being passed and evaluate the mathematical expression within in. The double asterisks (**)
represent exponentiation.

For example, if str were "(2+(3-1)*3)**3" the output should be 512. Another example: if str
is "(2-0)(6/2)" the output should be 6. There can be parenthesis within the string so you
must evaluate it properly according to the rules of arithmetic. The string will contain the
operators: +, -, /, *, (, ), and **. If you have a string like this: #/#*# or #+#(#)/#, then
evaluate from left to right. So divide then multiply, and for the second one multiply, divide,
then add. The evaluations will be such that there will not be any decimal operations, so you
do not need to account for rounding.
*/

/*
NOTE: This answer would be really bad to see in real code, It uses the eval() method, which is
not considered a good practice, and it runs the eval directly on user input (assuming that is
where the argument is coming from). There are several other problems in this collection that
use other approaches to "string math"; I just wanted to have one example here that shows
eval() at work.
*/

const info = {
	name: ['StringCalculate'],
	number: 76,
	level: 'medium',
	methods: ['eval()', 'replace()'],
	concepts: ['use of eval()', 'replacing captures']
};

function StringCalculate(str) {
	const workingString = str.replace(/([1-9)])(\()/g, '$1*$2');

	return eval(workingString);
}

module.exports = {
	StringCalculate,
	info
};
