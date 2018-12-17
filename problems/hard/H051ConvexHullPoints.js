/*
Have the function ConvexHullPoints(strArr) take strArr which will be an array of integer
coordinates that exist on a Cartesian plane in the form: (x,y). Your program should return
the minimum number of points that are needed to form a convex hull around all the points.
For example: if the input is ["(2,2)", "(3,1)", "(2,6)", "(0,-2)"] then your program should
return 3 because only 3 points are needed to create a convex hull that encloses all the
points. The input array will always contain at least 3 points.
*/

const info = {
	name: 'ConvexHullPoints',
	number: 51,
	level: 'hard',
	methods: [],
	concepts: []
};

const helpers = {};

const ConvexHullPoints = (strArr) => {
	// convert the array into an array of x-y cordinates
	const formattedArray = strArr.map(val => helpers.formatter(val))
		.sort((val1, val2) => val1[0] - val2[0]);
	// find the leftmost point
	const origin = formattedArray[0];
	// get the second point of the convex hull
	let newHotPointIndex = helpers.getSecondPointIndex(formattedArray, origin);
	let oldPoint = origin;
	let hotPoint = formattedArray[newHotPointIndex];
	let counter = 1;
	while (hotPoint !== origin) {
		newHotPointIndex = helpers.getNextPointIndex(formattedArray, oldPoint, hotPoint);
		counter++;
		oldPoint = hotPoint;
		hotPoint = formattedArray[newHotPointIndex];
	}
	return counter;
};

Object.assign(helpers, {
	// formatter takes the input and converts it to an array of cartesian points
	formatter(str) {
		const matcher = /^\(([-+]?\d+),([-+]?\d+)\)$/;
		const myMatch = str.match(matcher);
		return [parseFloat(myMatch[1]), parseFloat(myMatch[2])];
	},

	// given two points, the first being the initial point to the leftmost, and the
	// next being our tested point, we want to find the point that, together with the
	// origin point, forms the line with the smallest slope, so getSlope will return this
	// resulting slope.
	getSlope(point1, point2) {
		const [point1x, point1y, point2x, point2y] = point1.concat(point2);
		return (point1y - point2y) / (point1x - point2x);
	},

	// given three points, the middle being the point in common, getAngle returns
	// the angle between the rays extending from the common point.  It will be 1-to-1
	// from 0 to 180 degrees, which is all we need.
	getAngle(point1, origin, point2) {
		const [point1x, point1y] = point1;
		const [originx, originy] = origin;
		const [point2x, point2y] = point2;
		const dotProduct = (
			((point1x - originx) * (point2x - originx)) +
			((point1y - originy) * (point2y - originy))
		);
		const line1Length = (((point1x - originx) ** 2) + ((point1y - originy) ** 2)) ** 0.5;
		const line2Length = (((point2x - originx) ** 2) + ((point2y - originy) ** 2)) ** 0.5;

		const radAngle = Math.acos(dotProduct / (line1Length * line2Length));
		return Math.round((radAngle * 18000) / Math.PI) / 100;
	},
	// getHotPointIndex will take two parameters: first, the formatted Array, second, the
	// current hotPoint.
	getSecondPointIndex(arr, point1) {
		const arrCopy = Array.from(arr);
		return (arrCopy.map((point, ind) => ({
			slope: this.getSlope(point1, point),
			index: ind
		}))
		.filter(slopeObj => !Number.isNaN(slopeObj.slope))
		.sort((slopeObj1, slopeObj2) => slopeObj1.slope - slopeObj2.slope))[0].index;
	},
	getNextPointIndex(arr, oldPoint, hotPoint) {
		const arrCopy = Array.from(arr);
		return (arrCopy.map((point, ind) => ({
			angle: (point[0] === oldPoint[0] && point[1] === oldPoint[1]) ?
				NaN : this.getAngle(oldPoint, hotPoint, point),
			index: ind
		}))
		.filter(angleObj => !Number.isNaN(angleObj.angle))
		.sort((angleObj1, angleObj2) => angleObj2.angle - angleObj1.angle))[0].index;
	}

});

module.exports = {
	ConvexHullPoints,
	helpers,
	info
};
