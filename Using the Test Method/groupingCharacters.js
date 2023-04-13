// Check For Mixed Grouping-of-Characters
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
console.log(testRegex);
// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin D.) Roosevelt/;
let result = myRegex.test(myString);
console.log(result);

let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1 \1$/;
let results = reRegex.test(repeatNum);
console.log(results);

// Use Capture Groups to Search and Replace
// Write a regex fixRegex using three capture groups that will search for each word in the string one two three. Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let resut = str.replace(fixRegex, replaceText);
console.log(resut);
