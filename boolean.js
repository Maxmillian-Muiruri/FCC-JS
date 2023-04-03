// Understanding Boolean Values
function Booleans(){
return(true)
}
Booleans()

// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
if (wasThatTrue){
return "Yes, that was true"
}
return "No, that was false";
trueOrFalse('true');
trueOrFalse('false');
}
console.log(true);
// Comparison with the Equality Operator
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// srict operator ===
function testStrict(val) {
  if (val ===7) { 
    return "Equal";
  }
  return "Not Equal";
}

testStrict(7);
console.log(testStrict(7));
// The inequality operator (!=) 
function testNotEqual(val) {
  if (val!=99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual();
console.log(testNotEqual(99))

// the strict not equal operator(!==)
function testStrictNotEqual(val) {
  if (val !==17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
console.log(testStrictNotEqual(18));
// Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val >100) {  
    return "Over 100";
  }

  if (val >10) {  
    return "Over 10";
  }

  return "10 or Under";
}
// Comparison with the Greater Than Or Equal To Operator
testGreaterThan(10);
console.log(testGreaterThan(1000));
function testGreaterOrEqual(val) {
  if (val>=20) {  
    return "20 or Over";
  }

  if (val>=10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
console.log(testGreaterOrEqual(19))
// Comparison with less tha Or Equal To Operator
function testLessThan(val) {
  if (val<=25) {  
    return "Under 25";
  }

  if (val<=55) {  
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
console.log( testLessThan(55))

// The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
function testLogicalAnd(val) { 

  if (val <= 50 && val >= 25) {
      return "Yes";
  } 
  return "No";
}

testLogicalAnd(10);
console.log(testLogicalAnd(56));
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
function testLogicalOr(val) {

  if (val <10 || val >20) {
    return "Outside";
  }
return "Inside";
}

testLogicalOr(15);
console.log(testLogicalOr(44));