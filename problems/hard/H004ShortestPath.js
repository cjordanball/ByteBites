/*
Have the function ShortestPath(strArr) take strArr which will be an array of strings which models
a non-looping Graph. The structure of the array will be as follows: The first element in the array
will be the number of nodes N (points) in the array as a string. The next N elements will be the
nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth
element, the rest of the elements in the array will be the connections between all of the nodes.
They will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist
no connections at all.

An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. Your program should
return the shortest path from the first Node to the last Node in the array separated by dashes. So
in the example above the output should be A-B-D. Here is another example with strArr being
["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. The output for this
array should be A-E-D-F-G. There will only ever be one shortest path for the array. If no path
between the first and last node exists, return -1. The array will at minimum have two nodes. Also,
the connection A-B for example, means that A can get to B and B can get to A.
*/

const info = {
	name: 'ShortestPath',
	number: 4,
	level: 'hard',
	methods: [],
	concepts: []
};

const helpers = {};

const ShortestPath = (strArr) => {
    // Get the number of nodes
	const nodeNum = parseInt(strArr.shift(), 10);

	const newArr = strArr.map(val => val);

	// replace proper names with letters, for simplicity
	const modArr = helpers.convertArr(newArr, nodeNum);

	// get an array, containing object of nodes, and an array of connections
	const connections = helpers.createObject(modArr, nodeNum);

	// then convert to an object of key-valules (node: [connections])
	const connectionObject = helpers.makeObject(connections);

	const fullPaths = paths(connectionObject);

	return fullPaths.length ? finalForm(fullPaths) : -1;
};

Object.assign(helpers, {
	// convert the given array to one using "ABC"
	convertArr(arr, nodeNum) {
		const newArr = arr.map(val => val.toLowerCase());
		for (let i = 0; i < nodeNum; i++) {
			const hold = new RegExp(newArr[i]);
			newArr.forEach(val => val.replace(hold, String.fromCharCode(i + 65)));
		}
		return arr;
	},
	// takes the modArr and returns [object of nodes, array of connections]
	createObject(arr, nodeNum) {
		const obj = {};
		arr.forEach((val) => {
			if (/^w$/.test(val)) {
				obj[val] = [];
			}
		});
		arr.splice(0, nodeNum);
		return [obj, arr];
	},
	// takes the [nodeobject, connArray] and returns the formatted connection object
	makeObject(inputArr) {
		const connObj = inputArr[0];
		const connArr = inputArr[1];
		const connObjKeys = Object.keys(connObj);
		connObjKeys.forEach((char) => {
			const patt = new RegExp(`(?:${char}-(\w))|(?:(\w)-${char});
			connArr.forEach((val) => {
				const result = patt.exec(val);
				if (result) {
					const resFiltered = result.filter(val1 => val1);
					connObj[char].push(resFiltered[1]);
				}
			});
		});
		return connObj;
	},
	


})


//----------------------------helper functions----------------------






    //takes the formatted connection object and delivers an array of the paths from
    //beginning to end
    function paths(pathObj) {
    var endNode = String.fromCharCode(65 + nodeNum - 1);
    //start at the beginning (node 'A');
    var resArr = ['A'];


    //until all the paths are deadended or fully run
    while (resArr.some(function(val){return val.slice(-1) !== endNode})){

        //hotChar is the current last item in the first path string in the paths array
        var hotChar = resArr[0].slice(-1);

        //if the end has already been reached, move from front to back.
        if (hotChar === endNode) {
        resArr.push(resArr.shift());
        }

        //if not reached
        else {
            //get the array of nodes connected to HotChar
            holdArr = pathObj[hotChar];

            //filter out the nodes already visited (would create loop)
            holdArr = holdArr.filter(function(val) {
                return resArr[0].indexOf(val) === -1;
            });

            //remove the pathstring from the front of the array
            var oldStr = resArr.splice(0, 1)[0];

            //add to the rear of the array each continuing path (gets tossed if deadend)
            holdArr.forEach(function(val){
                resArr.push(oldStr + val);
            });
        }
    }
    return resArr;
}

    function finalForm(pathsArr) {
        var truePath = pathsArr.sort(function(a, b){return b.length - a.length}).pop();
        var truePathArr = truePath.split('');
        truePathArr = truePathArr.map(function(val){
            return strArr[val.charCodeAt(0) - 65];
        })
        return truePathArr.join('-');
    }

module.exports = {
	ShortestPath,
	helpers,
	info
};
