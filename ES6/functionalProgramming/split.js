// Split a String into an Array Using the split Method
function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);

  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));

// Combine an Array into a String Using the join Method
function sentensify(str) {
  // Only change code below this line

  return str.split(/\W/).join(" ");

  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));

// Apply Functional Programming to Convert Strings to URL Slugs
// Only change code below this line
let globalTitle = "Winter Is Coming";
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}
// Only change code above this line
let winterComing = urlSlug(globalTitle);
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(globalTitle));

intermediateAlgorithm;
