/*
Have the function Calculator(str) take the str parameter being passed and evaluate the
mathematical expression within it. For example, if str were "2+(3-1)*3" the output should
be 8. Another example: if str were "(2-0)(6/2)" the output should be 6. There can be
parenthesis within the string so you must evaluate it properly according to the rules of
arithmetic.  The string will contain the operators: +, -, /, *, (, and ). If you have a
string like this: #/#*# or #+#(#)/#, then evaluate from left to right. So divide then
multiply, and for the second one multiply, divide, then add. The evaluations will be
such that there will not be any decimal operations, so you do not need to account for
rounding and whatnot.
*/

const info = {
	name: 'Calculator',
	number: 6,
	level: 'hard',
	methods: [],
	concepts: []
};

const Calculator = (str) => {
	const newStr = str.replace(/([\d)])\(/g, '$1*(')
		.replace(/\)([(\d])/g, ')*$1')
		.replace(/\*\*/g, '*');
	return global.eval(newStr);
};

module.exports = {
	Calculator,
	info
};

// The following was my original solution, without using eval().
// function Calculator(str) {
//
//
//     var prePrep = prep(str);
//     var preppedString = prep(prePrep);
//     while(prePrep !== preppedString){
//         prePrep = preppedString;
//         var preppedString = prep(preppedString);
//     }
//
//
//
//     if (preppedString.indexOf('(') === -1) {
//         return evalCaller(preppedString);
//     }
//     else {
//         var parenPatt = /(([d+-/*n]+))/;
//         var newSection = preppedString.match(parenPatt)[1];
//         var parenEval = Calculator(newSection);
//         var ans = parenEval < 0 ? Math.abs(parenEval).toString() + 'n' : parenEval.toString();
//         preppedString = preppedString.replace(parenPatt, ans);
//         return Calculator(preppedString);
//     }
//
//
//
//
// //--------------------helper functions----------------------
//
// /*
// This function strips out white space and inserts * signs where implied
// */
//
//     function prep(str) {
//         var patt1 = /[d)](?=()/g;
//
//         noSpaceStr = str.replace(/s/g, '');
//
//         formatStr = noSpaceStr.replace(patt1, '$&*');
//
//         formatStr = formatStr.replace(/^-(d+)/, '$1n');
//
//         formatStr = formatStr.replace(/([*/])-(d+)/g, '$1$2n');
//
//         formatStr = formatStr.replace(/--(d+)/g, '+$1');
//
//         formatStr = formatStr.replace(/+-(d+)/g, '+$1n');
//
//         formatStr = formatStr.replace(/([(?:dn?))])-(d+)/g, '$1+$2n');
//
//         formatStr = formatStr.replace(/(-(d+))/g, '$1n');
//
//         formatStr = formatStr.replace(/((d+))/g, '$1');
//
//         formatStr = formatStr.replace(/(+/g, '(');
//
//         return formatStr;
//     }
//
//
//
// /*
// evalCaller is the function that runs the numbers without parenthesis
// down to a result.
// */
//     function evalCaller(preppedString) {
//         var multPatt = /d+n?[*/]d+n?/;
//         var addPatt = /d+n?[+-]d+n?/
//
//         while (preppedString.indexOf('*') !== -1 || preppedString.indexOf('/') !== -1) {
//             var strSect = multPatt.exec(preppedString)[0];
//             var newStrSect = multEval(strSect);
//             preppedString = preppedString.replace(multPatt, newStrSect);
//         }
//
//         while (preppedString.indexOf('+') !== -1) {
//             var strAddSect = addPatt.exec(preppedString)[0];
//             var newAddStrSect = addEval(strAddSect);
//             preppedString = preppedString.replace(addPatt, newAddStrSect);
//             console.log(preppedString);
//         }
//         return /n/.test(preppedString) ? parseInt(preppedString) * -1 : parseInt(preppedString);
//     }
//
//
// /*
// MultEval takes a string expression in the form of ddOdd or ddO-dd and
// returns the evaluation of the expression back as a string, where O is
// either * or /.
// */
//     function multEval(str) {
//         var hold;
//         var patt = /(d+n?)([*/])(d+n?)/;
//         var strArr = patt.exec(str);
//
//         var numArr = strArr.map(function(val){
//             if (/d+n/.test(val)) {
//                 return parseInt(val) * -1;
//             }
//             else if (/d+/.test(val)) {
//                 return parseInt(val);
//             }
//             else {
//                 return val;
//             }
//         });
//
//         switch(numArr[2]) {
//             case '*':
//                 hold = numArr[1] * numArr[3];
//                 break;
//             case '/':
//                 hold = numArr[1] / numArr[3];
//                 break
//             default:
//                 console.log('error');
//         }
//         return hold < 0 ? Math.abs(hold).toString() + 'n' : hold.toString();
//     }
//
// /*
// addEval takes a string expression in the form of ddOdd or ddO-dd and
// returns the evaluation of the expression back as a string, where O is
// either + or -.
// */
//
//     function addEval(str) {
//         var hold;
//         var addPatt = /(d+n?)([+-])(d+n?)/;
//         var strArr = addPatt.exec(str);
//         var numArr = strArr.map(function(val){
//             if (/d+n/.test(val)) {
//                 return parseInt(val) * -1;
//             }
//             else if (/d+/.test(val)) {
//                 return parseInt(val);
//             }
//             else {
//                 return val;
//             }
//         });
//
//         hold = numArr[1] + numArr[3];
//
//         return hold < 0 ? Math.abs(hold).toString() + 'n' : hold.toString();
//     }
// }
//
// // keep this function call here
// // to see how to enter arguments in JavaScript scroll down
// Calculator(readline());
