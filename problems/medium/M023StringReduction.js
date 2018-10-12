/*
Have the function StringReduction(str) take the str parameter being passed and return the
smallest number you can get through the following reduction method. The method is: Only
the letters a, b, and c will be given in str and you must take two different adjacent
characters and replace it with the third. For example "ac" can be replaced with "b" but
"aa" cannot be replaced with anything. This method is done repeatedly until the string
cannot be further reduced, and the length of the resulting string is to be output. For
example: if str is "cab", "ca" can be reduced to "b" and you get "bb" (you can also reduce
it to "cc"). The reduction is done so the output should be 2. If str is "bcab", "bc"
reduces to "a", so you have "aab", then "ab" reduces to "c", and the final string "ac"
is reduced to "b" so the output should be 1.
*/

const info = {
	name: 'BracketMatcher',
	number: 23,
	level: 'medium',
	methods: [],
	concepts: ['while loop']
};

const StringReduction = (str) => {
	let strCopy = str;
	while (strCopy.match(/(ab|ba|ac|ca|bc|cb)/)) {
		strCopy = strCopy
			.replace(/(ab|ba)/, 'c')
			.replace(/(bc|cb)/, 'a')
			.replace(/(ac|ca)/, 'b');
	}
	return strCopy.length;
};

module.exports = {
	StringReduction,
	info
};
