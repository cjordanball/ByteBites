/*
Have the function MostFreeTime(strArr) read the strArr parameter being passed which will
represent a full day and will be filled with events that span from time X to time Y in
the day. The format of each event will be hh:mmAM/PM-hh:mmAM/PM. For example, strArr may
be ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. Your program will have to
output the longest amount of free time available between the start of your first event
and the end of your last event in the format: hh:mm. The start event should be the earliest
event in the day and the latest event should be the latest event in the day. The output
for the previous input would therefore be 01:30 (with the earliest event in the day
starting at 09:10AM and the latest event ending at 02:45PM). The input will contain at
least 3 events and the events may be out of order.
*/

const info = {
	name: 'MostFreeTime',
	number: 29,
	level: 'medium',
	methods: [],
	concepts: []
};

let helpers;

const MostFreeTime = (strArr) => {
	const adjustedStrArr = strArr
		.map(val => helpers.timeMassage(val)
		)
		.sort((val1, val2) => parseInt(val1.match(/d{3,4}/) - val2.match(/d{3,4}/), 10)
		)
		.map(val => val
			.split('-')
			.map(subVal => parseInt(subVal, 10))
		);
	console.log('asa: ', adjustedStrArr);

	const len = strArr.length;
	let counter = 0;
	for (let i = 0; i < len - 1; i++) {
		const time = adjustedStrArr[i + 1][0] - adjustedStrArr[i][1];
		if (time > counter) {
			counter = time;
		}
	}
	return helpers.returnToTime(counter);
};


helpers = {
	timeMassage(timeString) {
		const splitArray = timeString.split(/-/);
		const militaryTimeArray = splitArray.map((val) => {
			if (/am/i.test(val)) {
				return val.replace('12', '00');
			}
			const hour = parseInt(val.slice(0, 2).replace('12', '00'), 10);
			const remainingTimeString = val.slice(2);
			const newHour = (hour + 12).toString();
			console.log('newHour: ', newHour);
			return `${newHour}${remainingTimeString}`.slice(0, 5);
		});
		const minuteTimeString = militaryTimeArray.map((val) => {
			const hours = parseInt(val.slice(0, 2), 10);
			const minutes = parseInt(val.slice(3), 10);
			return ((hours * 60) + minutes).toString(10);
		});
		return minuteTimeString.join('-');
	},
	returnToTime(counter) {
		let mins = (counter % 60).toString();
		let hrs = (Math.floor(counter / 60).toString());
		if (mins < 10) {
			mins = `0${mins}`;
		}
		if (hrs < 10) {
			hrs = `0${hrs}`;
		}
		return `${hrs}:${mins}`;
	}
};

module.exports = {
	MostFreeTime,
	helpers,
	info
};
