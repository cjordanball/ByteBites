/*
Using the JavaScript language, have the function LongestIncreasingSequence(arr) take the array
of positive integers stored in arr and return the length of the longest increasing subsequence
(LIS). A LIS is a subset of the original list where the numbers are in sorted order, from
lowest to highest, and are in increasing order. The sequence does not need to be contiguous or
unique, and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6]
then a possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your program should
return 3 because that is the length of the longest increasing subsequence.
*/

/*
With these kind of problems, my advice it to first get out a pencil and paper, do one or two
examples, and then describe in code the steps we go through to solve the puzzle. In this case,
however, I was not successful in figuring out a solution that I could reduce to the steps of an
algorithm. Therefore, the following solution uses a more blunt approach, trying all the possible
combinations, testing each to see if it is an increasing sequence, then returning the length of
the longest such sequences.
 */

const name = 'LongestIncreasingSequence';
const number = 41;
const level = 'easy';
const methods = [];
const concepts = [];

const LongestIncreasingSequence = (arr) => {
	return arr;
};

module.exports = {
	LongestIncreasingSequence
};