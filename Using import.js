import { uppercaseString, lowercaseString } from "./ Share a Code Bloc";

uppercaseString("hello");
lowercaseString("WORLD!");
console.log(ShareaCodeBloc.js);

// Use * to Import Everything from a File

import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Create an Export Fallback with export default
function subtract(x, y) {
  return x - y;
}
export default function (x, y) {
  return x - y;
}
console.log(subtract(x, y));
