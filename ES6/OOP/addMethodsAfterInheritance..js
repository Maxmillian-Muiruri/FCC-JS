// add Methods After Inheritance
function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Only change code above this line

let beagle = new Dog();
beagle.eat();
beagle.bark();
console.log(Dog.prototype.bark());

// -----------------------------------------------------------
// Override Inherited Methods

function Bird() {}

Bird.prototype.fly = function () {
  return "I am flying!";
};
function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

// Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line

let glideMixin = function (obj) {
  obj.glide = function () {
    console.log(glide);
  };
};

glideMixin(bird);
glideMixin(boat);
console.log(bird.glide);

// Use Closure to Protect Properties Within an Object from Being Modified Externally
// Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.

function Bird() {
  let weight = 15;

  this.getWeight = function () {
    return weight;
  };
}
let hen = new Bird();
hen.getWeight();
console.log(this.getWeight);

// Understand the Immediately Invoked Function Expression (IIFE)

// A common pattern in JavaScript is to execute a function as soon as it is declared:

(function () {
  console.log("Chirp, chirp!");
})();

(function () {
  console.log("A cozy nest is ready");
})();

// Use an IIFE to Create a Module
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();
console.log(funModule);
