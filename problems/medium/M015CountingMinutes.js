/*
Have the function CountingMinutes(str) take the str parameter being passed which will be
two times (each properly formatted with a colon and am or pm) separated by a hyphen and
return the total number of minutes between the two times. The time will be in a 12 hour
clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str
is 1:00pm-11:00am the output should be 1320.
*/

const info = {
	name: 'CountingMinutes',
	number: 15,
	level: 'medium',
	methods: [],
	concepts: []
};

function CountingMinutes(str) {
	const tester = /(\d+):(\d+)([pa]m)-(\d+):(\d+)([pa]m)/;
	const timeArray = str.match(tester);
	const time1 = timeArray[3] === 'am'
		? (parseInt(timeArray[1], 10) * 60) + parseInt(timeArray[2], 10)
		: (parseInt(timeArray[1], 10) * 60) + parseInt(timeArray[2], 10) + 720;
	const time2 = timeArray[6] === 'am'
		? (parseInt(timeArray[4], 10) * 60) + parseInt(timeArray[5], 10)
		: (parseInt(timeArray[4], 10) * 60) + parseInt(timeArray[5], 10) + 720;
	return ((time2 - time1) + 1440) % 1440;
}

module.exports = {
	CountingMinutes,
	info
};
