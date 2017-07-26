/*
Create a function ExOh(str) to take the str parameter being passed and return true if there
are an equal number of x's and o's; otherwise, return false. Only these two letters will be
entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then
the output should return false because there are 6 x's and 5 o's.
*/

/*
The following solution is presented as an example of the filter() method for arrays. To do
so we first break up the string into an array. The filter method then runs on the array, and
takes as a parameter a callback function. It returns an array of all the items in the original
array that make the callback function return a truthy value.
*/

/*
Note, however, that the more efficient method would be to make a single traverse of the array.
Altough it will not make an practical difference with our small tests, if we were going through
strings of millions of characters or larger, it would be better to have a single for loop,
keeping track of the difference in x and o counts.
*/

const name = 'ExOh';
const number = 14;
const level = 'easy';
const methods = ['split()', 'filter()'];
const concepts = ['chaining', 'array length', 'logical or'];

const ExOh = (str) => {
	const arr = str.split('');
	const xArr = arr.filter(val => val === 'x' || val === 'X');
	const yArr = arr.filter(val => val === 'o' || val === 'O');

	return xArr.length === yArr.length;
};

module.exports = {
	ExOh
};
