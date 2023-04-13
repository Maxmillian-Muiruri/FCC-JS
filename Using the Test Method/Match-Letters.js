// Match Letters of the Alphabet
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);
console.log(result);

// Match Numbers and Letters of the Alphabet
// Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers
// For example
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/gi;
jennyStr.match(myRegex);

// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
let quotesSample = "Blueberry 3.141592653s are delicious.";
let miyRegex = /[h-s2-6]/gi;

let risult = quotesSample.match(miyRegex);
console.log(risult);
// Match Single Characters Not Specified
// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
let quoteSamples = "3 blind mice.";
let myRegexs = /[^aeiou^0-9]/gi;

let results = quoteSamples.match(myRegexs);
console.log(results);
