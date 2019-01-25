/*
Have the function PolynomialExpansion(str) take str which will be a string representing a
polynomial containing only (+/-) integers, a letter, parenthesis, and the symbol "^", and
return it in expanded form. For example: if str is "(2x^2+4)(6x^3+3)", then the output
should be "12x^5+24x^3+6x^2+12". Both the input and output should contain no spaces. The
input will only contain one letter, such as "x", "y", "b", etc. There will only be four
parenthesis in the input and your output should contain no parenthesis. The output should
be returned with the highest exponential element first down to the lowest.

More generally, the form of str will be: ([+/-]{num}[{letter}[{^}[+/-]{num}]]
...[[+/-]{num}]...)(copy) where "[]" represents optional features, "{}" represents mandatory
features, "num" represents integers and "letter" represents letters such as "x".
*/

const info = {
	name: 'PolynomialExpansion',
	number: 5,
	level: 'hard',
	methods: [],
	concepts: []
};

const helpers = {};

const PolynomialExpansion = (str) => {
    // first, put the string into an array of polynomial values to be multiplied, clean
    // up, and standardize so values are consistent format (e.g., 5x^1, 4x^0);
	const letter = str.match(/[A-Za-z]/)[0];
	const modifiedStr = str.replace(/[a-zA-Z]/g, 'x')
        .replace(/-/g, '+-')
        .replace(/^\+-/g, '^-');
	let termArray = modifiedStr.split(')');
	termArray.pop();

	termArray = termArray.map((val) => {
		let newVal = val.replace(/\(/g, '')
            .replace(/\d+x(?!\^)/g, '$&^1')
            .replace(/\+-?\d+(?!x)/g, '$&x^0')
            .replace(/^\d+$/, '$&x^0')
			.split('+')
			.filter(val2 => val2);

		newVal = newVal.map((val2) => {
			const parts = val2.match(/^(-?\d+)x\^(-?\d+)$/);
			const newObj = {
				coefficient: parseInt(parts[1], 10),
				power: parseInt(parts[2], 10)
			};
			return newObj;
		});
		return newVal;
	});
    // second, iterate over the array using the reduce funtion to send them down to the
    // polyMultiply method
	const solution = termArray.reduce((val1, val2) => helpers.polyMultiply(val1, val2));

    // third, sort by power
	solution.sort((a, b) => b.power - a.power);


    // fourth, reduce common powers
	const newSolArray = [];
	for (let i = 0; i < solution.length - 1; i++) {
		if (solution[i].power !== solution[i + 1].power) {
			newSolArray.push(solution[i]);
		} else {
			solution[i + 1].coefficient = solution[i].coefficient + solution[i + 1].coefficient;
		}
	}
	newSolArray.push(solution.pop());

    // fifth, build the new string

	let newString = '';

	newSolArray.forEach((val) => {
		if (val.power !== 1 && val.power !== 0) {
			newString += `+${val.coefficient.toString()}${letter}^${val.power.toString()}`;
		} else if (val.power === 1) {
			newString += `+${val.coefficient.toString()}${letter}`;
		} else {
			newString += `+${val.coefficient.toString()}`;
		}
	});


	const formattedString = newString.replace(/\+-/g, '-')
        .replace(/^\+/, '')
        .replace(/([-+])1([a-zA-Z])/, '$1$2')
        .replace(/^1([a-zA-Z])/, '$1');

	return (formattedString);
};

Object.assign(helpers, {
	polyMultiply(arr1, arr2) {
		const resultsArray = [];
		arr1.forEach((val) => {
			arr2.forEach((val2) => {
				resultsArray.push(this.termMultiply(val, val2));
			});
		});
		return resultsArray;
	},
	// termMultiply takes two objects representing two terms of polynomial expressions
	// and multiplies them to return an object with coefficient and power values.
	termMultiply(obj1, obj2) {
		const returnObj = {};
		returnObj.coefficient = obj1.coefficient * obj2.coefficient;
		returnObj.power = obj1.power + obj2.power;
		return returnObj;
	}
});

module.exports = {
	PolynomialExpansion,
	helpers,
	info
};
