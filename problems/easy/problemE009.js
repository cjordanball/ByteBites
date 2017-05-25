/*
Create a function TimeConvert(num) to take the number parameter being passed and return the
number of hours and minutes to which the parameter converts (ie. if num = 63 then the output
should be 1:3). Separate the number of hours and minutes with a colon.
*/

/*
Like most computer languages,  Javascript provides an operator "%" to give us the remainder
of a divsion, which makes this a pretty simple problem.
*/

module.exports = {
	name: ['TimeConvert'],
	number: 9,
	level: 'easy',
	methods: ['floor', 'toString'],
	concepts: ['remainder operator', 'template strings'],


	TimeConvert(num) {
		if (num < 0) {
			return 'Cannot accept negative numbers.';
		}
		return `${Math.floor(num / 60).toString()}:${(num % 60).toString()}`;
	}
};
