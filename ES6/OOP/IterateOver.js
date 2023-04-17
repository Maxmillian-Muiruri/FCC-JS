// Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let property in beagle) {
  if (Dog.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps);
console.log(prototypeProps);
function Dog(name) {
  this.name = name;
}

// Change the Prototype to a New Object

Dog.prototype = {
  // Only change code below this line
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
console.log();

// Understand Where an Object’s Prototype Comes From

function Dog(name) {
  this.name = name;
}

let eagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(eagle);
console.log(Dog.prototype.isPrototypeOf(eagle));
// Use Inheritance So You Don't Repeat Yourself\
// The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};
console.log(Animal);
// Inherit Behaviors from a Supertype

function Animals() {}

Animals.prototype = {
  constructor: Animals,
  eat: function () {
    console.log("nom nom nom");
  },
};

// Only change code below this line

let duck = Object.create(Animals.prototype); // Change this line
let beagles = Object.create(Animals.prototype); // Change this line
console.log(Animals.prototype);

// Set the Child's Prototype to an Instance of the Parent
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagless = new Dog();
console.log(Object.create(Animal.prototype));

// Reset an Inherited Constructor Property

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let ducks = new Bird();
let beagl = new Dog();
console.log(Dog.prototype.constructor);
