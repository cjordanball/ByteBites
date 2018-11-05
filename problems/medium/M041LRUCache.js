/*
Have the function LRUCache(strArr) take the array of characters stored in strArr, which will
contain characters ranging from A to Z in some arbitrary order, and determine what elements
still remain in a virtual cache that can hold up to 5 elements with an LRU cache algorithm
implemented. For example: if strArr is ["A", "B", "C", "D", "A", "E", "D", "Z"], then the
following steps are taken:

(1) A does not exist in the cache, so access it and store it in the cache.
(2) B does not exist in the cache, so access it and store it in the cache as well. So far the
	cache contains: ["A", "B"].
(3) Same goes for C, so the cache is now: ["A", "B", "C"].
(4) Same goes for D, so the cache is now: ["A", "B", "C", "D"].
(5) Now A is accessed again, but it exists in the cache already so it is brought to the front:
["B", "C", "D", "A"].
(6) E does not exist in the cache, so access it and store it in the cache:
["B", "C", "D", "A", "E"].
(7) D is accessed again so it is brought to the front: ["B", "C", "A", "E", "D"].
(8) Z does not exist in the cache so add it to the front and remove the least recently used
element: ["C", "A", "E", "D", "Z"].

Now the caching steps have been completed and your program should return the order of the cache
with the elements joined into a string, separated by a hyphen. Therefore, for the example above
your program should return C-A-E-D-Z.
*/

const info = {
	name: 'LRUCache',
	number: 41,
	level: 'medium',
	methods: [],
	concepts: []
};

const LRUCache = (strArr) => {
	const cache = [];
	// very simple, go through the array given and operate on the cache
	strArr.forEach((val) => {
		if (!cache.includes(val)) {
			// fun! One of the first times I have ever taken advantage of the fact
			// that push() returns the length of the array after the push, not the
			// array itself
			if (cache.push(val) > 5) {
				cache.shift();
			}
		} else {
			cache.splice(cache.findIndex(cacheVal => val === cacheVal), 1);
			cache.push(val);
		}
	});
	return cache.join('-');
};

module.exports = {
	LRUCache,
	info
};
