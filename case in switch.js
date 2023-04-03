// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
      case 3:
      answer = "gamma"
    break;
      case 4:
      answer = "delta"
    break;
  }
  return answer;
}

console.log(caseInSwitch(4));

function switchOfStuff(val) {
  let answer = "";

//   Write a switch statement to set answer for the following conditions:
// a - apple
// b - bird
// c - cat
// default - stuff
switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(switchOfStuff("c"));

// Write a switch statement to set answer for the following ranges:
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High
function sequentialSizes(val) {
  let answer = "";
  
 switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
 }
  return answer;
}

console.log(sequentialSizes(9));

// Replacing If Else Chains with Switch

// Change the chained if/else if statements into a switch statement.
function chainToSwitch(val) {
  let answer = "";

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  return answer;
}

chainToSwitch(7);

// solution
function chainToSwitch(val) {
  let answer = "";

  switch (val){ 
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
  }

  return answer;
}

console.log(chainToSwitch(99));
// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

function abTest(a, b) {
  

  if (a<0 || b<0){
    
 return undefined;
  }
 
   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
 }
 
 console.log(abTest(2,2));

//  Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'

// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

let count = 0;

function cc(card) {
  
switch (card){

case 2:
case 3:
case 4:
case 5:
case 6:
count++
break;
case 7:
case 8:
case 9:
break;
case 10:
case 'J':
case 'Q':
case 'K':
case 'A':
count--
break;
}

 var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }
  
   return count + " " + holdbet;
  
}

cc(2); cc(3); cc(7); cc('K'); cc('A');