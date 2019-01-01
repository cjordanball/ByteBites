/*
Have the function TransitivityRelations(strArr) read the strArr parameter being passed which
will make up an NxN matrix where the rows are separated by each pair of parentheses (the matrix
will range from 2x2 to 5x5). The matrix represents connections between nodes in a graph where
each node corresponds to the Nth element in the matrix (with 0 being the first node). If a
connection exists from one node to another, it will be represented by a 1, if not it will be
represented by a 0. For example: suppose strArr were a 3x3 matrix with input
["(1,1,1)","(1,0,0)","(0,1,0)"], this means that there is a connection from node 0->0, 0->1,
and 0->2. For node 1 the connections are 1->0, and for node 2 the connections are 2->1. This
can be interpreted as a connection existing from node X to node Y if there is a 1 in the Xth
row and Yth column. Note: a connection from X->Y does not imply a connection from Y->X.

What your program should determine is whether or not the matrix, which represents connections
among the nodes, is transitive. A transitive relation means that if the connections 0->1 and
1->2 exist for example, then there must exist the connection 0->2. More generally, if there is
a relation xRy and yRz, then xRz should exist within the matrix. If a matrix is completely
transitive, return the string transitive. If it isn't, your program should return the
connections needed, in the following format, in order for the matrix to be transitive:
(N1,N2)-(N3,N4)-(...). So for the example above, your program should return (1,2)-(2,0). You
can ignore the reflexive property of nodes in your answers. Return the connections needed in
lexicographical order [e.g. (0,1)-(0,4)-(1,4)-(2,3)-(4,1)].
*/

const info = {
	name: 'TransitivityRelations',
	number: 3,
	level: 'hard',
	methods: [],
	concepts: []
};

const helpers = {};

const TransitivityRelations = (strArr) => {
    // var len = strArr.length;
    // var paths = groupings(len, len);
    // var newArr = helpers.prepArr(strArr);
    // var mark1Arr = helpers.endMark(newArr, paths);
    // var mark2Arr = helpers.markUp(newArr, mark1Arr);
    // mark2Arr = mark2Arr.map(function(val) {
    //     return val + val[0];
    // });
    // var tests = mark2Arr.filter(function(val) {
    //     return /-d-/.test(val);
    // });
    // var searchResArray = [];
    // tests.forEach(function(val) {
    //     var test3 = val.match(/d-d-d/g) || [];
    //     console.log('3', test3);
    //     var test4 = val.match(/d-d-d-d/g) || [];
    //     console.log('4', test4);
    //     var test5 = val.match(/d-d-d-d-d/g) || [];
    //     console.log('5', test5);
    //     searchResArray.push(...test3, ...test4, ...test5);
    // });
	//
    // var res = [];
    // searchResArray.forEach(function(val) {
    //     var first = val.slice(0,1);
    //     var second = val.slice(-1);
    //     if (!parseInt(newArr[first][second], 10)) {
    //         res.push('(' + first + ',' + second + ')');
    //     }
    // });
    // if (!res.length) return 'transitive';
	//
	// res = helpers.uniq(res).sort();
	//
    // return res.join('-');
	return true;
};

Object.assign(helpers, {
	// prepArr take the original ["(1,1,1,1)"] form and converts it to [['1','1','1','1'], etc ] form
	prepArr(arr) {
		// convert the string array to an array of four arrays
		return arr.map(val => val.match(/\d/g));
	},
	uniq(arr) {
		return Array.from(new Set(arr));
		// var obj = {};
		// arr.forEach(function(val) {
		// 	obj[val] = true;
		// });
		// return Object.keys(obj);
	},
	// puts an - at the end if the first element is connected to the last
	// puts an * at the end if the first element is not connected to the last
	endMark(newArr, paths) {
		return paths.map((val) => {
			const begin = val[0];
			const end = val[val.length - 1];
			if (parseInt(newArr[begin][end], 10)) {
				return val.concat('-');
			}
			return val.concat('*');
		});
	},
	// takes the 1/0 array and uses it to place hyphens between nodes with connections
	markUp(arr, pathArr) {
		const len = arr.length;
		const copyArr = [];
		pathArr.forEach((val, ind) => {
			let str = pathArr[ind][0];
			for (let i = 0; i < len - 1; i++) {
				const begin = pathArr[ind][i];
				const end = pathArr[ind][i + 1];
				if (parseInt(arr[begin][end], 10)) {
					str += `-${end}`;
				} else {
					str += `*${end}`;
				}
			}
			copyArr.push(str);
		});
		return copyArr;
	},
	/*
	this function finds all the distinct groupings of strLen objects out
	an array n objects long.  It works a bit messily, taking the array of
	all permutations of all array elements, chopping off the last unwanted
	length - n objects, then taking every (length - n)! of that list.
	*/
	groupings(arrLen) {
		const theArray = [];
		for (let i = 0; i < arrLen; i++) {
			theArray.push(i.toString());
		}
		const skipper = 1;
		const newArr = this.permutations(theArray)
			.map(val => val.slice(0, arrLen));
		const holdArr = [];
		newArr.forEach((val, ind) => {
			if (ind % skipper === 0) {
				holdArr.push(val);
			}
		});
		return newArr;
	},
	factorial(num) {
		const intNum = typeof num === 'number' ? Math.trunc(num) : parseInt(num, 10);
		if (intNum < 0) return null;
		if (intNum === 0) return 1;
		if (num === 1) return 1;
		return num * helpers.factorial(num - 1);
	}
});

//---------------------Helper Functions---------------------------










//the permutations function delivers all the possible arrangements of n distinct letters.
function permutations(arr) {

    //create an array of form ['str', [arr]]
    var newArr = ['', arr];

    return (reduction(rollover(newArr)));
}
    /*the rollover function takes an array in the form ['',[a, b, c, . . .]] and
    returns a nested array containing all the permutations containing n items, using
    each item only once.  However, to use, one must use the reduction()function to
    get back to a single level array.
    */
function rollover (arr) {
    if (arr[1].length === 1) {
        arr[0] += arr[1];
        return arr[0];
    }
    else {
        var itemArr = arr[1];
        var holdArr = [];
        var len = itemArr.length;
        for (var i = 0; i < len; i++) {
            forArr = itemArr.map(function(val) {
                return val;
            });
            forArr.splice(i, 1);
            var cons = arr[0] + arr[1][i];
            holdArr.push(rollover([cons,forArr]));
        };
        return holdArr;
    }
}
/*
The reduction function takes an array nested several levels and flattens it by
concatenation.
*/
function reduction(arr) {
    if (Array.isArray(arr[0])) {
        var holdArr = arr.reduce(function(first, last) {
            return first.concat(last);
        });
        return reduction(holdArr);
    }
    else {
        return arr;
    }
}



module.exports = {
	TransitivityRelations,
	helpers,
	info
};
