/*
Have the function FormattedNumber(strArr) take the strArr parameter being passed, which will
only contain a single element, and return the string true if it is a valid number that contains
only digits with properly placed decimals and commas, otherwise return the string false. For
example: if strArr is ["1,093,222.04"] then your program should return the string true, but if
the input were ["1,093,22.04"] then your program should return the string false. The input
may contain characters other than digits.
*/

const info = {
	name: 'FormattedNumber',
	number: 62,
	level: 'medium',
	methods: [''],
	concepts: ['regular expressions']
};

const FormattedNumber = (strArr) => {
	const pattern = /^(?:\d{0,3})(?:,\d{3})*(?:\.\d*)?$/;
	return pattern.test(strArr[0]);
};

module.exports = {
	FormattedNumber,
	info
};


// function FormattedNumber(strArr){
// 	let left, right;
// 	let num = strArr[0];
// 	//make sure there are only digits, periods, and commas
// 	if (!/^[\d\.,]+$/.test(num)) {
// 		return 'false';
// 	}
// 	//split into two pieces for evaluation
// 	if (num.includes('.')) {
// 		//throw out if more than one decimal
// 		if (num.match(/\./g).length > 1) {
// 			return 'false';
// 		}
// 		let pieces = num.split(".");
// 		left = pieces[0];
// 		right = pieces[1];
// 		//throw out if there is a nondigit right of the decimal
// 		if (/\D/.test(right)) {
// 			return 'false';
// 		}
// 	} else {
// 		left = num;
// 	}
// 	//reverse the left of the array and check the comma placement
// 	left = left.split('').reverse();
// 	for (let i = 0, len = left.length; i < len; i++) {
// 		if (i % 4 === 3 && left[i] !== ',') {
// 			return 'false';
// 		} else if (i % 4 !== 3 && !/\d/.test(left[i])) {
// 			return 'false';
// 		}
// 	}
//
// 	return 'true';
// }
