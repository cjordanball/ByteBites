/*
Have the function OverlappingRectangles(strArr) read the strArr parameter being passed
which will represent two rectangles on a Cartesian coordinate plane and will contain 8
coordinates with the first 4 making up rectangle 1 and the last 4 making up rectange 2.
It will be in the following format: ["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"].
Your program should determine the area of the space where the two rectangles overlap, and
then output the number of times this overlapping region can fit into the first rectangle.
For the above example, the overlapping region makes up a rectangle of area 2, and the
first rectangle (the first 4 coordinates) makes up a rectangle of area 4, so your program
should output 2. The coordinates will all be integers. If there's no overlap between the
two rectangles return 0.
*/

const info = {
	name: 'OverlappingRectangles',
	number: 30,
	level: 'medium',
	methods: [],
	concepts: []
};

let helpers;

const OverlappingRectangles = (strArr) => {
	const rectangles = helpers.rectangArrays(strArr);
	const rec1Points = helpers.recPoints(rectangles[0]);
	const rec2Points = helpers.recPoints(rectangles[1]);

	// created the values object to give names to the rectangle sides to make them
	// easier to visualize.
	const values = {
		rec1Top: rec1Points[1][1],
		rec1Right: rec1Points[1][0],
		rec1Bottom: rec1Points[0][1],
		rec1Left: rec1Points[0][0],
		rec2Top: rec2Points[1][1],
		rec2Right: rec2Points[1][0],
		rec2Bottom: rec2Points[0][1],
		rec2Left: rec2Points[0][0]
	};
	const rec1Area = (values.rec1Top - values.rec1Bottom) * (values.rec1Right - values.rec1Left);

	/* test for overlap */
	if (values.rec2Bott >= values.rec1Top ||
		values.rec1Bott >= values.rec2Top ||
		values.rec1Left >= values.rec2Right ||
		values.rec2Left >= values.rec1Right) {
		return 0;
	}

	const overLapTop = Math.min(values.rec1Top, values.rec2Top);
	const overLapBottom = Math.max(values.rec1Bottom, values.rec2Bottom);
	const overLapRight = Math.min(values.rec1Right, values.rec2Right);
	const overLapLeft = Math.max(values.rec1Left, values.rec2Left);
	const overLapArea = (overLapTop - overLapBottom) * (overLapRight - overLapLeft);
	return overLapArea === 0 ? 0 : Math.trunc(rec1Area / overLapArea);
};

helpers = {
	/* the function RectangArrays ta105816
	kes the input of this problem and returns a
    two-element array, each element being an array of the points in the first or
    second rectangle, respectively. */
	rectangArrays(strArr) {
		const str = strArr[0];
		let bigArray = str.split('),(');
		bigArray = bigArray.map((val) => {
			const cleanVal = val.replace(/[()]/g, '');
			const pointArray = cleanVal.split(',');
			pointArray[0] = parseInt(pointArray[0], 10);
			pointArray[1] = parseInt(pointArray[1], 10);
			return pointArray;
		});
		return [bigArray.splice(0, 4), bigArray];
	},
	/*
	the function recPoints takes an array of points on the cartesian grid (of an
    aligned rectangle) and returns an array of two points, representing the lower
    left corner and the upper right corner of the rectangle.
*/
	recPoints(arr) {
		const yVals = arr.map(val => val[1]);
		const xVals = arr.map(val => val[0]);
		const yMin = Math.min(...yVals);
		const yMax = Math.max(...yVals);
		const xMin = Math.min(...xVals);
		const xMax = Math.max(...xVals);
		return [[xMin, yMin], [xMax, yMax]];
	}
};

module.exports = {
	OverlappingRectangles,
	helpers,
	info
};
