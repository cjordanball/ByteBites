/*
Have the function ArithGeoII(arr) take the array of numbers stored in arr and return the
string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if
it follows a geometric pattern. If the sequence doesn't follow either pattern return -1.
An arithmetic sequence is one where the difference between each of the numbers is
consistent, where as in a geometric sequence, each term after the first is multiplied by
some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example:
[2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and
no array will contain all the same elements.
*/

const info = {
	name: 'ArithGeoII',
	number: 7,
	level: 'medium',
	methods: [],
	concepts: []
};

const ArithGeoII = (arr) => {
	const len = arr.length;
	// establish the relationship between two consecutive array elements
	const mathConstant = arr[1] - arr[0];
	const geoConstant = arr[1] / arr[0];
	let mathTest;

    // test the array to see if the difference between elements is the same between each
	// pair of consecutive elements.  If any pair fails, set flag to true and quit
	for (let i = 0; i < len - 1; i++) {
		if (arr[i + 1] - arr[i] !== mathConstant) {
			mathTest = true;
			break;
		}
	}
    // if the above loop went all the way through, then return answer "Arithmetic."  If not,
	// then loop through the array testing each pair.  If any pair fails, return -1 since it
	// has failed both tests.  If it makes it all the way, return 'Geometric.'
	if (!mathTest) {
		return 'Arithmetic';
	}
	for (let j = 0; j < len - 1; j++) {
		if (arr[j + 1] / arr[j] !== geoConstant) {
			return -1;
		}
	}
	return 'Geometric';
};

module.exports = {
	ArithGeoII,
	info
};
