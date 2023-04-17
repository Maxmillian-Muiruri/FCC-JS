// Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
// Add Key-Value Pairs to JavaScript ObjectsAdd Key-Value Pairs to JavaScript Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// Only change code below this line
foods["bananas"] = 13;
foods["grapes"] = 35;
foods["strawberries"] = 27;
// Only change code above this line

console.log(foods);

// Access Property Names with Bracket Notation
let food = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples"));

// Use the delete Keyword to Remove Object Properties

let fooD = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

// Only change code below this line
delete fooD.oranges;
delete fooD.plums;
delete fooD.strawberries;
// Only change code above this line

console.log(fooD);
// Modify an Array Stored in an Object
// . We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, "Pete"));
