/*
Using the JavaScript language, have the function EvenPairs(str) take the str parameter being
passed and determine if a pair of adjacent even numbers exists anywhere in the string. If a
pair exists, return the string true, otherwise return false. For example: if str is
"f178svg3k19k46" then there are two even numbers at the end of the string, "46" so your
program should return the string true. Another example: if str is "7r5gg812" then the pair is
"812" (8 and 12) so your program should return the string true.
*/

/*
Just keep in mind that (as the latter example makes clear), we are talking about even numbers,
not even digits, so that any even digit connected to another even digit through numbers will
cause a return of true.
*/

const name = 'EvenPairs';
const number = 42;
const level = 'easy';
const methods = ['test()'];
const concepts = ['regular expressions'];

const EvenPairs = (str) => {
	const regEx = /[24680]\d*[24680]/;

	return regEx.test(str);
};

module.exports = {
	EvenPairs
};