// Compare Scopes of the var and let keywords
// Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

// Prevent Object Mutation
function freezeObj() {
  try {
    const MATH_CONSTANTS = {
      PI: 3.14,
    };
    console.log(MATH_CONSTANTS.PI);
    MATH_CONSTANTS.PI = 99;

    console.log(MATH_CONSTANTS.PI);
    return MATH_CONSTANTS.PI;
  } catch (ex) {
    console.log(ex);
    return;
  }
}
const PI = freezeObj();

// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();
console.log(magic());
// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
const increment = (number, value = 1) => number + value;
console.log(increment(5, 2));
console.log(increment(5));
