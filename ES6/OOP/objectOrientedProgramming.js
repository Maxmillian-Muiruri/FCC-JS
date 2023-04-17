// Object Oriented Programming

// Create a Method on an Object

// Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + dog.numLegs + " legs" + ".";
  },
};

console.log(dog.sayLegs());

// Make Code More Reusable with the this Keyword
let dogs = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

console.log(dogs.sayLegs());

// Use a Constructor to Create Objects
function Cat() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Cat();
console.log(hound);

// Extend Constructors to Receive Arguments

function Doog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Doog("George", "White");
console.log(terrier);
// Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Only change code below this line
let myHouse = new House(4);
console.log(myHouse);
myHouse instanceof House;
console.log(myHouse instanceof House);

// Understand Own Properties

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
// Use Prototype Properties to Reduce Duplicate Code
function Dogss(name) {
  this.name = name;
}

Dogss.prototype.numLegs = 2;
// Only change code above this line
let beagle = new Dogss("Snoopy");
console.log(beagle.numLegs);
// IterateOver All Properties
