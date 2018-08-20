/*
Create a function, ArrayAdditionI(arr) to take an array of numbers and return true if any
combination of numbers in the array can be added up to equal the largest number in the array
(excepting the trivial instance of the single number equalling itself), otherwise return false.
For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 +
10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain
negative numbers.
 */

/*
First, I must comment that I did not consider this problem to be an easy one at all; it is probably
mislabeled to be in the easy section. That said, there is a fairly simple way to solve this problem
quickly, if one is willing to use a brute force solution that would not scale up very well arrays
longer than 20 elements or so. The solution below is such a brute force solution, based on the fact
that once the largest number in the array is popped off, there are 2^n possible combinations of the
remaining n numbers in the array (as each number in the array can either be in or out of the
addition). I visualized this as a binary number of n digits in length, with each digit standing
for inclusion of that place's array item, or exclusion. Then I just started testing every number
until one is found that adds up (return true), or all possibilities are exhausted (return false).
So, for example, if the array is [1, 2, 3, 4, 5], the number represented by '10110' would be 8
(i.e., 1 + 3 + 4).
*/

const info = {
	name: 'ArrayAdditionI',
	number: 17,
	level: 'easy',
	methods: ['sort()', 'from()', 'pop()', 'slice()', 'toString()', 'split()', 'forEach()'],
	concepts: ['exponential operator', 'while loops', 'permutations']
};


const ArrayAdditionI = (arr) => {
	const arrayCopy = Array.from(arr);
	const target = arrayCopy.sort((a, b) => a - b).pop();
	const permutationCount = 2 ** arrayCopy.length;
	let counter = 1;

	while (counter < permutationCount) {
		// the line below might be a little tricky.  What we want to do, for each number
		// from 1 to 2^n, is have a string representation of whether each of n numbers is
		// in or out. To do this, we need leading zeroes, for example, just including the
		// last of five numbers would be represented by '00001'; to get those, add an
		// initial 1 to the base-2 number via the initial addition, then take the initial
		// on away once the number has become a string.

		const permutationArray = (counter + permutationCount).toString(2).slice(1).split('');
		let sum = 0;

		permutationArray.forEach((val, ind) => {
			sum += val * arrayCopy[ind];
		});

		if (sum === target) {
			return true;
		}
		counter += 1;
	}

	return false;
};

module.exports = {
	ArrayAdditionI
};
