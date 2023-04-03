
// this is a variable ising var 
// var myName;
// myName = 7;
// console.log(myName);
// var yourName;
// yourName = myName;
// console.log(yourName)
// Initializing Variables with the Assignment Operator
let name = "maxmillian";

console.log(name);

name = "jb";

console.log(name);
// string
let myFirstName = "maxmillian "
let myLastName = "muiruri"
console.log(myFirstName + myLastName);
// Uninitialized Variables
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(c);
// Case Sensitivity in Variables
// camelcase

let me ='myNameIsMaxmillianMuiruri';
console.log(me);
// using const and let together
const FCC = "coding"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact)
// adding and subtracting
const myVar = 12 - 6;
let you = 12 + 6;

// division and multiplication
let count = 66 / 33;
let age = 10 * 2
// INcrementing
let tea = 12;
tea++;
// decrementing
let day = 12;
day--;

// decimal
let myDecimal = (5.7);

// multypliying Decimal
const product = 2.0 * 2.5;

// divide
const quotient = 4.4 / 2.0;

// remainder
let remainder = 11 % 3;
console.log(remainder);
// +=operator
let max = 11;
max += 12;

// -=operator
 let month = 6;
 month -= 5;
console.log(month); 
// // Escaping Literal Quotes in Strings
 const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

console.log(myStr);
// uoting Strings with Single Quotes
const link = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(link);
// scape Sequences in Strings
let line = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(line);
// enating Strings with the Plus Equals Operator
let first = "This is the first sentence. ";
first += "This is the second sentence.";

console.log(first);

// Constructing Strings with Variables
let myName = "maxmillian";
let myNume= "My name is " + myName + "and I am well!";
console.log(myNume);
// Find the Length of a String
let lastNameLength = 0;
let lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);
// Find the Nth Character in a String

let last = "Lovelace";
let thirdLetterOfLast = last[2];

console.log(thirdLetterOfLast);

const Name = "Lovelace";
// Find the Last Character in a String
const lastLetterOfName = Name [Name.length -1];
console.log(lastLetterOfName);
// Word Blanks
let myNoun = "dog";
let myAdjective = "big";
let myVerb = "ran";
let myAdverb = "quickly";

let wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";;
console.log(wordBlanks);
// st one Array within Another Array
let myArray = [['max']];
console.log(myArray);
// Access Array Data with Indexes

let Array = [50, 60, 70];
let myData = myArray[0];
console.log(myData)
// Manipulate Arrays With push Method
let Arrays = [["John", 23], ["cat", 2]];
Arrays.push(["dog", 3]);
console.log(Arrays)
// Manipulate Arrays With pop Method
const myAray = [["John", 23], ["cat", 2]];
let removedFromMyAray = myAray.pop();
console.log(removedFromMyAray);
// Manipulate Arrays With shift Method
// removes the first Array
const myArra = [["John", 23], ["dog", 3]];
let removedFromMyArra = myArra.shift();
console.log(removedFromMyArra);
// unshift() adds the element at the beginning of the array.
const myA = [["John", 23], ["dog", 3]];
myA.shift();
myA.unshift(["Paul", 35]);
// Shopping List
const myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];;
console.log(myList);
// Reusable JavaScript with Functions

function reusableFunction() {
  console.log('Hi World');
  }
  reusableFunction()
  // Return a Value from a Function with Return
  function timesFive(num) {
    return num * 5;
  }
  
  console.log(timesFive(5));
  // Global Scope and Functions
  function fun1() {
  oopsGlobal =5
  }
  let myGlobal = 10;
  console.log(fun1);
// local variable has precedence over global var when used together.s

// Assignment with a Returned Value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
