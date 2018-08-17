/*
Have the function TimeDifference(strArr) read the array of strings stored in strArr which
will be an unsorted list of times in a twelve-hour format like so: HH:MM(am/pm). Your goal
is to determine the smallest difference in minutes between two of the times in the list.
For example: if strArr is ["2:10pm", "1:30pm", "10:30am", "4:42pm"] then your program
should return 40 because the smallest difference is between 1:30pm and 2:10pm with a
difference of 40 minutes. The input array will always contain at least two elements and
all of the elements will be in the correct format and unique.
*/

function TimeDifference(strArr) {
    // times will hold our time differences
	const times = [];
	const newStrArr = strArr.map((val) => {
		const timePieces = val.match(/^(\d+):(\d+)([ap]m)$/);
		let hours = parseInt(timePieces[1], 10);
		const minutes = parseInt(timePieces[2], 10);
		const amPm = timePieces[3];
		if (amPm === 'am' && hours === 12) {
			hours = 0;
		}
		if (amPm === 'pm' && hours !== 12) {
			hours += 12;
		}
		return (hours * 60) + minutes;
	})
		.sort((a, b) => a - b);
    // tricky - second example shows that we must consider the earliest time on day 0 and day 1
	newStrArr.push(newStrArr[0] + (24 * 60));

	for (let i = 0, len = newStrArr.length; i < len - 1; i++) {
		times.push(newStrArr[i + 1] - newStrArr[i]);
	}
	return Math.min.apply(null, times);
}

module.exports = {
	TimeDifference
};
