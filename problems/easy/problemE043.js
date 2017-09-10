/*
Using the JavaScript language, have the function NextPalindrome(num) take the num parameter
being passed and return the next largest palindromic number. The input can be any positive
integer. For example: if num is 24, then your program should return 33 because that is the
next largest number that is a palindrome.
*/

/*
The method below, NextPalindrome(), returns the correct answer, but in a rather inefficient
manner; it simply goes from one number to the next, testing each until it stumbles across a
palindrome. With small numbers, this is all taken care of in an instant, and if one knew that
it would only be used on small numbers, it might not be worth the time necessary to create a
more efficient solution. But if we have examples with millions of digits, our method would take
unacceptably long. See if you can think of a better way to accomplish the task, then compare your
solution with that contained in NextPalindrome2().
 */

const name = 'NextPalindrome';
const number = 43;
const level = 'easy';
const methods = [];
const concepts = [];
let helpers;

const NextPalindrome = (num) => {
	let testNum = num + 1;
	while(true) {
		if (helpers.isPalindrome(testNum)) {
			return testNum;
		}
		testNum += 1;
	}
};

helpers = {
	// isPalindrome takes a number, and returns true if it is a palindrome, and false if it
	// is not.

	isPalindrome(num) {
		const str1 = String(num);
		const str2 = str1
			.split('')
			.reverse()
			.join('');
		return str1 === str2;
	},

	setNum(numString) {
		let numStringVal = numString.split('');
		const returnObj = {};
		returnObj.last = numStringVal.pop();
		if (numStringVal[0] >= returnObj.last) {
			returnObj.first = numStringVal.shift();
			returnObj.last = returnObj.first;
			returnObj.num = numStringVal.join('');
		} else {
			const newNumString = String(parseInt(numStringVal.join(''), 10) + 1);
			numStringVal = newNumString.split('');
			console.log('test0: ', newNumString);
			returnObj.first = numStringVal.shift();
			returnObj.last = returnObj.first;
			returnObj.num = newNumString.slice(1);
		}
		return returnObj;
	}
}

const NextPalindrome2 = (num) => {
	let numString = String(num);
	let preNums = [];
	let postNums = [];
	while (numString.length) {
		if (numString.length === 1) {
			return Number(preNums.join('') + numString + postNums.join(''));
		}
		const returnObj = helpers.setNum(numString);
		preNums.push(returnObj.first);
		postNums.unshift(returnObj.last);
		numString = returnObj.num;
	}
	return Number(preNums.join('') + postNums.join(''));
};

module.exports = {
	NextPalindrome,
	NextPalindrome2,
	helpers
};