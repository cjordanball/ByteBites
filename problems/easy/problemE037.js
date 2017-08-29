/*
Using the JavaScript language, have the function OtherProducts(arr) take an array of numbers stored
in arr and return a new list of the products of all the other numbers in the array for each element.
For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is
the product of all other elements, is [120, 60, 40, 30, 24]. The following calculations were
performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You should
generate this new array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24.
The array will contain at most 10 elements and at least 1 element of only positive integers.
*/


const name = 'OtherProducts';
const number = 37;
const level = 'easy';
const methods = ['forEach()', 'splice()', 'push()', 'reduce()', 'join()'];
const concepts = [];

const OtherProducts = (arr) => {
	const holdArray = [];
	if (arr.length === 1) {
		return '0';
	}

	arr.forEach((val, ind) => {
		const arrCopy = Array.from(arr);
		arrCopy.splice(ind, 1);
		holdArray.push(arrCopy.reduce((val1, val2) => val1 * val2, 1));
	})
	return holdArray.join('-');
};

module.exports = {
	OtherProducts
};