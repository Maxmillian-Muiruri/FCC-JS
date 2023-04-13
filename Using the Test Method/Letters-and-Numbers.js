// Match Everything But Letters and Numbers

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);

// Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let results = movieName.match(numRegex).length;
console.log(results);
// Match All Non-Numbers

let movieNames = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let risult = movieNames.match(noNumRegex).length;
console.log(risult);
// Match Whitespace
// You can search for whitespace using \s, which is a lowercase s.
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let Result = sample.match(countWhiteSpace);
console.log(Result);

// Match Non-Whitespace Characters
// Search for non-whitespace using \S, which is an uppercase s
let Samples = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let resut = Samples.match(countNonWhiteSpace).length;
console.log(resut);

// Specify Upper and Lower Number of Matches
// Quantity specifiers are used with curly brackets ({ and })
// Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let resalt = ohRegex.test(ohStr);
console.log(resalt);
// Specify Exact Number of Matches
// To specify a certain number of patterns, just have that one number between the curly brackets.
// Change the regex timRegex to match the word Timber only when it has four letter m's.
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let lesult = timRegex.test(timStr);
console.log(lesult);
// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word?
// Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/;
let resul = favRegex.test(favWord);
console.log(resul);
// Positive and Negative Lookahead

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D+\d\d)/;
let answer = pwRegex.test(sampleWord);
console.log(answer);
