/*
Have the function DashInsertII(str) insert dashes ('-') between each two odd numbers
and insert asterisks ('*') between each two even numbers in str. For example: if str
is 4546793 the output should be 454*67-9-3. Don't count zero as an odd or even number.
*/

const info = {
	name: 'PrimeChecker',
	number: 17,
	level: 'medium',
	methods: [],
	concepts: []
};

const DashInsertII = (num) => {
	const resString = num.toString(10);
	return resString
		.replace(/([2468])(?=[2468])/g, '$1*')
		.replace(/([13579])(?=[13579])/g, '$1-');
};

module.exports = {
	DashInsertII,
	info
};
