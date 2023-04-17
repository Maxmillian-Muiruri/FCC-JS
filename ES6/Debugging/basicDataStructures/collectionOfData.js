// Use an Array to Store a Collection of Data

let yourArray = [20, "years", true, false, null];
console.log(yourArray.length);
console.log(yourArray);

// Add Items to an Array with push() and unshift()
// ; the push() method adds elements to the end of an array, and unshift() adds elements to the beginning

// We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
function mixedNumbers(arr) {
  arr.unshift("1", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

// Remove Items from an Array with pop() and shift()
// pop() removes an element from the end of an array, while shift() removes an element from the beginning.
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

// Remove Items Using splice()
// splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.
// it also returns a new array containing the value of the removed elements:

// . Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
let newArray = arr.splice(1, 4);
console.log(arr);

// Add Items Using splice()
// Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

// Copy Array Items Using slice()
// We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.
function forecast(arr) {
  let slicedforecast = arr.slice(2, 4);
  return slicedforecast;
}
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
