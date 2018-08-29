/*
Create a function ThirdGreatest(strArr) to take an array of strings, strArr, and return the third
largest word within it. So for example: if strArr is ["hello", "world", "before", "all"] your
output should be "world" because "before" is 6 letters long, and "hello" and "world" are both 5,
but the output should be world because it appeared as the last 5 letter word in the array. If
strArr was ["hello", "world", "after", "all"] the output should be after because the first three
words are all 5 letters long, so return the last one. The array will have at least three strings
and each string will only contain letters.
 */

/*
Below, we will do this problem twice, and the real point is to recognize when one way might be
better than the other. The first is definitely simpler, it relies on a few methods "built-in"
to JavaScript, and gives us our answer in a very few lines of code. However, it relies on
JavaScript's sort() method, which it going to take relatively longer than simply going through
the array.
*/

const info = {
	name: 'ThirdGreatest',
	number: 26,
	level: 'easy',
	methods: ['sort()', 'filter()', 'pop()', 'splice()', 'slice()', 'findIndex()'],
	concepts: []
};

let helpers;

const ThirdGreatest1 = (strArr) => {
	strArr.sort((val1, val2) => val2.length - val1.length);
	const len = strArr[2].length;
	return strArr
		.filter(val => val.length === len)
		.pop();
};

const ThirdGreatest2 = (strArr) => {
	const len = strArr.length;
	let orderArr = ['', '', ''];
	for (let i = 0; i < len; i++) {
		const place = helpers.getPlace(orderArr, strArr[i]);
		if (place > -1) {
			orderArr.splice(place, 0, strArr[i]);
			orderArr = orderArr.slice(0, 3);
		}
	}
	const wordLen = orderArr[2].length;
	const ind = orderArr.findIndex(item => item.length === wordLen);
	return orderArr[ind];
};

helpers = {
	getPlace(arr, item) {
		const itemLen = item.length;
		return arr.findIndex(val => itemLen >= val.length);
	}
};


module.exports = {
	ThirdGreatest1,
	ThirdGreatest2,
	info
};
