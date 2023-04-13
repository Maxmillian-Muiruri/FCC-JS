// Match Characters that Occur One or More Times
let name = "maxmillian";
let Name = /m+/g;
let result = name.match(Name);
console.log(result);

// Match Characters that Occur Zero or More Times
// . Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aaaaaaaaaaaaaaaa*/;
let results = chewieQuote.match(chewieRegex);
console.log(results);
