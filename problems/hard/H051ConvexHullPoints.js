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
	const formattedArray = strArr.map(val => helpers.formatter(val));

	// find the leftmost point
	const leftPoint = formattedArray.sort((val1, val2) => val1[0] - val2[0])[0];



    // let triangles = helpers.getComboList(3, formattedArray.length)
    //     .map((val) => {
    //         return val.map(point => {
    //             return formattedArray[point];
    //         });
    //     });
	//
    // // let x = helpers.lineFormatter([0, -2], [3, 1]);
    // return helpers.isEnclosed([[0, 0], [5, 5], [10, 0]], [2, 2]);

}

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
		console.log(point1x, point1y, point2x, point2y);
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





    // //lineFormatter takes two cartesian points and returns the slope and y-intercept
    // //of the resulting line
    // lineFormatter(point1, point2) {
    //     let slope = point1[1] === point2[1] ? 'V' : (point1[0] - point2[0]) / (point1[1] - point2[1]);
    //     let intercept =  slope === 'V' ? point1[1] : point1[1] - slope * point1[0];
    //     return [slope, intercept];
    // },
    // //getSide takes the array of slope, intercept returned by lineFormatter, and
    // //a point, and tells us whether it is above the line (P), or below the line (M)
    // // or on the line (O).
    // //If slope is V, then it tells if right of line(R), or left of line(L) on on(O).
    // getSide(line, point) {
    //     if (typeof line[0] === 'number') {
    //         const linePointY = line[0] * point[0] + line[1];
    //         if (point[1] === linePointY) {
    //             return 'O';
    //         } else {
    //             return point[1] > linePointY ? 'P' : 'M';
    //         }
    //     } else {
    //         if (point[1] === line[1]) {
    //             return 'O';
    //         } else {
    //             return point[0] > line[1] ? 'R' : 'L'
    //         }
    //     }
    // },
    // //a very simple method, takes a line and two points, and returns a boolean
    // //whether the two points are on the same side of the line
    // isSameSide(line, point1, point2) {
    //     if (this.getSide(line, point1) === 'O' || this.getSide(line, point2) === 'O') {
    //         return true;
    //     }
    //     return this.getSide(line, point1) === this.getSide(line, point2);
    // },
    // //isEnclosed takes a triangle point array, and another point, and tells us
    // //whether the point is inside the triangle
    // isEnclosed(triArray, point) {
    //     let returnVal = true;
    //     let lines = this.getComboList(2, triArray.length)
    //         .map((val) => {
    //             return val.map(point => {
    //                 return triArray[point];
    //             });
    //         });
    //     lines.forEach(lineSet => {
    //         let refPoint = triArray.find(point => {
    //             return (!this.isEqualShallow(point, lineSet[0]) && !this.isEqualShallow(point, lineSet[1]));
	//
    //         });
    //         let redLine = this.lineFormatter(lineSet[0], lineSet[1]);
    //         console.log('sameSide: ', this.isSameSide(redLine, point, refPoint));
    //         if(!this.isSameSide(redLine, point, refPoint)) {
    //             returnVal = false;
    //         }
    //     });
    //     return returnVal;
    // },
    // //getComboList takes a sample size and total population, and returns an array of
    // //all unique combinations, i.e., two combos in the same order are considered
    // //the same.
    // getComboList(sampleSize, totalNum) {
    //     let resArray = [[]];
    //     while (resArray[0].length < sampleSize) {
    //         var resArrays = [];
    //         resArray.forEach((val, ind) => {
    //             resArrays.push(...this.numberAdd(val, sampleSize, totalNum));
    //         });
    //         resArray = resArrays;
    //     }
    //     return resArray;
    // },
    // //numberAdd is a helper method of getComboList - it takes the intermediate
    // //stage arrays and returns an array of the possible arrays with the next
    // //number
    // numberAdd(arr, sampleSize, totalNum) {
    //     let start = arr.length ? Math.max(...arr) + 1 : 0;
    //     let end = totalNum - sampleSize + arr.length;
    //     let resArray = [];
    //     for (let i = start; i <= end; i++) {
    //         resArray.push(arr.concat(i));
    //     }
    //     return resArray;
    // },
    // //simple method to tell if arrays are equivalent, only goes one level
    // isEqualShallow(arr1, arr2) {
    //     if (arr1.length !== arr2.length) {
    //         return false;
    //     }
    //     return arr1.every((val, ind) => {
    //         return val === arr2[ind];
    //     });
    // }
});

module.exports = {
	ConvexHullPoints,
	helpers,
	info
};
