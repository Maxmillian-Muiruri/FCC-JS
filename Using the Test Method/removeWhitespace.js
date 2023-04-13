// Remove Whitespace from Start and End
// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
let hello = "   Hello, World!  ";
let wsRegex = /\s+\s+/gi;
let result = hello.replace(wsRegex, "");
console.log(result);
