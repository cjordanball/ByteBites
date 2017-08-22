/*
Using the JavaScript language, create a function OffLineMinimum(strArr) that takes an array of
integer strings ranging from ranging from 1...n and the letter "E" and returns the correct subset
based on the following rules. The input will be in the following format: ["I","I","E","I",...,
"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer
currently in the whole set. When finished, your program should return that new set with integers
separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your
program should return 4,1,5.
 */

/*
The problem description is not particularly clear, but is illuminated by the example given.
 */

const name = 'OffLineMinimum';
const number = 30;
const level = 'easy';
const methods = ['push()', 'min()', 'findIndex', 'Number()', 'splice()'];
const concepts = ['while loop', 'ternary expression'];

const OffLineMinimum = (arr) => {
	const resArr = [];
	const holdingArr = [];
	let placeCount = 0;
	while (placeCount < arr.length) {
		if (arr[placeCount] !== 'E') {
			holdingArr.push(arr[placeCount]);
		} else {
			const minNum = holdingArr.length ? Math.min(...holdingArr) : null;
			const minNumIndex = holdingArr.findIndex(val => Number(val) === minNum);
			holdingArr.splice(minNumIndex, 1);
			if (minNum) {
				resArr.push(minNum);
			}
		}
		placeCount += 1;
	}
	return resArr.join(',');
};

module.exports = {
	OffLineMinimum
};