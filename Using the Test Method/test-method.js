// Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result);

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let answer = waldoRegex.test(waldoIsHiding);
console.log(answer);
console.log(waldoRegex);

// Match a Literal String with Different Possibilities /yes|no|maybe/.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let results = petRegex.test(petString);
console.log(results);
console.log(petRegex);

// Ignore Case While Matching
// the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i
// Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

let myStrings = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let Result = fccRegex.test(myStrings);
console.log(Result);
