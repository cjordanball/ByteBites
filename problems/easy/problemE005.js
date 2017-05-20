/*
Create a function SimpleAdding(num) to add up all the integers from 1 to num, inclusive. For
the test cases, the parameter num will be any number from 1 to 1000.
*/

/*
Note: for a discussion of iteration versus recursion, see the solution to Problem 2 (Factorial).
Below are three solutions to this problem: the first is iterative, the second is recursive,
and the third is clever (attributed to Gauss in his early childhood).
*/

module.exports = {
	name: ['SimpleAdding'],
	number: 5,
	level: 'easy',
	methods: [],
	concepts: ['for loop', '++ operator', 'recursion', 'ternary operator'],


	SimpleAddingIt(num) {
		let count = 0;
		for (let i = 1; i <= num; i++) {
			count += i;
		}
		return count;
	},

	// in some cases, use of the ternary operator can make things difficult to follow
	// and if statements might be clearer to read, but this is very simple case
	SimpleAddingRec(num) {
		return num === 1 ? num : num + module.exports.SimpleAddingRec(num - 1);
	},

	// a simple, but effective example how a bit of forethought can increase efficiency
	// remarkably. Instead of having to iterate over the length of the number, we can
	// perform a simple algebraic operation.

	// One Note: It never hurts to include extra parentheses. Depending on the order
	// of operations is daring and romantic, but it is always advisable to make things
	// clear with parens.

	SimpleAddingClever(num) {
		return (num * (num + 1)) / 2;
	}
};
