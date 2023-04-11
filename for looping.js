const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
  console.log(`I love JavaScript.`);
}

let sum = 0;
const m = 100;

for (let i = 1; i <= m; i++) {
  sum += i;
}
console.log("sum:", sum);

const arr = [6, 89, 3, 45];
const maximus = Math.min(...arr);

console.log(arr);
console.log(maximus);
