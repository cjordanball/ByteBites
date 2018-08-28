/*
Create a function NumberSearch(str) to take a string parameter str, search for all the numbers in
the string, add them together, then return that final number. For example: if str is "88Hello
3World!", the output should be 91. You will have to differentiate between single digit numbers
and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return
two different answers. Each string will contain at least one letter or symbol.
 */

/*
The solution below has two notable features. The first is the use of the match() method, which
allows us to use a regular expression to pluck out the numbers from our string very easily. The
second is the "chaining" of methods to get from the original input string parameter to the
final returned value. When one method is chained to another by a dot, the second method acts
upon the return value of the prior method. So, in the example below, we start with a string,
run the match() method on it, which returns an array of matches. Since our return value is
an array, we can then run the map() method, which returns an array containing the values
resulting from the map method, which are going to be integers, so we can then run the reduce
method on it, ultimately returning our summation value.
 */

const info = {
	name: 'NumberAddition',
	number: 25,
	level: 'easy',
	method: ['match()', 'map()', 'reduce()'],
	concept: ['chained functions', 'regular expressions']
};

const NumberAddition = str => str
	.match(/\d+/g)
	.map(val => parseInt(val, 10))
	.reduce((val1, val2) => val1 + val2, 0);

module.exports = {
	NumberAddition,
	info
};
