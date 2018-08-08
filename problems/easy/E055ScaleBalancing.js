/*
Have the function ScaleBalancing(strArr) read strArr which will contain two elements,
the first being the two positive integer weights on a balance scale (left and right
sides) and the second element being a list of available weights as positive integers.
Your goal is to determine if you can balance the scale by using the least amount of
weights from the list, but using at most only 2 weights. For example: if strArr is
["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale with a weight of
5 on the left side and 9 on the right side. It is in fact possible to balance this scale
by adding a 6 to the left side from the list of weights and adding a 2 to the right side.
Both scales will now equal 11 and they are perfectly balanced. Your program should return
a comma separated string of the weights that were used from the list in ascending order,
so for this example your program should return the string 2,6.

There will only ever be one unique solution and the list of available weights will not be
empty. It is also possible to add two weights to only one side of the scale to balance it.
If it is not possible to balance the scale then your program should return the string not
possible.
*/

const info = {
	name: 'Scale Balancing',
	number: 55,
	level: 'easy',
	methods: [],
	concepts: []
};

function ScaleBalancing(strArr) {
	// convert the array to something more workable
	const newArr = strArr.map(val =>
		val.replace(/[[\]]/g, '').split(',').map(val2 =>
			parseInt(val2, 10)
		).sort((a, b) => a - b)
	);

	const diff = newArr[0][1] - newArr[0][0];
	const weights = newArr[1];

	// do the single-weight solution test
	if (weights.includes(diff)) {
		return diff.toString();
	}
    // do the two-weights, one-side test
	let weight1 = weights.find((val, ind) => {
		const newWeights = weights.slice(0);
		newWeights.splice(ind, 1);
		return newWeights.includes(diff - val);
	});
	if (weight1) {
		return `${weight1},${diff - weight1}`;
	}
    // do the twp-weights, different sides, test
	weight1 = weights.find(val =>
		weights.includes(diff + val)
	);
	if (weight1) {
		return `${weight1},${diff + weight1}`;
	}
    // if nothing is returned yet . . .
	return 'not possible';
}

module.exports = {
	ScaleBalancing
};
