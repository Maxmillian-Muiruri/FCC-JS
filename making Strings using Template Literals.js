const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  "use strict";
  const skippedItems = [];
  for (let i = 0; i < arr.length; i++) {
    skippedItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return skippedItems;
}

// const failuresList = makeList(result.failure);
console.log(makeList(result.skipped));

function list(arr1) {
  "use strict";
  let successitems = [];
  for (let i = 0; i < arr1.length; i++) {
    successitems.push();
    return successitems;
  }
}
console.log(makeList(result.success));
