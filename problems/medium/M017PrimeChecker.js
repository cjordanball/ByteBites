/*
Have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes
out to be a prime number, otherwise return 0. For example: if num is 910, the output should
be 1 because 910 can be arranged into 109 or 019, both of which are primes.
*/

const info = {
	name: 'PrimeChecker',
	number: 17,
	level: 'medium',
	methods: [],
	concepts: []
};
let helpers;

const PrimeChecker = (num) => {
	const workingArray = helpers.initialize(num);

	while (workingArray[0][1].length > 0) {
		helpers.permStep(workingArray);
	}
    // this tidies up the array elements.
	const cleanWorkingArray = workingArray.map(val => val[0]);

	for (let i = 0, WAlen = workingArray.length; i < WAlen; i++) {
		if (helpers.isPrime(cleanWorkingArray[i])) {
			return 1;
		}
	}
	return 0;
};

helpers = {
	// the initialize function converts the number into an array of n! 2-item arrays,
	// where n is the number of digits in num. The array has the form ['',['1', '2', '3']].
	initialize(num) {
		const arr = num.toString().split('');
		const resArr = [];
		for (let i = 0, len = this.factorial(arr.length); i < len; i++) {
			resArr.push(['', arr]);
		}
		return resArr;
	},
	factorial(num) {
		return num <= 1 ? 1 : num * this.factorial(num - 1);
	},
	// permStep is the function that moves the digits into their spots in an ordered manner,
	// resulting in an array of n! elements of the form ['123',[]].
	permStep(arr) {
		const arrCopy = Array.from(arr);
		let counter = 0;
		const len = arrCopy[0][1].length;
		const arrayLen = arrCopy.length;
		while (counter < arrayLen) {
			const targetArray = arrCopy[counter][1];
			for (let i = 0; i < len; i++) {
				for (let j = 0; j < this.factorial(len - 1); j++) {
					const copyArray = Array.from(targetArray);
					const holder = copyArray.splice(i, 1);
					arrCopy[counter][0] = arrCopy[counter][0].concat(holder[0]);
					arrCopy[counter][1] = copyArray;
					counter++;
				}
			}
		}
		return arrCopy;
	},
	// isPrime is a function to convert each array element into a string, then test
	// to see if it is a prime.
	isPrime(numString) {
		const stringNum = parseInt(numString, 10);
		const pivot = Math.ceil(Math.sqrt(stringNum));
		if (stringNum === 1) {
			return false;
		}
		if (stringNum === 2) {
			return true;
		}
		for (let i = 2; i <= pivot; i++) {
			if (stringNum % i === 0) {
				return false;
			}
		}
		return true;
	}
};

module.exports = {
	PrimeChecker,
	helpers,
	info
};
