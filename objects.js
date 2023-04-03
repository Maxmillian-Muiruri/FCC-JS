//  Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

// You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.

const myDog = {
"name": "lion",
"legs": 4,
"tails": 1,
"friends":["strangers"]
};
console.log(myDog);

// Accessing Object Properties with Dot Notation
// Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
let testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;     
const shirtValue = testObj.shirt; 
console.log(hatValue)

// Accessing Object Properties with Bracket Notation
let testobj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testobj["an entree"];   
const drinkValue = testobj["the drink"];    
console.log(entreeValue)
// Accessing Object Properties with Variables
const testObjs = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;   
const player = testObjs[playerNumber]; 
console.log(player)

//The string Montana would be displayed in the console

const Dog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
//dot notation
Dog.name = "Happy Coder";
//bracket notation
Dog["name"] ="Happy Coder"
console.log(Dog)
//Add New Properties to a JavaScript Object
const mypuppy = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

//Delete Properties from a JavaScript Object

mypuppy.bark = "woof"
console.log(mypuppy)

const mypuppys = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete mypuppys.tails;

console.log(mypuppys)


//Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
function phoneticLookup(val) {
  let result = "";
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  return result;
}

phoneticLookup("charlie");

//solution
function phoneticLookup(val) {
  let result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };
  result = lookup[val];
  return result;
}
console.log(phoneticLookup("alpha"));

//Manipulating Complex Objects
// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];

//solution:

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "max",
    "title": "music",
    "release_year": 2013,
    
    "formats": [
      "you tube",
      "flash"
    ],
  }
];
console.log(myMusic);

// Accessing Nested Objects
//Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
let gloveBoxContents = myStorage.car.inside["glove box"]
let gloveBoxContent = myStorage.car.outside.trunk
console.log(gloveBoxContent);
console.log(gloveBoxContents);