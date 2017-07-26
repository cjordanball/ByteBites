/*
Create a function VowelCount(str) to take a string parameter passed to it and return the number
of vowels (i.e., 'a', 'e', 'i', 'o', 'u') the string contains (e.g., "All cows eat grass" would
return 5). Do not count y as a vowel for this challenge.
*/

/*
Another example of how use of regular expressions can make things much simpler.  Alternative
solutions not using them are conceptually easy, but much more tedious than the simple solution
presented below.
*/

/*
For those new to javascript programming, the most interesting feature, aside from the use of
regular expressions, is the condition following 'if'.  Of course, the way the conditional
statement works is that if the condition (i.e., what is in the parenthesis) is true, then the
statements in the following brackets are run. Actually, the condition need not be true, but only
"truthy."  "Truthy" is most easily defined as anything that does not evaluate to: false, null,
undefined, NaN, 0, or an empty string(''). Any string (other than ''), for example, will evaluate
to truthy and thus set the condition going.

What is particularly important here is that the match() method (assuming the parameter is a regular
expression with the 'g' flag), returns an array of all matches, but if there are no matches, it
returns null, not an empty array!
*/

const name = 'VowelCount';
const number = 12;
const level = 'easy';
const methods = ['match()'];
const concepts = ['regular expressions'];

const VowelCount = (str) => {
	const arr = str.match(/[aeiou]/gi);
	return arr ? arr.length : 0;
};

module.exports = {
	VowelCount
};
