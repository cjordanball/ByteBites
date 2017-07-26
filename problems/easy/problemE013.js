/*
Create a function WordCount(str) to take the str string parameter being passed and return the number
of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be
separated by single spaces.
*/

/*
Not a lot here, folks.  But for those new to javascript, note the convenience afforded by the
split() method for strings and the join() method for arrays. Note also that length is a property
of the array, not a method.  This might not seem like a big deal when first learning, but keeping
these kind of details in mind at the beginning will help things make sense later on.
*/

const name = 'WordCount';
const number = 13;
const level = 'easy';
const methods = ['split()'];
const concepts = ['chaining', 'array length'];

const WordCount = (str) => {
	/*
	Note the chaining of the split() method with the array property. Chaining onto
	a method is the equivalent of taking whatever is returned by the method, knowing
	that it is an object, then getting the property (or performing the method) of
	that returned object.
	*/
	/*
	The following solution requires the conditional to catch the case where the argument
	is an empty string. As an additional challenge, think of a way that will not require
	the conditional (hint: don't count words, count spaces.)
	*/
	if (str.length === 0) {
		return 0;
	}
	return str.split(' ').length;
};

module.exports = {
	WordCount
};
