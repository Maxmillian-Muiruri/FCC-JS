// Find Characters with Lazy Matching

// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h[a-z]*?1>/;
let result = text.match(myRegex);
console.log(result);

// Match Ending String PatternsMatch Ending String Patterns
// You can search the end of strings using the dollar sign character $ at the end of the regex.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let results = lastRegex.test(caboose);
console.log(results);
// Match All Letters and Numbers
// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let risult = quoteSample.match(alphabetRegexV2).length;
console.log(risult);
