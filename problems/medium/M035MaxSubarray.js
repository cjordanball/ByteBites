/*
Have the function MaxSubarray(arr) take the array of numbers stored in arr and determine
the largest sum that can be formed by any contiguous subarray in the array. For example, if
arr is [-2, 5, -1, 7, -3] then your program should return 11 because the sum is formed by
the subarray [5, -1, 7]. Adding any element before or after this subarray would make the sum
smaller.
*/

const info = {
	name: 'StockPicker',
	number: 35,
	level: 'medium',
	methods: [],
	concepts: []
};

const MaxSubarray = (arr) => {
	// we use this number a few times
	let count = Math.max(...arr);
	const indexArray = [];

	// take care of case with no positive numbers
	if (count <= 0) {
		return count;
	}

    // get a list (indexArray) of the indexes of all positive entries
	arr.forEach((val, ind) => {
		if (val > 0) {
			indexArray.push(ind);
		}
	});
	// we know that a maximum must have a positive number at each end of the subarray (if
	// there are multiple positive numbers. Of course, the subArray could have length of one.
	// So just compare all possible subarrays.
	const arrayLength = indexArray.length;
	for (let i = 0; i < arrayLength; i++) {
		for (let j = i + 1; j < arrayLength; j++) {
			const subArraySum = arr
				.slice(indexArray[i], indexArray[j] + 1)
                .reduce((val1, val2) => val1 + val2, 0);
            // update count if the subArraySum is larger
			count = Math.max(count, subArraySum);
		}
	}
	return count;
};

module.exports = {
	MaxSubarray,
	info
};
