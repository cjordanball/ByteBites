/*
Have the function CoinDeterminer(num) take the input, which will be an integer ranging
from 1 to 250, and return an integer output that will specify the least number of coins,
that when added, equal the input integer. Coins are based on a system as follows: there are
coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the
output should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is
25, then the output should be 3 because you can achieve 25 with either 11, 9, and 5 coins
or with 9, 9, and 7 coins.
*/

/*
I have to admit, I am not sure if I am really proud of, or really embarrased by, the following
solution.  I am not happy with the large amount of hard-coding of the answers for the first
twenty=two numbers, but am really not aware of any way to sovle the problem that would
not be rather burdensome.
*/

const info = {
	name: 'CoinDeterminer',
	number: 26,
	level: 'medium',
	methods: [],
	concepts: []
};

const CoinDeterminer = (num) => {
	// this is an array of the solutions for the amounts from 0 through 22 cents (index is
	// the amount, value is the number of coins).
	const arr = [0, 1, 2, 3, 4, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2];
	// If the amount is less than 22, we can look up the answer directly from our array.
	if (num <= 22) {
		return arr[num];
	}
	let turns = Math.floor((num - 11) / 22) * 2;
	let remain = num - (turns * 11);
	if (remain > 22) {
		turns++;
		remain -= 11;
	}
	return turns + arr[remain];
};

module.exports = {
	CoinDeterminer,
	info
};
