// Sum All Numbers in a Range
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

console.log(sumAll([1, 4]));

// Seek and Destroy
function destroyer(arr) {
  const valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function (val) {
    return !valsToRemove.includes(val);
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));

// Search and Replace
function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }

  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

// DNA Pairing
function pairElement(str) {
  const matchWithBasePair = function (char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }

  return pairs;
}

console.log(pairElement("GCG"));

// Sorted Union
function uniteUnique(arr) {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

console.log(sumFibs(4));

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

console.log(smallestCommons([1, 5]));

// Steamroller
function steamrollArray(val, flatArr = []) {
  val.forEach((item) => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

// Everything Be True

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
  return collection.every((obj) => obj[pre]);
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);
// Make a Person

// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

const Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function (name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function (name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
bob.getFullName();
console.log(bob.getFullName());
