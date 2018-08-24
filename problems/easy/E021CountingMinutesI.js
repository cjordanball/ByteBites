/*
Create a function CountingMinutesI(str) to take the str parameter being passed which will be two
times (each properly formatted with a colon and am or pm) separated by a hyphen, and return the
total number of minutes between the two times. The time will be in a 12 hour clock format. For
example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the
output should be 1320.
 */

/*
This problem is pretty straightforward, although it does get a bit involved, in dealing with time
spilling over into two days. One thing of interest, however, is how we are able to use parseInt to
grab the number of minutes, without the "am" or "pm" affecting the return value.
 */

const info = {
	name: 'CountingMinutesI',
	number: 21,
	level: 'easy',
	methods: ['includes()', 'parseInt()'],
	concepts: ['ternary expressions']
};

const CountingMinutesI = (str) => {
	const timesArray = str.split(/[:-]/g);

	const hour1 = timesArray[1].includes('am') ? parseInt(timesArray[0], 10) : parseInt(timesArray[0], 10) + 12;
	const hour2 = timesArray[3].includes('am') ? parseInt(timesArray[2], 10) : parseInt(timesArray[2], 10) + 12;
	const min1 = parseInt(timesArray[1], 10);
	const min2 = parseInt(timesArray[3], 10);

	const time1 = (hour1 * 60) + min1;
	const time2 = (hour2 * 60) + min2;

	return time1 <= time2 ? time2 - time1 : (time2 - time1) + (24 * 60);
};

module.exports = {
	CountingMinutesI,
	info
};
