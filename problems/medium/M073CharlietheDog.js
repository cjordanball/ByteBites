/*
Using the JavaScript language, have the function CharlietheDog(strArr) read the array of strings
stored in strArr which will be a 4x4 matrix of the characters 'C', 'H', 'F', 'O', where C
represents Charlie the dog, H represents its home, F represents dog food, and O represents an
empty space in the grid. Your goal is to figure out the least amount of moves required to get
Charlie to grab each piece of food in the grid by moving up, down, left, or right, and then make
it home right after. Charlie cannot move onto the home before all pieces of food have been
collected. For example: if strArr is ["FOOF", "OCOO", "OOOH", "FOOO"], then this looks like the
following grid:

For the input above, the least amount of steps where the dog can reach each piece of food, and then
return home is 11 steps, so your program should return the number 11. The grid will always contain
between 1 and 8 pieces of food.
*/

const info = {
	name: 'CharlietheDog',
	number: 73,
	level: 'medium',
	methods: [],
	concepts: []
};

const helpers = {};

const CharlietheDog = (strArr) => {
	const mapArray = strArr.join('').split('');
	helpers.dogHouse = mapArray.findIndex(val => val === 'H');
	const charlieLocation = mapArray.findIndex(val => val === 'C');
	const foodArray = helpers.getFoodArray(mapArray);
	let counter = 0;
	// let cutOff = '';
	let stateArray = [{
		charlie: charlieLocation,
		food: foodArray
	}];

	while (true) {
		counter++;
		stateArray = stateArray.map(stateObject => helpers.newStates(stateObject));

		if (!stateArray.includes('done')) {
			stateArray = stateArray.reduce((val1, val2) => val1.concat(val2), []);
			stateArray = helpers.shaker(stateArray);
		} else {
			break;
		}
	}
	return counter;
};


// function shaker(stateCollection)

Object.assign(helpers, {
	// is assigned the value of the location of the doghouse
	dogHouse: null,
	// takes the array representing the board and returns an array indicating
	// where the dog treats are
	getFoodArray(arr) {
		const resArray = [];
		const len = arr.length;
		for (let i = 0; i < len; i++) {
			if (arr[i] === 'F') {
				resArray.push(i);
			}
		}
		return resArray;
	},
	// a simple helper that takes two arrays and returns a boolean, whether the
	// contents of the array are the same, but don't have to be in order
	isArrayEqual(arr1, arr2) {
		arr1.sort((val1, val2) => val1 - val2);
		arr2.sort((val1, val2) => val1 - val2);
		const len = arr1.length;
		if (len !== arr2.length) {
			return false;
		}
		for (let i = 0; i < len; i++) {
			if (arr1[i] !== arr2[i]) {
				return false;
			}
		}
		return true;
	},
	// takes a stateObject (charlie: num, food: arr) and returns all the possible/
	// existing stateObjects after the next move from that position.  Returns 'done'
	// if the dog has landed at home, with no more treats to get.
	newStates(stateObject) {
		let done = false;
		const location = stateObject.charlie;
		const returnArray = [];
		const possibles = [];
		if (location > 3) {
			possibles.push(location - 4);
		}
		if (location % 4 !== 0) {
			possibles.push(location - 1);
		}
		if (location % 4 !== 3) {
			possibles.push(location + 1);
		}
		if (location < 12) {
			possibles.push(location + 4);
		}
		possibles.forEach((newLocation) => {
			if (newLocation === this.dogHouse && !stateObject.food.length) {
				done = true;
			}
			if (newLocation !== this.dogHouse) {
				const foodLocations = stateObject.food.filter(hotLocation => newLocation !== hotLocation);
				returnArray.push({ charlie: newLocation, food: foodLocations });
			}
		});
		return done ? 'done' : returnArray;
	},
	// takes an array of stateObjects, compares them, and throws out duplicates
	shaker(stateObjectArray) {
		let arrayCopy = Array.from(stateObjectArray);
		const len = arrayCopy.length;
		for (let i = 0; i < len; i++) {
			arrayCopy = arrayCopy.filter((stateObject, ind) => (
                    ind <= i ||
                    stateObject.charlie !== arrayCopy[i].charlie ||
                    !this.isArrayEqual(stateObject.food, arrayCopy[i].food)
            ));
		}
		return arrayCopy;
	}
});

module.exports = {
	CharlietheDog,
	helpers,
	info
};
