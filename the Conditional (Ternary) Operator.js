// Use the Conditional (Ternary) Operator
// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);
  console.log(checkEqual());

  // Use Multiple Conditional (Ternary) Operators
  // Use Multiple Conditional (Ternary) Operators
  function checkSign(num) {
    return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero";
    }
    
    console.log(checkSign(0));

    // Use Recursion to Create a Countdown
    // The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

    function countdown(n){
      if (n < 1) { 
    
      return [];
      } else {
    
        let count = countdown(n - 1);
        count.unshift(n)
        return count;
      }
    }
    console.log(countdown(5));

    // Use Recursion to Create a Range of Numbers

    function  rangeOfNumbers(startNum, endNum){
      return endNum < startNum
        ? []
        : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
    }
console.log(rangeOfNumbers(5, 8));