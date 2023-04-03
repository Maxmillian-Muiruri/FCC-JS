//loops
//iterate odd numbers with for loop
const myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);
// Count Backwards With a For Loop
const myArra = [];
for (var i = 9; i > 0; i -= 2) {
  myArra.push(i);
}

console.log(myArra);

// Iterate Through an Array with a For Loop
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
//solution
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);
// Nesting For Loops
// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr);
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
      console.log(arr[i][j]);
    }
  }
  return product;
}

console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);

// Iterate with JavaScript Do...While Loops

const Array = [];

do {
  Array.push(i);
  i++;
} while (i < 5);
console.log(Array);
console.log(i);

// Replace Loops using Recursion

function sum() {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
