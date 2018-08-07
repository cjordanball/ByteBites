/*
Have the function FoodDistribution(arr) read the array of numbers stored in arr which
will represent the hunger level of different people ranging from 0 to 5 (0 meaning not
hungry at all, 5 meaning very hungry). You will also have N sandwiches to give out which
will range from 1 to 20. The format of the array will be [N, h1, h2, h3, ...] where N
represents the number of sandwiches you have and the rest of the array will represent the
hunger levels of different people. Your goal is to minimize the hunger difference between
each pair of people in the array using the sandwiches you have available.

For example: if arr is [5, 3, 1, 2, 1], this means you have 5 sandwiches to give out. You
can distribute them in the following order to the people: 2, 0, 1, 0. Giving these sandwiches
to the people their hunger levels now become: [1, 1, 1, 1]. The difference between each pair
of people is now 0, the total is also 0, so your program should return 0. Note: You may not
have to give out all, or even any, of your sandwiches to produce a minimized difference.

Another example: if arr is [4, 5, 2, 3, 1, 0] then you can distribute the sandwiches in the
following order: [3, 0, 1, 0, 0] which makes all the hunger levels the following: [2, 2, 2,
1, 0]. The differences between each pair of people is now: 0, 0, 1, 1 and so your program
should return the final minimized difference of 2.
*/

/*
COMMENT: Compared to the other problems in the easy section, I think this problem is crazily
difficult, if we wish to catch all the edge cases.  Of course, it is possible that there is
an easy, elegant solution to this problem, and I just didn't devote sufficient time to find.
*/

function FoodDistribution(arr) {
	// get our helper functions
	const helpers = createHelpers();
	// get the number of meals as a separate item;
	let treats = arr.shift();
	// get the hunger numbers as a separate item;
	const myArray = arr.slice(0);
	const len = myArray.length;
	// get the hunger index of the least hungry individual;
	const arrMin = Math.min(...myArray);

	// check to see if we have enough treats to get everybody to the current best level
	// this is the easy case
	const testCount = myArray.reduce((val1, val2) => val1 + (val2 - arrMin), 0);
	if (testCount <= treats) {
		return 0;
	}
	// get an array of the values in order, paired with a count of how many of them in a row
	let valQuantArr = helpers.objectify(myArray);

	for (let i = 1; i < len; i++) {
		let arrayLen = valQuantArr.length;
		const resp = helpers.flattenMid(valQuantArr, treats, i);
		valQuantArr = resp[0];
		arrayLen = valQuantArr.length;
		treats = resp[1];
		while (valQuantArr[0].quant <= i && valQuantArr[0].value > valQuantArr[1].value &&
			treats >= i) {
			if (valQuantArr[0].quant <= treats) {
				valQuantArr[0].value -= 1;
				treats -= valQuantArr[0].quant;
				valQuantArr = helpers.objectify(valQuantArr);
				arrayLen = valQuantArr.length;
			}
		}

		while (valQuantArr[arrayLen - 1].quant <= i &&
			valQuantArr[arrayLen - 1].value > valQuantArr[arrayLen - 2].value && treats >= i) {
			if (valQuantArr[arrayLen - 1].quant <= treats) {
				valQuantArr[arrayLen - 1].value -= 1;
				treats -= valQuantArr[arrayLen - 1].quant;
				valQuantArr = helpers.objectify(valQuantArr);
				arrayLen = valQuantArr.length;
			}
		}
	}

	let count = 0;
	for (let i = 0, leng = valQuantArr.length; i < leng - 1; i++) {
		count += Math.abs(valQuantArr[i].value - valQuantArr[i + 1].value);
	}
	return count;
}

// //-----------------helpers-----------------------
function createHelpers() {
	return {
		// objectify turns an array of numbers into an array of objects, the first property of which
		// (value) is the number, and the second property of which (quant) is the number of
		// times the value appears in a row.  It also refreshes an array of objects
		objectify(array) {
			// if it is the array of numbers
			if (typeof array[0] === 'number') {
				const target = [];
				let counter = 0;
				for (let i = 0, len = array.length; i < len; i++) {
					counter += 1;
					if (array[i] !== array[i + 1]) {
						target.push({
							value: array[i],
							quant: counter
						});
						counter = 0;
					}
				}
				return target;
			}
			// if it is already an array of objects, turn it into an array of numbers, and
			// then run it back through the objectify method
			const targetArray = [];
			array.forEach((val) => {
				while (val.quant) {
					targetArray.push(val.value);
					val.quant -= 1;
				}
			});
			return this.objectify(targetArray);
		},
		flattenMid(arr, treats, q) {
			let index = 0;
			while (treats > 0 && index > -1) {
				// looking for a place where we have an interior row of equal values with lower values
				// on each side
				index = arr.findIndex((val, ind) =>
					val.quant <= q && ind >= 1 && ind < arr.length - 1 &&
					val.value > arr[ind - 1].value && val.value > arr[ind + 1].value
				);
				if (index >= 0) {
					arr[index].value -= 1;
					treats -= q;
				}
			}
			return [this.objectify(arr), treats];
		}
	};
}

module.exports = {
	FoodDistribution
};
