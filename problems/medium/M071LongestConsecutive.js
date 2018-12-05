/*
Have the function LongestConsecutive(arr) take the array of positive integers stored in arr
and return the length of the longest consecutive subsequence (LCS). An LCS is a subset of
the original list where the numbers are in sorted order, from lowest to highest, and are
in a consecutive, increasing order. The sequence does not need to be contiguous and there
can be several different subsequences. For example: if arr is [4, 3, 8, 1, 2, 6, 100, 9]
then a few consecutive sequences are [1, 2, 3, 4], and [8, 9]. For this input, your program
should return 4 because that is the length of the longest consecutive subsequence.
*/

const info = {
	name: 'LongestConsecutive',
	number: 71,
	level: 'medium',
	methods: [],
	concepts: []
};

const LongestConsecutive = (arr) => {
	const arrCopy = Array.from(new Set(arr));
	arrCopy.sort((a, b) => a - b);
	let counter = 1;
	let worldRecord = 0;

	for (let i = 0, len = arrCopy.length; i < len; i++) {
		if (arrCopy[i + 1] - arrCopy[i] === 1) {
			counter++;
		} else if (counter > worldRecord) {
			worldRecord = counter;
			counter = 1;
		}
	}
	return worldRecord;
};

module.exports = {
	LongestConsecutive,
	info
};
