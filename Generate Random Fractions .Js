// Generate Random Fractions with JavaScript


// Change randomFraction to return a random number instead of returning 0.
function randomFraction() {


  return Math.random();

}
console.log(randomFraction());

// Generate Random Whole Numbers with JavaScript
// Math.floor(Math.random() * number);
// Generate Random Whole Numbers within a Range
// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

function randomWholeNum() {

  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum())

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
let myRandomRange = randomRange(5,15)
console.log(myRandomRange)

// Use the parseInt Function
// Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
function convertToInteger(str) {
  return parseInt(str);
  }
  
  convertToInteger("007");
  console.log(convertToInteger())

  // Use the parseInt Function with a Radix
  // Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
  function convertToInteger(str) {
    return parseInt(str, 2)
    }
    
    convertToInteger("10011, 2");
    console.log(convertToInteger("10011, 2"))










