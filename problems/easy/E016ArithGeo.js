/*
Create a function ArithGeo(arr) that takes an array of numbers stored in arr and returns the
string "Arithmetic" if the sequence follows an arithmetic pattern or returns "Geometric" if it
follows a geometric pattern. If the sequence doesn't follow either pattern, return -1.  An
arithmetic sequence is one in which the difference between each pair of consecutive numbers
is the same, whereas a geometric sequence is one in which each pair of consecutive numbers is
the same multiple. For example, an arithmetic sequence could be: [2, 4, 6, 8] and a geometric
example could be: [2, 6, 18, 54]. Negative numbers may be entered in the array, an empty
array will not be entered, and no array will contain all the same elements.
*/

const info = {
	name: 'ArithGeo',
	number: 16,
	level: 'easy',
	methods: [''],
	concepts: ['for loop', 'logical OR']
};

let helpers;
const ArithGeo = arr => helpers.ArithTest(arr) || helpers.GeoTest(arr) || -1;

helpers = {
	ArithTest(arr) {
		const arithK = arr[1] - arr[0];
		const len = arr.length;
		for (let i = 2; i < len; i++) {
			if (arr[i] - arr[i - 1] !== arithK) {
				return false;
			}
		}
		return 'Arithmetic';
	},

	GeoTest(arr) {
		if (arr.includes(0)) {
			return false;
		}
		const geoK = arr[1] / arr[0];
		const len = arr.length;
		for (let i = 2; i < len; i++) {
			if (arr[i] / arr[i - 1] !== geoK) {
				return false;
			}
		}
		return 'Geometric';
	}
};

module.exports = {
	ArithGeo,
	helpers
};
