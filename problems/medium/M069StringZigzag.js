/*
Have the function StringZigzag(strArr) read the array of strings stored in strArr, which will
contain two elements, the first some sort of string and the second element will be a number
ranging from 1 to 6. The number represents how many rows to print the string on so that it
forms a zig-zag pattern. For example: if strArr is ["coderbyte", "3"] then this word will
look like the following if you print it in a zig-zag pattern with 3 rows:

 	c				r				e
		o		e		b		t
 			d				y

Your program should return the word formed by combining the characters as you iterate through
each row, so for this example your program should return the string creoebtdy.
*/

const info = {
	name: 'StringZigzag',
	number: 69,
	level: 'medium',
	methods: [''],
	concepts: ['increment-first']
};

const StringZigzag = (strArr) => {
    // get the pieces off the strArr
	const wordArray = strArr[0].split('');
	const zigLength = strArr[1];
	const base = (zigLength * 2) - 2;

	// create an array of arrays to hold the letters
	let resArr = [];
	for (let i = 0; i < zigLength; i++) {
		resArr.push([]);
	}
	// start in the first subArray
	let subArr = 0;
    // go through the string, assigning letters to the proper
    // array, which is detetermined with the nextNum() method
	for (let i = 0, len = wordArray.length; i < len; i++) {
		resArr[subArr].push(wordArray[i]);
		if (base) {
			subArr = ((i % base) < base / 2) ? ++subArr : --subArr;
		}
	}

    // sew the subarray elements
	resArr = resArr.map(val => val.join(''));

	return resArr.join('');
};

module.exports = {
	StringZigzag,
	info
};
