/*
Create a function SecondGreatLow(arr) to take an array of numbers passed to it as arr and return
the second smallest and second greatest numbers, respectively, separated by a space. For example:
if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and
will contain at least 2 numbers. It can get tricky if there's just two numbers!
 */

/*
Careful - notice that the problem requires removal of duplicates of the lowest and highest values.
Thus, what appeared to be a trivially simple problem (sort and print) was a little bit more
challenging, requiring the addition of the 'lonely()' function below.
*/

/*
Like all problems, there are many ways to do this problem. As a novice, figuring out any means of
generating a solution is an accomplishment; for the more advanced, it is important to try to
find a solution that is as efficient as possible. Imagine that our list of numbers will
not be 5 or 6 items long, but might be millions of items long. Suddenly, every loop becomes
a major event.

One simple means of solving this challenge is to use the the sort method to put the array entries
in order, then go from the ends and return the first numbers different from the end items (to
handle repeated max or min entries). However, sorting is a computationally expensive process
compared to simply traversing the array a single time.

Finding the max or min of a list requires that we go through the entire list at least once. We
simply cannot know if our number is the biggest unless we have checked every number (unless we
know something more about our list, such as that it has been sorted. In this problem, we will
go through the list a single time, keeping track of the information we need along the way, i.e.,
what is the largest number we have encountered, what is the smallest number we have encountered,
and what are the runner-ups in each category (but must be different from leading numbers).
*/

const name = 'SecondGreatLow';
const number = 19;
const level = 'easy';
const methods = [];
const concepts = ['template literals', 'for loop', 'objects', '||', '&&'];

const SecondGreatLow = (arr) => {
	const dataObject = {
		low: null,
		low2: null,
		high2: null,
		high: null
	}
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		const target = arr[i];
		if (!dataObject.low || target < dataObject.low) {
			dataObject.low2 = dataObject.low;
			dataObject.low = target;
		} else if ((!dataObject.low2 || target < dataObject.low2) && target !== dataObject.low) {
			dataObject.low2 = target;
		}
		if (!dataObject.high || target > dataObject.high) {
			dataObject.high2 = dataObject.high;
			dataObject.high = target;
		} else if ((!dataObject.high2 || target > dataObject.high2) && target !== dataObject.high) {
			dataObject.high2 = target;
		}
	}

	return `${dataObject.low2} ${dataObject.high2}`;
};

module.exports = {
	SecondGreatLow
}