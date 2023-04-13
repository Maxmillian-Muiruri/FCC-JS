// Use typeof to Check the Type of a Variable

// Add two console.log() statements to check the typeof each of the two variables seven and three in the code.

let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

// Catch Use of Assignment Operator Instead of Equality Operator
// Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.
// let x = 7;
// let y = 9;
// let result = "to come";

// if(x = y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }

// console.log(result);

let x = 7;
let y = 9;
let result = "to come";

if (x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

// Catch Missing Open and Closing Parenthesis After a Function Call
// Fix the code so the variable result is set to the value returned from calling the function getNine.
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let results = getNine();
console.log(results);

// Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}

countToFive();
