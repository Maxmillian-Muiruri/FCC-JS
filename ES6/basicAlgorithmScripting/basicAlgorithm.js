// Reverse a String

// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

// Find the Longest Word in a String

// Return the length of the longest word in the provided sentence.
// Your response should be a number.
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
// Return Largest Numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }
  return results;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// Confirm the Ending

// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));

// Repeat a String Repeat a String

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  let result = "";
  for (let i = 0; i < num; i += 1) result += str;
  return result;
}

console.log(repeatStringNumTimes("abc", 3));

// Truncate a String

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  return str.slice(0, num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// Finders Keepers

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));

// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}

console.log(getIndexToIns([40, 60], 50));
