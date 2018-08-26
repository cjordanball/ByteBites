/*
Have the function QuestionsMarks(str) take the str string parameter, which will contain single
digit numbers, letters, and question marks, and check if there are exactly 3 question marks
between every pair of two numbers that add up to 10. If so, then your program should return the
string true, otherwise it should return the string false. If there aren't any two numbers that
add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there
are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of
the string.
*/

const info = {
	name: 'QuestionsMarks',
	number: 66,
	level: 'easy',
	methods: ['push()', 'parseInt()', 'replace()'],
	concepts: ['regular expressions']
};


function QuestionsMarks(str) {
	const numPlaces = [];
	// presumption of false, until flag is turned true
	let flag = false;

    // get an array of places in string holding integers
	for (let i = 0, len = str.length; i < len; i++) {
		if (/\d/.test(str[i])) {
			numPlaces.push(i);
		}
	}

	const numCount = numPlaces.length;

	for (let i = 0; i < numCount - 1; i++) {
		if (parseInt(str[numPlaces[i]], 10) + parseInt(str[numPlaces[i + 1]], 10) === 10) {
			flag = true;
			let strSeg = str.slice(numPlaces[i], numPlaces[i + 1]);

			strSeg = strSeg.replace(/[^?]/g, '');
			if (strSeg !== '???') {
				return false;
			}
		}
	}
	return flag;
}

module.exports = {
	QuestionsMarks,
	info
};
