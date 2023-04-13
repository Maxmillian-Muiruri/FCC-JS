// Extract Matches
// extract the actual matches you found with the .match() method.
// Apply the .match() method to extract the string coding.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
console.log(result);
console.log(codingRegex);

// Find More Than the First Match
// To search or extract a pattern more than once, you can use the global search flag:``` g```.
// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

// You can have multiple flags on your regex like /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let results = twinkleStar.match(starRegex);
console.log(results);

// Match Anything with Wildcard Period
// omplete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
// Luckily, you can save time using the wildcard character: .
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./;
let Result = unRegex.test(exampleStr);
console.log(unRegex);
console.log(Result);

// Match Single Character with Multiple Possibilities

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
// efine a group of characters you wish to match by placing them inside square ([ and ]) brackets.
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let risult = quoteSample.match(vowelRegex);
console.log(risult);
console.log(risult);
