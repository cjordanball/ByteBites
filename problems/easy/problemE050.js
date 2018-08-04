/*
Have the function PalindromeCreator(str) take the str parameter being passed and determine if it is
possible to create a palindromic string of at least 3 characters by removing 1 or 2 characters. For
example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a
palindrome. For this example your program should return the two characters that were removed with no
delimiter and in the order they appear in the string, so jc. If 1 or 2 characters cannot be removed
to produce a palindrome, then return the string not possible. If the input string is already a
palindrome, your program should return the string palindrome.

The input will only contain lowercase alphabetic characters. Your program should always attempt to
create the longest palindromic substring by removing 1 or 2 characters (see second sample test case
as an example). The 2 characters you remove do not have to be adjacent in the string.
*/

/*
The first step in this problem is to create a helper function that will check if a given string is
a palindrome and return true or false.  Then, we can divide the work into two or three sections.
The first section is self-evident, we test the given argument to see if it is a palindrome.  If so,
we are done.  Next, we crawl over the string removing letters and checking.  We could do this in
one crawl, but I think it is more efficient to first go through the single character removal and
check, then go through the two character removal.
*/

function PalindromeCreator(str) {
	const helpers = createHelpers();
	const len = str.length;
	// test to see if it is a Palindrome already
	if (helpers.isPalindrome(str)) {
		return 'palindrome';
	}
	// test to see if a one letter removal can create a palindrome
	for (let i = 0; i < len; i++) {
		const testArray = str.split('');
		const res = testArray.splice(i, 1);
		const newString = testArray.join('');
		if (helpers.isPalindrome(newString)) {
			return res.join('');
		}
	}
	// test to see if any two letter removals can create a palindrome
	for (let i = 0; i < len; i++) {
		const res = [];
		for (let j = i; j < len - 1; j++) {
			const testArray = str.split('');
			res[0] = testArray.splice(i, 1);
			res[1] = testArray.splice(j, 1);
			const newString = testArray.join('');
			if (helpers.isPalindrome(newString)) {
				return res.join('');
			}
		}
	}
	return 'not possible';
}

// ----------------helpers---------------------------

function createHelpers() {
	return {
		isPalindrome(str) {
			const newStr = str.split('').reverse().join('');
			if (newStr === str) {
				return true;
			}
			return false;
		}
	};
}

module.exports = {
	PalindromeCreator
};
