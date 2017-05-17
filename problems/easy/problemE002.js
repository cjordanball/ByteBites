/*
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial
of it (ie. if num = 4, return (4 * 3 * 2 * 1)).  Note: the domain of the function will be positive
numbers only (i.e., ignore the case 0! = 1);
*/

/* Discussion:
Two solutions are presented below. The first is iterative, using a simple loop to multiply the given
integer by the one above it, and repeat until the loop reaches our input number. The second solution
is recursive, and might not be familiar to novice programers. A recursive function is a great
example of the definition of a mathematician as one who is lazy enough to, when confronted with a
difficult problem, avoid it by figuring out how to convert it into an easy problem.  Recursion
consists of two parts: i) establishing a 'base' or 'floor' case (in this problem, setting 1! as
equal to 1), and then ii) stating the problem as an easier problem, which itself can be stated as an
easier problem, etc., all the way back to the floor case.

In this problem, for example, the tedious process of determining 10! can be avoided by saying "oh,
it's just 10 times 9!". Then, of course, multiplying out 9! can be avoided by saying "oh, it's just
9 times 8!" And so it goes until we get down to "it's just 2 times 1!, which is 2 * 1".

Recursive solutions are fun, and can seem almost, sort of, magic. One must be careful, however, to
make certain that the base case is properly set up, or an endless loop may be set up, resulting in
an immediate stack overflow error.
*/


module.exports = {
	name: ['FirstFactorial'],
	number: 1,
	level: 'easy',
	methods: [],
	concepts: ['for-loop', '*= operator', 'let', 'recursion', 'if statement'],

	// Iterative solution.  Very straightforward loop.
	FirstFactorial(num) {
		let result = 1;
		for (let i = 1; i <= num; i++) {
			result *= i;
		}
		return result;
	},

	// One somewhat advanced note - because the recursion is occuring in the module.exports
	// object, it cannot be accessed with 'this'.
	FirstFactorialRec(num) {
		// set up the floor case of num = 1
		if (num === 1) {
			return 1;
		}
		// recast the problem for any other positive integer num
		return num * module.exports.FirstFactorialRec(num - 1);
	}
};
